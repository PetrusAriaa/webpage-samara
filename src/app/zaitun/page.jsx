import Image from "next/image";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";

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
          <div className="w-64 h-full bg-rose-950 p-2">
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
        <div className="flex justify-end w-full">
          <div className="w-[45%] py-10 px-4 flex-shrink-0">
            <div className="w-full max-w-prose">
              <h1 className="text-6xl font-heading font-bold">Zaitun Edisi Natal 2024</h1>
              <div className="flex gap-2 items-center text-sm mb-8">
                <Link href="/" className="text-blue-secondary">Beranda</Link>
                <MdChevronRight className="text-neutral-600" />
                <p href="/zaitun" className="text-blue-secondary font-semibold">Zaitun</p>
              </div>
              <div className="mb-10">
                <h1 className="font-heading text-4xl font-bold text-blue-primary mb-4">Artikel Teratas</h1>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title1">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title1" className="font-semibold text-lg">Artikel 1</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title1" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title2">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title2" className="font-semibold text-lg">Artikel 2</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title2" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title3">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title3" className="font-semibold text-lg">Artikel 3</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title3" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title4">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title4" className="font-semibold text-lg">Artikel 4</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title4" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title5">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title5" className="font-semibold text-lg">Artikel 5</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title5" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title6">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title6" className="font-semibold text-lg">Artikel 6</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title6" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title7">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title7" className="font-semibold text-lg">Artikel 7</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title7" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title8">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title8" className="font-semibold text-lg">Artikel 8</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title8" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                  <div className="border rounded-xl overflow-hidden">
                    <Link href="/zaitun/title9">
                      <div className="w-full aspect-[4/3] bg-slate-200 animate-pulse" />
                    </Link>
                    <div className="p-2">
                      <Link href="/zaitun/title9" className="font-semibold text-lg">Artikel 9</Link>
                      <p className="line-clamp-2 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam maiores est, cumque aspernatur asperiores saepe modi repudiandae quia quasi necessitatibus. Facere accusamus soluta exercitationem vel veniam molestias cumque voluptates sapiente.</p>
                      <Link href="/zaitun/title9" className="italic text-blue-secondary text-xs hover:underline">Kunjungi Artikel</Link>
                    </div>
                  </div>
                </div>
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