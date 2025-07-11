// src/types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      /** เพิ่ม id ให้ session.user */
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    /** เพิ่ม id ให้ user */
    id: string;
  }
}
