// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-indigo-200 px-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 w-full max-w-sm md:max-w-md">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center text-indigo-700 mb-4">
          My Nail POS
        </h1>
        <p className="text-center text-gray-600 mb-6">
          ระบบ POS สำหรับร้านทำเล็บ
          <br className="hidden md:inline" />
          จัดการลูกค้า คิว และยอดขายได้ง่ายๆ
        </p>
        <Link
          href="/login"
          className="block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 md:py-4 px-6 rounded-lg text-center transition"
        >
          เข้าสู่ระบบ
        </Link>
      </div>
    </div>
  );
}
