import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="relative pb-60 mt-20 overflow-hidden">
      {/* Background dengan text SETC */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center z-0 pointer-events-none translate-y-10">
        <h1 className="text-[15rem] sm:text-[20rem] md:text-[30rem] font-bold text-gray-500 opacity-30 leading-none">
          SETC
        </h1>
      </div>

      {/* Footer Content */}
      <div className="px-4 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto bg-[#0B0F0F] text-white rounded-3xl shadow-xl px-6 sm:px-8 md:px-10 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {/* Kolom kiri */}
            <div className="md:w-1/2 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold">
                Ingin tahu level usaha Anda sekarang?
              </h2>
              <p className="text-sm text-gray-300">
                Jawab beberapa pertanyaan singkat untuk mengetahui posisi
                usaha Anda dan rekomendasi program SETC yang sesuai.
              </p>
              <div className="pt-4">
                <Button
                  variant="outline"
                  className="bg-transparent border-2 h-12 rounded-lg border-white text-white hover:bg-white hover:text-black w-full sm:w-auto"
                >
                  Cek Level Usaha
                </Button>
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="md:w-1/2 flex items-center justify-end mt-6 md:mt-24">
              <div className="w-full md:w-4/5 lg:w-3/4 bg-gray-900 rounded-2xl flex items-center overflow-hidden px-2 py-2 gap-2">
                <input
                  type="email"
                  placeholder="Masukkan email anda"
                  className="flex-1 bg-transparent outline-none text-white px-2 py-2 placeholder:text-gray-400"
                />
                <Button className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-lg whitespace-nowrap">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6 text-sm">
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 SETC by Sampoerna. Semua hak dilindungi.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link href="/" className="text-gray-400 hover:text-white">
                Tentang Kami
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                FAQ
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;