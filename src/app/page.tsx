import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TestimonialCard from "@/components/layout/TestimonialCard";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <header className="px-4 md:px-12 lg:px-24 lg-py-20 flex items-center justify-center lg:py-20 py-15">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-center">
          <div className="md:col-span-6 space-y-6 text-center md:text-left">
            <div className="border px-4 py-1 rounded-full inline-block text-xs sm:text-sm md:text-base font-semibold bg-white">
              🔥 Dipercaya Ribuan Wirausaha
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Mulai Langkah Wirausaha Anda <br />
              di <span className="text-primary">SETC</span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base md:text-xl">
              Belajar dan bertumbuh bersama SETC. Ikuti pelatihan{" "}
              <br className="hidden sm:block" />
              kewirausahaan terpadu yang terbuka untuk semua.
            </p>
            <Link href="/">
              <Button className="w-full md:w-auto">Kenali Lebih Lanjut</Button>
            </Link>
          </div>

          {/* Ilustrasi */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] max-w-xs sm:max-w-sm md:max-w-md bg-white rounded-3xl shadow-inner border-2 border-gray-200" />
          </div>
        </div>
      </header>

      {/* statistic */}
      <section className=" py-20 px-4 md:px-12 lg:px-24">
        <div className="flex justify-center items-center">
          <div className="border px-4 py-1 rounded-full inline-block text-sm md:text-base font-semibold bg-white">
            📊 Data Kami dalam Angka
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center mt-6 mb-4">
          Statistik Peserta
        </h1>
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-6">
          <Card className="bg-[#0B0F0F] text-white rounded-[32px] shadow-2xl w-full max-w-md text-center">
            <CardHeader className="space-y-1">
              <h2 className="text-4xl md:text-5xl font-bold">200.000+</h2>
              <p className="text-sm md:text-base">
                Orang telah mengunjungi SETC
              </p>
            </CardHeader>
            <CardContent />
          </Card>

          <Card className="bg-[#0B0F0F] text-white rounded-[32px] shadow-2xl w-full max-w-md text-center">
            <CardHeader className="space-y-1">
              <h2 className="text-4xl md:text-5xl font-bold">100.000+</h2>
              <p className="text-sm md:text-base">Peserta yang Telah Dilatih</p>
            </CardHeader>
            <CardContent />
          </Card>
        </div>
      </section>

      {/* testimoni */}
      <section className="py-20 px-4 md:px-12 lg:px-24">
        <div className="flex justify-center items-center">
          <div className="border px-4 py-1 rounded-full inline-block text-sm md:text-base font-semibold bg-white">
            💬 Kata Mereka Tentang SETC
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center mt-6 mb-4">
          Testimoni Peserta
        </h1>
        <div className="flex justify-center items-stretch flex-wrap gap-6 mt-20">
          <TestimonialCard
            name="Jessica Simpson"
            image="/images/person.jpeg"
            rating="★★★★★"
            testimonial="Berkat SETC, usaha saya <strong>berkembang</strong> dan produk saya <strong>lebih dikenal luas</strong>."
          />
          <TestimonialCard
            name="Jessica Simpson"
            image="/images/person.jpeg"
            rating="★★★★★"
            testimonial="Berkat SETC, usaha saya <strong>berkembang</strong> dan produk saya <strong>lebih dikenal luas</strong>."
          />
          <TestimonialCard
            name="Jessica Simpson"
            image="/images/person.jpeg"
            rating="★★★★★"
            testimonial="Berkat SETC, usaha saya <strong>berkembang</strong> dan produk saya <strong>lebih dikenal luas</strong>."
          />
        </div>
      </section>
    </div>
  );
}
