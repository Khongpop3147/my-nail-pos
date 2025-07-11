// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="
        relative min-h-screen
        bg-[url('/assets/bg.png')]
        bg-cover bg-center
      "
    >
      {/* Overlay ดำโปร่ง */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 max-w-lg text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            ระบบ POS ร้านทำเล็บ
          </h1>
          <p className="text-gray-200 text-base md:text-lg">
            จัดการลูกค้า จองคิว และสรุปยอดขายด้วยอินเทอร์เฟซที่เข้าใจง่าย
            ลดขั้นตอน เพิ่มประสิทธิภาพการบริการ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/login"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
            >
              เข้าสู่ระบบ
            </Link>
            <Link
              href="/signup"
              className="px-6 py-3 border-2 border-white hover:bg-white/20 text-white font-semibold rounded-lg transition"
            >
              ทดลองใช้งาน
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
