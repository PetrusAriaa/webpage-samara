"use client";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu } from "@nextui-org/dropdown";
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
import { Button } from "@nextui-org/button";
import { usePathname } from "next/navigation";
import { BsList, BsXLg } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPos(window.scrollY);
    });
  }, []);

  const path = usePathname();
  const shouldRenderNav = path === "/";
  const scrollTreshold = shouldRenderNav ? 200 : 50;

  return path.split("/").indexOf("zaitun") > -1 ? null : (
    <NextUINavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      isBlurred={false}
      classNames={{
        base:
          (scrollPos > scrollTreshold ? "lg:py-0 " : "lg:py-4 ") +
          " bg-white fixed py-0 border-b border-slate-200/50 transition-all shadow-lg drop-shadow-sm",
        wrapper: "w-[90%] max-w-[1300px]",
      }}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          icon={isMenuOpen ? <BsXLg size={30} /> : <BsList size={30} />}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="w-fit aspect-square flex lg:hidden hover:bg-blue-secondary/10 text-blue-secondary h-min p-2"
        />
        <NavbarBrand className="hidden sm:block w-fit ">
          <Link href="/">
            <div
              className={
                (scrollPos > scrollTreshold ? "lg:h-14 " : "lg:h-20 ") +
                " relative h-14 aspect-[54/10] transition-all"
              }
            >
              <Image src="/static/logo_50.svg" alt="" fill className="object-cover" />
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex gap-8" justify="end">
        <NavbarItem>
          <Link
            href="/"
            className="transition-colors text-neutral-dark hover:bg-blue-secondary/25 hover:!text-blue-secondary rounded-md px-3 py-1"
          >
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="bg-transparent h-auto transition-colors text-neutral-dark hover:bg-blue-secondary/25 hover:!text-blue-secondary rounded-md px-3 py-1"
              >
                Profil
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profil Menu" >
              <DropdownItem>
                <Link href="/visi-misi" className="w-full py-2 px-4">
                  Visi dan Misi
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/sejarah" className="w-full py-2 px-4">
                  Sejarah Paroki
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/profil-pastor" className="w-full py-2 px-4">
                  Profil Pastor
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#" className="w-full py-2 px-4 text-neutral-400 cursor-not-allowed">
                  Susunan Pengurus
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/zaitun"
            target="_blank"
            className="transition-colors text-neutral-dark hover:bg-blue-secondary/25 hover:!text-blue-secondary rounded-md px-3 py-1"
          >
            Zaitun
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="bg-transparent h-auto transition-colors text-neutral-dark hover:bg-blue-secondary/25 hover:!text-blue-secondary rounded-md px-3 py-1"
              >
                Jadwal
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profil Menu" >
              <DropdownItem>
                <Link href="/jadwal-misa" className="w-full py-2 px-4">
                  Jadwal Misa
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/jadwal-kegiatan" className="w-full py-2 px-4">
                  Jadwal Kegiatan Rutin
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#" className="w-full py-2 px-4 text-neutral-400 cursor-not-allowed">
                  Jadwal Layanan
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#" className="w-full py-2 px-4 text-neutral-400 cursor-not-allowed">
                  Jadwal Petugas Liturgi
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/berita"
            className="transition-colors text-neutral-dark hover:bg-blue-secondary/25 hover:!text-blue-secondary rounded-md px-3 py-1"
          >
            Berita
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/galeri"
            className="transition-colors text-neutral-dark hover:bg-blue-secondary/25 hover:!text-blue-secondary rounded-md px-3 py-1"
          >
            Galeri
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="text-neutral-dark p-0 gap-0 h-fit">
        <NavbarMenuItem className="flex">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/"
            className="w-full hover:bg-teal-secondary/75 hover:text-white transition-colors py-2 px-4 border-b border-slate-200"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/about"
            className="w-full hover:bg-teal-secondary/75 hover:text-white transition-colors text-xl py-2 px-4 border-b border-slate-200"
          >
            About Us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
