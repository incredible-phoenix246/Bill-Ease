import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { login } from "./actions/auth";
import { baseurl } from "./utils";
import Calls from "./actions/axios";
import { LoginSchema } from "./schemas";

const $Http = Calls(baseurl);

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIEN_ID,
      clientSecret: process.env.GOOGLE_CLIEN_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { identifier, password } = validatedFields.data;

          const user = await login({ identifier, password });
          if (!user) return null;

          return user.user;
        }
        return true;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const res = await $Http.post("/auth/google", {
          email: profile?.email,
          name: profile?.name,
          image: profile?.image,
        });
        const user = res.data.user;
        return user;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
