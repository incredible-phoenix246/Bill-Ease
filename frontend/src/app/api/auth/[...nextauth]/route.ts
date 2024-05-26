import authConfig from "@/auth.config";
import NextAuth from "next-auth/next";


const AuthHandler = NextAuth(authConfig)

export {AuthHandler as GET, AuthHandler as POST}



// export const runtime = "edge";
