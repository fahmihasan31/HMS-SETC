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

  const [navItems] = useState([
    { label: "Tentang Kami", path: "/" },
    {
      label: "Jasa yang diberikan",
      submenu: [
        { label: "Berita", path: "/blog/berita" },
        { label: "Tutorial", path: "/blog/tutorial" },
      ],
    },
    { label: "Kerjasama", path: "/produk" },
    { label: "Daftar Pelatihan", path: "/pelatihan" },
    { label: "Produk UMKM", path: "/produk" },
    { label: "Cerita SETC", path: "/pelatihan" },
    { label: "Bantuan", path: "/pelatihan" },
  ]);

  return (
    <nav className="w-full bg-transparent px-2 md:px-4 py-3 flex justify-center">
      <div className="w-full max-w-screen-lg mx-auto rounded-2xl border p-1">
        {/* === DESKTOP === */}
        <div className="hidden md:flex items-center justify-between bg-white px-4 py-2 rounded-2xl shadow-md">
          <Image
            src="/images/setc-logo.png"
            alt="SETC"
            width={60}
            height={25}
            className="object-contain"
          />
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4 text-sm text-gray-700 font-medium">
              {navItems.map((item) =>
                item.submenu ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger className="text-sm">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="p-2 w-36 space-y-1">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <NavigationMenuLink asChild>
                              <Link href={sub.path}>{sub.label}</Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink asChild>
                      <Link href={item.path}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          <Image
            src="/images/sampoerna.png"
            alt="Sampoerna"
            width={70}
            height={25}
            className="object-contain"
          />
        </div>

        {/* === MOBILE === */}
        <div className="flex md:hidden items-center justify-between bg-white px-3 py-2 rounded-2xl shadow-md">
          <div className="flex items-center gap-2">
            <Image
              src="/images/setc-logo.png"
              alt="SETC"
              width={45}
              height={25}
              className="object-contain"
            />
            <Image
              src="/images/sampoerna.png"
              alt="Sampoerna"
              width={55}
              height={25}
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* === MOBILE MENU === */}
        {open && (
          <div className="md:hidden mt-2 bg-white rounded-xl shadow-md p-3 flex flex-col gap-2">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-2 text-sm text-gray-700 font-medium w-full">
                {navItems.map((item) =>
                  item.submenu ? (
                    <NavigationMenuItem key={item.label} className="w-full">
                      <NavigationMenuTrigger className="w-full justify-between text-left">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-full">
                        <ul className="bg-white px-2 py-2 rounded-lg shadow-inner space-y-1">
                          {item.submenu.map((sub) => (
                            <li key={sub.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={sub.path}
                                  onClick={() => setOpen(false)}
                                  className="block w-full"
                                >
                                  {sub.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.label} className="w-full">
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.path}
                          onClick={() => setOpen(false)}
                          className="block w-full py-1"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
