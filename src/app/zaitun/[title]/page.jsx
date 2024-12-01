import Image from "next/image";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const Contents = () => {
  return (
    <div className="mb-20">
      <div className="w-full aspect-[16/9] bg-blue-primary/40 flex justify-center items-center rounded-xl my-8">
        <p>Headline Picture</p>
      </div>
      <p className="mb-4 text-xmas-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit dolore iste tenetur fugiat laboriosam aut eligendi a totam nostrum magnam unde ex porro odit voluptates blanditiis molestias in suscipit, nisi nihil nulla. Dolorem pariatur ut a iste distinctio quam quos aperiam rerum nesciunt perspiciatis totam aliquid, tempora quisquam odio eum omnis expedita delectus doloremque, numquam unde iusto, voluptatibus atque? Magnam hic praesentium a ipsa provident accusantium neque eum omnis similique earum atque amet nemo doloremque, maiores, id, quidem tempore perspiciatis quos placeat! Nisi, eos. Itaque architecto pariatur earum eveniet magni, asperiores odio sint beatae delectus hic, expedita quia ipsum?</p>
      <p className="mb-4 text-xmas-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit dolore iste tenetur fugiat laboriosam aut eligendi a totam nostrum magnam unde ex porro odit voluptates blanditiis molestias in suscipit, nisi nihil nulla. Dolorem pariatur ut a iste distinctio quam quos aperiam rerum nesciunt perspiciatis totam aliquid, tempora quisquam odio eum omnis expedita delectus doloremque, numquam unde iusto, voluptatibus atque? Magnam hic praesentium a ipsa provident accusantium neque eum omnis similique earum atque amet nemo doloremque, maiores, id, quidem tempore perspiciatis quos placeat! Nisi, eos. Itaque architecto pariatur earum eveniet magni, asperiores odio sint beatae delectus hic, expedita quia ipsum?</p>
      <div className="w-full aspect-[16/9] bg-blue-primary/40 flex justify-center items-center rounded-xl my-8">
        <p>Headline Picture</p>
      </div>
      <p className="mb-4 text-xmas-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit dolore iste tenetur fugiat laboriosam aut eligendi a totam nostrum magnam unde ex porro odit voluptates blanditiis molestias in suscipit, nisi nihil nulla. Dolorem pariatur ut a iste distinctio quam quos aperiam rerum nesciunt perspiciatis totam aliquid, tempora quisquam odio eum omnis expedita delectus doloremque, numquam unde iusto, voluptatibus atque? Magnam hic praesentium a ipsa provident accusantium neque eum omnis similique earum atque amet nemo doloremque, maiores, id, quidem tempore perspiciatis quos placeat! Nisi, eos. Itaque architecto pariatur earum eveniet magni, asperiores odio sint beatae delectus hic, expedita quia ipsum?</p>
    </div>
  )
}

const ArticlePage = ({params}) => {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="h-screen w-[55%] fixed flex">
          <div className="w-[16%] min-w-[180px] flex-shrink-0 h-full bg-zinc-800 p-2">
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
              <div className="flex gap-2 items-center text-sm mb-8">
                <Link href="/zaitun" className="text-xmas-tertiary">Beranda</Link>
                <MdChevronRight className="text-neutral-600" />
                <p className="text-xmas-tertiary font-semibold">{String(params.title)}</p>
              </div>
              <div className="mb-8">
                <div className="pb-3 border-b border-xmas-secondary/50 flex flex-col gap-4">
                  <h2 className="font-ibara text-xl text-xmas-tertiary font-semibold">Sub Kategori (opsional)</h2>
                  <h1 className="text-7xl font-ibara font-semibold text-xmas-primary leading-none">Lorem Ipsum Dolor Sit Amet</h1>
                  <div className="flex items-center gap-2">
                    <div className="aspect-square w-8 bg-slate-300 rounded-full" />
                    <div>
                      <p className="text-xs text-xmas-secondary font-semibold font-heading uppercase">WRITER</p>
                      <p className="text-xs text-xmas-tertiary font-heading">19 Juni 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <Contents />
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