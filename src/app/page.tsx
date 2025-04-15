import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/layout/TestimonialCard";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="px-4 md:px-12 lg:px-26 py-10 lg:py-24 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-center">
          <div className="md:col-span-6 space-y-6 text-left">
            <div className="border px-4 py-1 rounded-full inline-block text-sm md:text-base font-semibold bg-white">
              🔥 Dipercaya Ribuan Wirausaha
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Mulai Langkah Wirausaha Anda <br />
              di <span className="text-primary">SETC</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
              Belajar dan bertumbuh bersama SETC. Ikuti pelatihan{" "}
              <br className="hidden sm:block" />
              kewirausahaan terpadu yang terbuka untuk semua.
            </p>
            <Link href="/">
              <Button className="w-full md:w-auto text-sm md:text-base py-4 px-6 md:py-5">
                Kenali Lebih Lanjut
              </Button>
            </Link>
          </div>

          <div className="md:col-span-6 flex justify-center">
            <div className="relative w-full h-[280px] sm:h-[360px] md:h-[460px] lg:h-[520px] bg-white rounded-3xl shadow-inner border-2 border-gray-200 md:max-w-2xl overflow-hidden">
              <Image
                src="/images/"
                alt="Illustration"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* statistic */}
      <main>
        <section className="py-20 px-4 md:px-12 lg:px-24">
          <div className="flex justify-center items-center">
            <div className="border px-4 py-1 rounded-full inline-block text-sm md:text-base font-semibold bg-white">
              📊 Data Kami dalam Angka
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 mb-4">
            Statistik Training
          </h1>
          <div className="mt-12 md:mt-20 flex flex-col md:flex-row justify-center items-center gap-6">
            <Card className="bg-[#0B0F0F] text-white rounded-[32px] shadow-2xl w-full max-w-[320px] sm:max-w-[380px] md:max-w-md text-center">
              <CardHeader className="space-y-1">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                  4
                </h2>
                <p className="text-md sm:text-lg md:text-base">
                  Jumlah Pelatihan Aktif
                </p>
              </CardHeader>
              <CardContent />
            </Card>

            <Card className="bg-[#0B0F0F] text-white rounded-[32px] shadow-2xl w-full max-w-[320px] sm:max-w-[380px] md:max-w-md text-center">
              <CardHeader className="space-y-1">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                  28
                </h2>
                <p className="text-md sm:text-lg md:text-base">Mitra</p>
              </CardHeader>
              <CardContent />
            </Card>

            <Card className="bg-[#0B0F0F] text-white rounded-[32px] shadow-2xl w-full max-w-[320px] sm:max-w-[380px] md:max-w-md text-center">
              <CardHeader className="space-y-1">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold">
                  1000
                </h2>
                <p className="text-md sm:text-lg md:text-base">
                  Total Penerima
                </p>
              </CardHeader>
              <CardContent />
            </Card>
          </div>
        </section>

        {/* testimoni */}
        <section className="min-h-screen py-20 px-4 md:px-12 lg:px-24">
          <div className="flex justify-center items-center">
            <div className="border px-4 py-1 rounded-full inline-block text-sm md:text-base font-semibold bg-white">
              💬 Kata Mereka Tentang SETC
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 mb-4">
            Testimoni Peserta
          </h1>
          <div className="flex justify-center items-stretch flex-wrap gap-6 mt-12 md:mt-20">
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
      </main>
    </div>
  );
}
