import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import ContentSection from "./ContentSection";

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
          <div className="w-[16%] min-w-[180px] h-full bg-rose-950 p-2">
            <p className="text-center italic text-white/50">Advertisements</p>
            <div className="relative w-full aspect-[4/5] bg-slate-200 rounded flex overflow-hidden mb-2">
              {/* <p className="text-3xl text-slate-500">A1</p> */}
              <Image className="object-cover" fill priority alt="" src="/assets/ads-sample-1.png" />
            </div>
            <div className="relative w-full aspect-[4/5] bg-slate-200 rounded flex overflow-hidden mb-2">
              {/* <p className="text-3xl text-slate-500">A1</p> */}
              <Image className="object-cover" fill priority alt="" src="/assets/ads-sample-2.png" />
            </div>
            <div className="relative w-full aspect-[4/5] bg-slate-200 rounded flex overflow-hidden mb-2">
              {/* <p className="text-3xl text-slate-500">A1</p> */}
              <Image className="object-cover" fill priority alt="" src="/assets/ads-sample-3.png" />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative w-full h-full">
              <Image className="object-cover" fill priority alt="" src="/assets/zaitun-preview.webp" />
            </div>
          </div>
          <div>
            <div className="h-full w-2 bg-rose-600" />
          </div>
          <div className="px-4 h-full border-r bg-white">
          </div>
        </div>
        <div className="flex justify-end w-full bg-xmas-neutral">
          <div className="w-[45%] py-10 px-4 flex-shrink-0">
            <div className="w-full max-w-prose">
              <h1 className="text-8xl font-ibara font-bold leading-tight text-xmas-primary">Zaitun Edisi Natal 2024</h1>
              {/* <div className="flex gap-2 items-center text-sm mb-8">
                <Link href="/" className="text-blue-secondary">Beranda</Link>
                <MdChevronRight className="text-neutral-600" />
                <p href="/zaitun" className="text-blue-secondary font-semibold">Zaitun</p>
              </div> */}
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