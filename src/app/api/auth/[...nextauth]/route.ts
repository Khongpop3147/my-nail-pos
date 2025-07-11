// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth/next";
import { authOptions } from "@/lib/auth"; // adjust path if needed

// instantiate handler
const handler = NextAuth(authOptions);

// expose GET and POST for the catch-all
export { handler as GET, handler as POST };
