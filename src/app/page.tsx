import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Full screen hero section */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <Navbar />
      </div>

      <section className="min-h-screen px-4 md:px-12 lg:px-24 flex flex-col">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-1 items-center">
          {/* Kiri */}
          <div className="md:col-span-6 space-y-8">
            <div className="border px-4 py-1 rounded-full inline-block text-sm md:text-base font-semibold">
              🔥 Dipercaya Ribuan Wirausaha
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Mulai Langkah Wirausaha Anda <br /> di <span>SETC</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Belajar dan bertumbuh bersama SETC. Ikuti pelatihan <br />{" "}
              kewirausahaan terpadu yang terbuka untuk semua.
            </p>
            <Link href="/">
              <Button>Gabung Sekarang</Button>
            </Link>
          </div>

          {/* Kanan */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-full h-[500px] max-w-lg bg-white rounded-3xl shadow-inner border-2 border-gray-200"></div>
          </div>
        </header>
      </section>

      {/* Konten setelah scroll */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Konten Tambahan</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
          Ini adalah konten setelah user scroll. Bisa diisi dengan informasi
          lanjutan tentang pelatihan, testimoni, atau ajakan lainnya.
        </p>
      </section>
    </div>
  );
}
