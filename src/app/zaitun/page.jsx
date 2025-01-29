import Image from "next/image";
import Link from "next/link";
import ContentSection from "./ContentSection";

import { HiHome } from "react-icons/hi";
import { FaCompass } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";


const Sponsors = () => {
  return (
    <div>
      <h2 className="text-center font-heading text-blue-primary mb-2">Terima kasih kepada:</h2>
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="bg-blue-600/20 w-full aspect-[4/3] rounded-lg animate-pulse flex justify-center items-center">
          <p className="text-sm">Logo Sponsor tier 1</p>
        </div>
        <div className="bg-blue-600/20 w-full aspect-[4/3] rounded-lg animate-pulse flex justify-center items-center">
          <p className="text-sm">Logo Sponsor tier 1</p>
        </div>
        <div className="bg-blue-600/20 w-full aspect-[4/3] rounded-lg animate-pulse flex justify-center items-center">
          <p className="text-sm">Logo Sponsor tier 1</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mb-3">
        <div className="bg-blue-600/20 w-full aspect-[4/3] rounded-lg animate-pulse flex justify-center items-center">
          <p className="text-sm">Logo Sponsor tier 2</p>
        </div>
        <div className="bg-blue-600/20 w-full aspect-[4/3] rounded-lg animate-pulse flex justify-center items-center">
          <p className="text-sm">Logo Sponsor tier 2</p>
        </div>
        <div className="bg-blue-600/20 w-full aspect-[4/3] rounded-lg animate-pulse flex justify-center items-center">
          <p className="text-sm">Logo Sponsor tier 2</p>
        </div>
        <div className="bg-blue-600/20 w-full aspect-[4/3] rounded-lg animate-pulse flex justify-center items-center">
          <p className="text-sm">Logo Sponsor tier 2</p>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-3">
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
        <div className="bg-blue-600/20 w-full aspect-square rounded-full animate-pulse" />
      </div>
    </div>
  )
}

const ZaitunPage = () => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="h-screen w-[55%] fixed flex">
          <div className="w-[16%] min-w-[180px] h-full bg-zinc-800 p-2">
            <p className="text-center italic text-white/50">Advertisements</p>
            <div className="relative w-full aspect-[4/5] bg-zinc-700 rounded flex overflow-hidden mb-2">
              <Image className="object-cover" fill priority alt="" src="/assets/ads-sample-1.png" />
            </div>
            <div className="relative w-full aspect-[4/5] bg-zinc-700 rounded flex overflow-hidden mb-2">
              <Image className="object-cover" fill priority alt="" src="/assets/ads-sample-2.png" />
            </div>
            <div className="relative w-full aspect-[4/5] bg-zinc-700 rounded flex overflow-hidden mb-2">
              <Image className="object-cover" fill priority alt="" src="/assets/ads-sample-3.png" />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative w-full h-full">
              <Image className="object-cover" fill priority alt="" src="/assets/zaitun-preview.webp" />
            </div>
          </div>
          <div className="px-2 py-6 h-full border-r border-xmas-tertiary/20 bg-xmas-neutral flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Link href="/zaitun">
                <div title="Beranda" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <HiHome className="text-2xl text-xmas-tertiary"/>
                </div>
              </Link>
              <Link href="#">
                <div title="Zaitun" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <FaCompass className="text-2xl text-xmas-tertiary"/>
                </div>
              </Link>
            </div>
            <Link href="/">
              <div title="Keluar" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                <FiLogOut className="text-2xl text-xmas-tertiary"/>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-end w-full bg-xmas-neutral">
          <div className="w-[45%] py-10 px-4 flex-shrink-0">
            <div className="w-full max-w-prose">
              <h1 className="text-8xl font-ibara font-bold leading-tight text-xmas-primary">Zaitun Edisi Natal 2024</h1>
              <div className="my-8">
                <ContentSection />
              </div>
              <div className="flex gap-4 w-full justify-center items-center mb-10">
                <div className="w-56 aspect-[4/5] bg-slate-200 rounded-lg flex justify-center items-center">
                  <p>Ads</p>
                </div>
                <div className="w-56 aspect-[4/5] bg-slate-200 rounded-lg flex justify-center items-center">
                  <p>Ads</p>
                </div>
              </div>
              <Sponsors />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ZaitunPage