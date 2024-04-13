"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsList, BsXLg } from "react-icons/bs";
import { useEffect, useState } from "react"
import Image from "next/image";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    })
  }, [])

  const path = usePathname()
  const shouldRenderNav = path === "/"
  const scrollTreshold = shouldRenderNav ? 200 : 50


  return (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      isBlurred={false}
      classNames={{
        base: (scrollPos > scrollTreshold ? "lg:py-0 " : "lg:py-4 ") + "bg-white py-0 border-b border-slate-200/50 transition-all shadow-lg drop-shadow-sm",
        wrapper: "max-w-[1300px]",
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          icon={isMenuOpen ? <BsXLg size={30} /> : <BsList size={30} />}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-fit aspect-square flex lg:hidden hover:bg-slate-200/50 text-teal-secondary h-min p-2" />
        <NavbarBrand className="hidden sm:block w-fit ">
            <Link href="/">
              <div className={
                (scrollPos > scrollTreshold ? "lg:h-14 " : "lg:h-20 ") + 
                " relative h-14 aspect-[54/10] transition-all"
                }>
                <Image src="/static/logo_50.svg" alt="" fill className="object-cover"/>
              </div>
            </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-8" justify="end">
        <NavbarItem>
          <Link
            href="/"
            className={
              // (scrollPos > scrollTreshold ? "lg:text-neutral-dark " : "lg:text-white ") +
              "transition-colors text-neutral-dark hover:bg-enova-sky-500/25 hover:!text-enova-sky-500 rounded-md px-3 py-1"
            }
          >
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className={
              // (scrollPos > scrollTreshold ? "lg:text-neutral-dark " : "lg:text-white ") +
              "transition-colors text-neutral-dark hover:bg-enova-sky-500/25 hover:!text-enova-sky-500 rounded-md px-3 py-1"
            }
          >
            Profil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className={
              // (scrollPos > scrollTreshold ? "lg:text-neutral-dark " : "lg:text-white ") +
              "transition-colors text-neutral-dark hover:bg-enova-sky-500/25 hover:!text-enova-sky-500 rounded-md px-3 py-1"
            }
          >
            Jadwal
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className={
              // (scrollPos > scrollTreshold ? "lg:text-neutral-dark " : "lg:text-white ") +
              "transition-colors text-neutral-dark hover:bg-enova-sky-500/25 hover:!text-enova-sky-500 rounded-md px-3 py-1"
            }
          >
            Berita
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className={
              // (scrollPos > scrollTreshold ? "lg:text-neutral-dark " : "lg:text-white ") +
              "transition-colors text-neutral-dark hover:bg-enova-sky-500/25 hover:!text-enova-sky-500 rounded-md px-3 py-1"
            }
          >
            Galeri
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="text-neutral-dark p-0 gap-0 h-fit">
        <NavbarMenuItem className="flex">
          <Link onClick={() => setIsMenuOpen(false)} href="/" className="w-full hover:bg-teal-secondary/75 hover:text-white transition-colors py-2 px-4 border-b border-slate-200">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex">
          <Link onClick={() => setIsMenuOpen(false)} href="/about" className="w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-4 border-b border-slate-200">
            About Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;