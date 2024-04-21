import Link from "next/link"

const Zaitun = ({children}) => {
  return (
    <div className="py-16">
      <div className="w-full flex justify-center">
        <div className="w-[95%] max-w-[1300px]">
          <div className="w-full h-80 bg-blue-primary/75 flex justify-center items-center rounded-xl mb-16">
            <div className="text-white text-center">
              <h1 className="text-4xl font-bold uppercase mb-4">Zaitun Edisi Natal 2024</h1>
              <p>Silakan memilih artikel yang akan dibaca</p>
              <p>atau akses <i>e-book</i> <Link href="#" className="underline">di sini</Link>.</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="bg-slate-200 h-[100vh] w-full">
              <p className="text-3xl text-slate-400 font-semibold">Area untuk navigasi halaman zaitun</p>
            </div>
            <div className="w-full max-w-prose flex-shrink-0">{children}</div>
            <div className="bg-slate-200 min-h-screen max-h-[150vh] w-full">
              <div className="sticky top-20">
                <p className="text-xl text-slate-400 font-semibold mb-4">2 slot iklan komersil</p>
                <div className="w-full aspect-[15/20] bg-slate-300 animate-pulse rounded-lg mb-4" />
                <div className="w-full aspect-[4/3] bg-slate-300 animate-pulse rounded-lg mb-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zaitun