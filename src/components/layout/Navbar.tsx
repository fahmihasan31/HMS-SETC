"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center w-full py-1">
      <div className="border p-2 rounded-2xl w-full max-w-4xl">
        {/* === DESKTOP === */}
        <div className="hidden md:flex items-center justify-between bg-white px-6 py-1 rounded-2xl shadow w-full gap-8">
          {/* Logo Kiri */}
          <Image
            src="/images/setc-logo.png"
            alt="SETC"
            width={70}
            height={30}
            className="object-contain"
          />

          {/* Menu Tengah - Tetap pakai NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 text-gray-600 font-medium">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Tentang Kami</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Jasa yang diBerikan
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className=" p-2 w-40 space-y-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/blog/berita">Berita</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/blog/tutorial">Tutorial</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/produk">Kerja Sama</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pelatihan">Daftar Pelatihan</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Logo Kanan */}
          <Image
            src="/images/sampoerna.png"
            alt="Sampoerna"
            width={80}
            height={30}
            className="object-contain"
          />
        </div>

        {/* === MOBILE === */}
        <div className="flex md:hidden items-center justify-between bg-white px-4 py-2 rounded-2xl shadow w-full">
          {/* Logo kiri dan kanan di kiri */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/setc-logo.png"
              alt="SETC"
              width={50}
              height={30}
              className="object-contain"
            />
            <Image
              src="/images/sampoerna.png"
              alt="Sampoerna"
              width={60}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Hamburger button */}
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile NavigationMenu dropdown */}
        {open && (
          <div className="md:hidden mt-2 bg-white rounded-xl shadow p-4 flex flex-col items-start text-left">
            <NavigationMenu>
              <NavigationMenuList className="w-full flex flex-col gap-2 items-start text-gray-700 font-medium">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" onClick={() => setOpen(false)}>
                      Tentang Kami
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="w-full text-left justify-start">
                    Jasa yang diBerikan
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full p-0 text-left">
                    <ul className="bg-white p-2 rounded-lg shadow-md w-full space-y-2 text-left">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/blog/berita"
                            onClick={() => setOpen(false)}
                          >
                            Berita
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/blog/tutorial"
                            onClick={() => setOpen(false)}
                          >
                            Tutorial
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/produk" onClick={() => setOpen(false)}>
                      Kerja Sama
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/pelatihan" onClick={() => setOpen(false)}>
                      Daftar Pelatihan
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
