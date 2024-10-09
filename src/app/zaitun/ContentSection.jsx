import Link from "next/link"
import TopCarousell from "./TopCarousell"
import { Button } from "@nextui-org/button"

const ContentSection = () => {
  return (
    <>
      <h1 className="font-heading text-[2rem] font-bold text-blue-primary">Artikel Teratas</h1>
      <div className="mt-4 mb-20">
        <TopCarousell />
      </div>
      <div>
        <h3 className="font-heading text-xl text-blue-secondary my-4">Kategori 1</h3>
        <div className="flex flex-col gap-4">
          {
            [4, 5, 6].map((item) => {
              return (
                <div key={item} className="flex items-center gap-4">
                  <Link href={`/zaitun/artikel${item}`}>
                    <div className="w-56 aspect-square bg-slate-300" />
                  </Link>
                  <div>
                    <Link href={`/zaitun/artikel${item}`}>
                      <h3 className="text-3xl font-heading font-bold hover:text-rose-700 transition-colors">Title {item}</h3>
                    </Link>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="aspect-square w-8 bg-slate-300 rounded-full" />
                        <div>
                          <p className="text-xs text-dark-primary/50 uppercase">Penulis {item}</p>
                          <p className="text-xs text-dark-primary/50">Tanggal terbit {item}</p>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          <div className="flex justify-center">
            <Button color="primary" variant="flat">Tampilkan Lebih Banyak</Button>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-24">
        <h3 className="font-heading text-xl text-blue-secondary my-4">Kategori 2</h3>
        <div className="flex flex-col gap-4">
          {
            [7, 8, 9].map((item) => {
              return (
                <div key={item} className="flex items-center gap-4">
                  <Link href={`/zaitun/artikel${item}`}>
                    <div className="w-56 aspect-square bg-slate-300" />
                  </Link>
                  <div>
                    <Link href={`/zaitun/artikel${item}`}>
                      <h3 className="text-3xl font-heading font-bold hover:text-rose-700 transition-colors">Title {item}</h3>
                    </Link>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="aspect-square w-8 bg-slate-300 rounded-full" />
                        <div>
                          <p className="text-xs text-dark-primary/50 uppercase">Penulis {item}</p>
                          <p className="text-xs text-dark-primary/50">Tanggal terbit {item}</p>
                        </div>
                      </div>
                  </div>
                </div>
              )
            })
          }
          <div className="flex justify-center">
            <Button color="primary" variant="flat">Tampilkan Lebih Banyak</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentSection