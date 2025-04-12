"use client";

import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center w-full py-1">
      <div className="border p-2 rounded-2xl">
        <div className="flex items-center justify-between bg- white px-6 py-1 rounded-2xl shadow w-full max-w-4xl gap-8">
          {/* Logo Kiri */}
          <Image
            src="/images/setc-logo.png"
            alt="SETC"
            width={70}
            height={30}
            className="object-contain"
          />

          {/* Menu Tengah */}
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 text-gray-600 font-medium">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/">Beranda</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-white p-4 rounded-lg shadow-md w-40 space-y-2">
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
                  <Link href="/produk">Produk</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pelatihan">Pelatihan</Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
