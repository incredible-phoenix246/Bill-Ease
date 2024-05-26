import NextAuth, { NextAuthOptions } from "next-auth";

import authConfig from "./auth.config";

// export const BASE_PATH = "/api/auth";
// export const handlers = NextAuth({
//   events: {
//     async signIn({ user }) {
//       console.log("signIn", user.email);
//     },
//   },
//   ...authConfig,
//   basePath: BASE_PATH,
//   secret: process.env.AUTH_SECRET,
// });
