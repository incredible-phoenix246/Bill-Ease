import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./actions/auth";
import { LoginSchema } from "./schemas";
import { GOOGLE_SIGN_IN } from "./actions/auth";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
      console.log(res);
      return { ...token, ...user, ...account, ...profile, ...use };
    },
    async session({ session, token }) {
      session.user = token as any;
      console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig;
