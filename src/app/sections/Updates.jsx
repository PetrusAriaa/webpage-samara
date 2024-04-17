import { Button } from "@nextui-org/button"
import Image from "next/image"
import Link from "next/link"

const UpdatesSection = () => {
  return (
    <>
      <div className="flex justify-center bg-blue-primary py-2">
        <div className="w-[95%] max-w-[1300px] text-white flex">
          Media Sosial
        </div>
      </div>
      <div className="w-full bg-dark-primary flex justify-between">
        <div className="text-white p-8 w-3/5">
          <p className="font-serif text-xl text-blue-secondary mb-4">Kabar Terbaru</p>
          <h1 className="text-5xl font-bold line-clamp-2 mb-4">Zaitun Edisi Natal 2024</h1>
          <p className="line-clamp-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vitae qui natus adipisci, temporibus quam molestias fugit, dolorum tempora cumque enim id possimus in facilis saepe molestiae error rerum eum.</p>
          <Button as={Link} href="/zaitun" variant="ghost" radius="sm" className="text-white mt-8 data-[hover=true]:border-blue-secondary data-[hover=true]:!bg-blue-secondary">Kunjungi</Button>
        </div>
        <div className="overflow-hidden w-full">
          <div className="relative h-[50vh] max-h-[720px] w-full hover:scale-110 transition-transform bg-blue-primary/50">
            <Image
              src="/assets/zaitun-preview.webp"
              alt=""
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 75vw"
              fill />
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatesSection