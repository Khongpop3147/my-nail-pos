import { PrismaClient } from "@prisma/client";

// 1. บอก TS ว่าเราจะขยาย global object ใน NodeJS
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// 2. สร้างหรือ reuse instance จาก global.prisma
const prisma = global.prisma ?? new PrismaClient({ log: ["query"] });

// 3. ถ้าเป็น dev ก็เก็บลง global เพื่อไม่ให้สร้างซ้ำเวลา hot-reload
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;

// 4. บรรทัดนี้ทำให้ TS รู้ว่าไฟล์นี้เป็นโมดูล
export {};
