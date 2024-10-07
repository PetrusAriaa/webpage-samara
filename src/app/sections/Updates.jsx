import { Button } from "@nextui-org/button"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaYoutube } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const UpdatesSection = () => {
  return (
    <>
      <div className="flex justify-center bg-blue-primary py-1">
        <div className="w-[95%] max-w-[1300px] text-white flex justify-center items-center gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <p className="text-xs">(021) 5411509</p>
          </div>
          <Link href="mailto:sekretariat@parokikosambibaru.or.id">
            <FiMail className="text-lg hover:text-blue-secondary transition-colors" />
          </Link>
          <Link href="https://wa.me/6281806999631" target="_blank">
            <FaWhatsapp className="text-lg hover:text-blue-secondary transition-colors" />
          </Link>
          <Link href="http://instagram.com/paroki.kosambibaru" target="_blank">
            <FaInstagram className="text-lg hover:text-blue-secondary transition-colors" />
          </Link>
          <Link href="https://www.youtube.com/@GerejaSantoMatiasRasul" target="_blank">
            <FaYoutube className="text-xl hover:text-blue-secondary transition-colors" />
          </Link>
        </div>
      </div>
      <div className="w-full bg-dark-primary flex justify-between">
        <div className="text-white p-8 w-3/5">
          <p className="font-heading text text-blue-secondary mb-4 font-bold tracking-[10px]">BERITA PAROKI</p>
          <h1 className="font-heading text-5xl font-bold line-clamp-2 mb-4">Zaitun Edisi Natal 2024</h1>
          <p className="line-clamp-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vitae qui natus adipisci, temporibus quam molestias fugit, dolorum tempora cumque enim id possimus in facilis saepe molestiae error rerum eum.</p>
          <Button as={Link} href="/zaitun" variant="ghost" radius="sm" className="text-white mt-8 data-[hover=true]:border-blue-secondary data-[hover=true]:!bg-blue-secondary">Kunjungi</Button>
        </div>
        <div className="overflow-hidden w-full">
          <div className="relative h-96 w-full hover:scale-110 transition-transform bg-blue-primary/50">
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