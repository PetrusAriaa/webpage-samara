import Image from "next/image";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import AdCarousell from "../AdCarousell";
import { getDB } from "@/lib/db";

const Contents = ({articleContent}) => {
  const jsonData = JSON.parse(articleContent)
  return (
    <div className="mb-20">
      {
        jsonData.blocks.map((block) => {
          if (block.type === 'paragraph') {
            return <div key={block.id} className="mb-4 text-xmas-dark" dangerouslySetInnerHTML={{__html: block.data.text}}></div>
          }
          if (block.type === 'image') {
            return (
              <div key={block.id} className="my-8">
                <div className="relative w-full aspect-[16/9] rounded-xl my-2 overflow-hidden">
                  <Image src={process.env.BACKEND_URL + block.data.file.url} alt={block.data.caption} fill className="object-cover" />
                </div>
                <p className="text-sm italic ">{block.data.caption}</p>
              </div>
            )
          }
        })
      }
    </div>
  )
}

const AdImage1 = [
  "https://storage.googleapis.com/zaitun-dev/ads/1.png",
  "https://storage.googleapis.com/zaitun-dev/ads/2.png",
]

const AdImage2 = [
  "https://storage.googleapis.com/zaitun-dev/ads/3.png",
  "https://storage.googleapis.com/zaitun-dev/ads/4.png",
]

const AdImage3 = [
  "https://storage.googleapis.com/zaitun-dev/ads/5.png",
  "https://storage.googleapis.com/zaitun-dev/ads/6.png",
]

const ArticlePage = async ({params}) => {
  const param = await params
  const slug = param.title
  let content
  const conn = getDB()
  try {
    const article = await conn.query("SELECT * FROM articles WHERE slug = $1", [slug])
    if (article.rows.length < 1) throw new Error("Article not found")
    content = article.rows[0]
  }
  catch (err) {
    console.error(err)
    return (
      <div>Error</div>
    )
  }
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="h-screen w-[55%] fixed flex">
          <div className="w-[16%] min-w-[180px] flex-shrink-0 h-full bg-zinc-800 p-2">
            <p className="text-center italic text-white/50">Advertisements</p>
            <AdCarousell ads={AdImage1}/>
            <AdCarousell ads={AdImage2}/>
            <AdCarousell ads={AdImage3}/>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative w-full h-full bg-yellow-950">
              <Image className="object-cover brightness-50" fill priority alt="" src={content.headline_img} />
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
              <div className="flex gap-2 items-center text-sm mb-8 w-1/2">
                <Link href="/zaitun" className="text-xmas-tertiary">Beranda</Link>
                <MdChevronRight className="text-neutral-600 flex-shrink-0"/>
                <p className="text-xmas-tertiary font-semibold truncate">{content.title}</p>
              </div>
              <div className="mb-8">
                <div className="pb-3 border-b border-xmas-secondary/50 flex flex-col gap-4">
                  {/* <h2 className="font-ibara text-xl text-xmas-tertiary font-semibold">{content.category_id}</h2> */}
                  <h1 className="text-7xl font-ibara font-semibold text-xmas-primary leading-none">{content.title}</h1>
                  <div className="flex items-center gap-2">
                    <div className="aspect-square w-8 bg-slate-300 rounded-full" />
                    <div>
                      <p className="text-xs text-xmas-secondary font-semibold font-heading uppercase">{content.writer_name}</p>
                      <p className="text-xs text-xmas-tertiary font-heading">{new Date(content.created_at).toLocaleDateString("id-US", {dateStyle:"long"})}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Contents articleContent={content.content_json} />
              <div className="flex justify-between">
                <div className="flex items-center gap-2 hover:text-blue-secondary cursor-pointer transition-colors">
                  <MdChevronLeft />
                  <p>Artikel Sebelumnya</p>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-secondary cursor-pointer transition-colors">
                  <p>Artikel Selanjutnya</p>
                  <MdChevronRight />
                </div>
              </div>
              <div className="w-full h-32 bg-slate-200 mt-8 flex justify-center items-center">
                <p className="text-slate-400">1 slot iklan komersil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage