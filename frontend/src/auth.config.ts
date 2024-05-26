import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { login } from "./actions/auth";
import { baseurl } from "./utils";
import Calls from "./actions/axios";
import { LoginSchema } from "./schemas";

const $Http = Calls(baseurl);

const authConfig: NextAuthOptions =  {
  secret: "i AM A SECretive secret",

  providers: [
    GoogleProvider({
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
      name: 'Credentials',
      id: 'credentials',
      type: 'credentials',
      credentials: {
        username: {label: "Username", type: "text", placeholder: "username"},
        password: {label: "Password", type: 'password'}
      },
      authorize: async (credentials) => {
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
    // @ts-expect-error
    async signIn({ account, profile }) {
      if (account!.provider === "google") {
        
        console.log("Logging Provider");
        console.log(profile);
        
        return true
      }
    },
    // @ts-expect-error
    async jwt(token: { accessToken: any; }, user: any, account: { accessToken: any; }, profile: any, isNewUser: any) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    // @ts-expect-error
    async session(session: { accessToken: any; }, token: { accessToken: any; }) {
      session.accessToken = token.accessToken;
      return session;
    },
    pages: {
      signIn: '/auth/login'
    },
  }
}

export default authConfig