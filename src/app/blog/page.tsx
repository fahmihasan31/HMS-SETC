import Navbar from "@/components/layout/Navbar";
import { BsFillSave2Fill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="px-4 md:px-12 lg:px-24 py-10 lg:py-20 text-center">
        {/* Blog Posts Badge */}
        <div className="flex justify-center mb-4">
          <div className="border px-4 py-1 rounded-full inline-flex items-center gap-2 bg-white text-sm md:text-base font-semibold shadow-sm">
            <BsFillSave2Fill size={16} />
            <span>Blog Posts</span>
          </div>
        </div>

        <div className="text-4xl md:text-5xl mb-6">💡</div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Inspirasi dan Tips
          <br />
          dari Tim Ahli Kami
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-700 ">
          Dapatkan inspirasi, panduan praktis, serta tips terbaru dari SETC
          untuk membantu usaha Anda berkembang lebih cepat.
        </p>
      </header>
    </div>
  );
}
