import "@/styles/globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "My Nail POS",
  description: "ระบบ POS ร้านทำเล็บ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <Providers>
          <header className="p-4 bg-blue-600 text-white">
            <h1>My Nail POS</h1>
          </header>
          <main className="p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
