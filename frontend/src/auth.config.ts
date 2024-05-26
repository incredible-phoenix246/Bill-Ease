import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { login } from "./actions/auth";
import { baseurl } from "./utils";
import Calls from "./actions/axios";
import { LoginSchema } from "./schemas";
import { GOOGLE_SIGN_IN } from "./actions/auth";
import { Redirect } from "next";
import { User } from "./types";

const $Http = Calls(baseurl);

const authConfig: NextAuthOptions = {
  secret: "i AM A SECretive secret",

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // profile(profile) {
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.picture,
      //   };
      // },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      credentials: {
        identifier: {
          label: "Username | email",
          type: "text",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        //@ts-ignore
        const parsedValues = JSON.parse(credentials.loginva);
        const validatedFields = LoginSchema.safeParse(parsedValues);
        if (!validatedFields.success) {
          return null;
        }
        const { identifier, password } = validatedFields.data;
        const res = await login({ identifier, password });
        if (!res) return null;

        const user = res.user;

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }: any) {
      return { ...account, ...profile, ...user };
    },

    async jwt({ token, user, account, profile }: any) {
      if (account?.provider !== "google") {
        return { ...token, ...user, ...account, ...profile };
      }
      const res = await GOOGLE_SIGN_IN(profile);
      const use = res.user;
      return { ...token, ...user, ...account, ...profile, ...use };
    },
    async session({ session, token, user }) {
      console.log(user);
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default authConfig;
