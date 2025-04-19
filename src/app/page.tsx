import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TestimonialCard from "@/components/layout/TestimonialCard";
import EventCard from "@/components/layout/EventCard";
import MapComponent from "@/components/layout/MapComponent";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 px-4 py-12 md:px-6 lg:px-8">
      <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Header */}
        <header className="py-12 md:py-18 lg:py-24 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-6 text-left">
              <div className="border px-4 py-1 rounded-full inline-flex text-sm md:text-base font-semibold bg-white">
                🔥 Dipercaya Ribuan Wirausaha
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Mulai Langkah Wirausaha Anda <br />
                di{" "}
                <span className="font-extrabold bg-gradient-to-t from-green-600 via-lime-400 to-yellow-300 bg-clip-text text-transparent">
                  SETC
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
                Belajar dan bertumbuh bersama SETC. Ikuti pelatihan{" "}
                <br className="sm:block" />
                kewirausahaan terpadu yang terbuka untuk semua.
              </p>
              <Link href="/">
                <Button className="rounded-lg sm:w-auto text-sm py-4 px-4 md:py-5 h-10 w-full">
                  Kenali Lebih Lanjut
                </Button>
              </Link>
            </div>

            <div className="md:col-span-6 md:py-6 flex justify-center">
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[460px] lg:h-[520px] bg-white rounded-3xl shadow-inner border-2 border-gray-200 md:max-w-2xl overflow-hidden">
                <Image
                  src="/images/photo-header.jpg"
                  alt="header pict"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Statistik Section */}
        <main>
          <section className="py-12 md:py-18 lg:py-20">
            <div className="px-4 md:px-6 lg:px-8 max-w-screen-lg mx-auto">
              <div className="flex justify-center items-center">
                <div className="border px-4 py-1 rounded-full inline-block text-sm md:text-base font-semibold bg-white">
                  📊 Data Kami dalam Angka
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mt-6 mb-4">
                Statistik Training
              </h1>
              <div className="mt-12 md:mt-20 flex flex-col md:flex-row justify-center items-center gap-6">
                <Card className="bg-[#0B0F0F] text-white rounded-[32px] shadow-2xl w-full max-w-[320px] md:max-w-md text-center">
                  <CardHeader className="space-y-1">
                    <h2 className="text-4xl md:text-7xl font-bold">4</h2>
                    <p className="text-md md:text-base">
                      Jumlah Pelatihan Aktif
                    </p>
                  </CardHeader>
                  <CardContent />
                </Card>

                <Card className="bg-[#0B0F0F] text-white rounded-[32px] shadow-2xl w-full max-w-[320px] md:max-w-md text-center">
                  <CardHeader className="space-y-1">
                    <h2 className="text-4xl md:text-7xl font-bold">28</h2>
                    <p className="text-md md:text-base">Mitra</p>
                  </CardHeader>
                  <CardContent />
                </Card>

                <Card className="bg-[#0B0F0F] text-white rounded-[32px] shadow-2xl w-full max-w-[320px] md:max-w-md text-center">
                  <CardHeader className="space-y-1">
                    <h2 className="text-4xl md:text-7xl font-bold">1000</h2>
                    <p className="text-md md:text-base">Total Penerima</p>
                  </CardHeader>
                  <CardContent />
                </Card>
              </div>
            </div>
          </section>

          {/* Testimoni Section */}
          <section className="py-12 md:py-18 lg:py-20">
            <div className="flex justify-center items-center">
              <div className="border px-4 py-1 rounded-full inline-block text-sm md:text-base font-semibold bg-white">
                💬 Kata Mereka Tentang SETC
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-6 mb-4">
              Testimoni Peserta
            </h1>
            <div className="flex justify-center items-stretch flex-wrap gap-6 max-w-8xl mx-auto mt-15">
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

          {/* Program & Kegiatan Section */}
          <section className="py-12 md:py-18 lg:py-20">
            <div className="flex justify-center items-center">
              <div className="border px-4 py-1 rounded-full inline-block text-xs sm:text-sm md:text-base font-semibold bg-white">
                📆 Ikuti Kegiatan Kami
              </div>
            </div>
            <h1 className="text-5xl font-bold text-center mt-6 mb-16">
              Program & Kegiatan
            </h1>

            <div className="flex justify-center items-stretch flex-wrap gap-6 max-w-7xl mx-auto">
              <EventCard
                title="Pelatihan Budidaya Ikan Lele"
                date="5 Maret 2025"
                time="09.00 WIB - 11.00 WIB"
                location="Lokasi STEC"
                imageUrl="/images/image1.jpg"
              />

              <EventCard
                title="Pelatihan Pemasaran Produk Digital"
                date="15 Maret 2025"
                time="10.00 WIB - 12.00 WIB"
                location="Online"
                imageUrl="/images/image2.jpg"
              />
              <EventCard
                title="Pelatihan Pemasaran Produk Digital"
                date="15 Maret 2025"
                time="10.00 WIB - 12.00 WIB"
                location="Online"
                imageUrl="/images/image2.jpg"
              />
            </div>
          </section>

          {/* Lokasi dan Kontak Kami Section */}
          <section className="py-12 md:py-18 lg:py-20">
            <div
              className="max-w-[1880px] w-full mx-auto bg-white rounded-4xl px-6 md:px-16 py-16 shadow-lg flex flex-col justify-center"
              style={{ minHeight: "720px" }}
            >
              <div className="flex justify-center mb-2">
                <div className="border px-4 py-1 rounded-full inline-block text-xs sm:text-sm md:text-base font-semibold bg-black text-white">
                  📍 Temui Kami di Sini
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-center mt-4 mb-16">
                Lokasi & Kontak Kami
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-12 lg:px-24">
                {/* Kolom informasi kontak - kiri */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Temukan kami</h2>
                    <p className="text-gray-700">
                      Jl. Dusun Beliting, Desa Gunting, Kecamatan Sukorejo,
                      Pasuruan, Jawa Timur.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mt-8">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0="
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">0812-XXXX-XXXX</h3>
                      <p className="text-sm text-gray-500">Telepon</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">kontak@setc.id</h3>
                      <p className="text-sm text-gray-500">Email</p>
                    </div>
                  </div>
                </div>

                <div className="h-full flex items-center justify-center">
                  <MapComponent />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer Section */}
        <section className="overflow-x-hidden">
          <Footer />
        </section>
      </div>
    </div>
  );
}
