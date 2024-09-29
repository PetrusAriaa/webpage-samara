import Link from "next/link"
import { FaInstagram, FaPhoneAlt, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Footer = () => {
  return (
    <>
      <div className="flex justify-center bg-blue-primary py-16">
        <div className="w-[95%] max-w-[1300px] grid grid-cols-3 gap-8">
          <div>
            <div className="text-white mb-6">
              <h1 className="text-xl font-black">Paroki Kosambi Baru</h1>
              <h2 className="text-xl mb-2">Gereja Santo Matias Rasul</h2>
              <p>Taman Kosambi Barat blok A ext 1 no.120 Perumahan Kosambi Baru, Jakarta Barat 11750</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-white flex items-center gap-2">
                <FaPhoneAlt />
                <p>Telp. (021) 5411509</p>
              </div>
              <div className="text-white flex items-center gap-2">
                <FaPhoneAlt />
                <p>Fax (021) 54393323</p>
              </div>
              <Link href="mailto:sekretariat@parokikosambibaru.or.id" target="_blank" className="text-white hover:text-blue-secondary transition-colors flex items-center gap-2">
                <FiMail className="text-lg"/>
                <p>sekretariat@parokikosambibaru.or.id</p>
              </Link>
              <Link href="https://wa.me/6281806999631" target="_blank" className="text-white hover:text-blue-secondary transition-colors flex items-center gap-2">
                <FaWhatsapp className="text-lg"/>
                <p>0818 0699 9631 (Whatsapp)</p>
              </Link>
              <div className="mt-4">
                <p className="font-semibold text-white mb-2">Media Sosial:</p>
                <div className="flex items-center gap-2">
                  <Link href="http://instagram.com/paroki.kosambibaru" target="_blank" className="p-2 rounded-full bg-white text-blue-primary hover:bg-blue-secondary hover:text-white transition-colors">
                    <FaInstagram className="text-lg" />
                  </Link>
                  <Link href="https://www.youtube.com/@GerejaSantoMatiasRasul" target="_blank" className="p-2 rounded-full bg-white text-blue-primary hover:bg-blue-secondary hover:text-white transition-colors">
                    <FaYoutube className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-semibold text-white">Komsos Paroki</h2>
            </div>
            <div>
              <Link href="mailto:komsos@parokikosambibaru.or.id" target="_blank" className="text-white hover:text-blue-secondary transition-colors flex items-center gap-2">
                <FiMail className="text-lg"/>
                <p>komsos@parokikosambibaru.or.id</p>
              </Link>
            </div>
          </div>
          <div>
            <div className="size-96 bg-slate-200 animate-pulse rounded" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-blue-950 py-2">
        <div className="w-[95%] max-w-[1300px]">
          <p className="text-center text-white/50 text-sm">© Paroki Kosambi Baru - Gereja Santo Matias Rasul - 2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer