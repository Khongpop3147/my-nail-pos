import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma"; // สมมติ export default prisma

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // ⚠️ ต้องมีพารามิเตอร์ req ด้วย และ return User | null
      async authorize(credentials, req) {
        if (!credentials) return null;

        const { username, password } = credentials;
        // หา user จากฐานข้อมูล
        const user = await prisma.user.findUnique({
          where: { username },
        });

        // ตรวจสอบรหัสผ่าน (ปรับวิธี hash/check ของคุณเอง)
        if (
          user &&
          // สมมติว่า user.password เป็น plain-text หรือ hash ที่คุณจัดการ
          password === user.password
        ) {
          // Return object ที่มีอย่างน้อย id, name (email ก็ได้)
          return {
            id: user.id,
            name: user.name,
            email: user.email ?? undefined,
          };
        }

        // ถ้า auth ไม่ผ่าน ให้ return null
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = (user as any).id;
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
