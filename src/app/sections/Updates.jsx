"use client"

import { Button } from "@nextui-org/button"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const DUMMY_NEWS = [
  {
    title: "Zaitun Edisi Natal 2024",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam vitae qui natus adipisci, temporibus quam molestias fugit, dolorum tempora cumque enim id possimus in facilis saepe molestiae error rerum eum.",
    img: "/assets/zaitun-preview.webp"
  },
  {
    title: "Audisi PSDC SAMARA",
    description: "PSDC SAMARA mengadakan audisi untuk anggota baru. Terbuka untuk posisi Soprano, Alto, Tenor, dan Bass.",
    img: "/assets/image-4.png"
  },
  {
    title: "Open Recruitment KOMSOS MATIAS",
    description: "Bagi Sahabat Matias yang punya minat di bidang fotografi, videografi, editing & design, website/socmed management dan bakat lain di ranah publikasi, Komsos St. Matias Rasul adalah pilihan yang tepat untuk Sahabat Matias menyalurkan minatnya sekaligus bersinergi dalam pelayanan bidang pewartaan Gereja kita tercinta ini!",
    img: "/assets/image-5.png"
  },
]

const UpdatesSection = () => {

  const [currentNews, setCurrentNews] = useState(0)
  const swiperRef = useRef()

  const slideNext = () => {
    swiperRef.current?.swiper.activeIndex != 2
      ? swiperRef.current?.swiper.slideNext() :
      swiperRef.current?.swiper.slideTo(0)
  }
  const slidePrev = () => {
    swiperRef.current?.swiper.activeIndex != 0
      ? swiperRef.current?.swiper.slidePrev() :
      swiperRef.current?.swiper.slideTo(2)
  }
  const handleSlideChange = () => {
    setCurrentNews(swiperRef.current?.swiper.activeIndex)
  }

  return (
    <>
      <div className="w-full bg-dark-primary flex flex-row-reverse text-white">
        <div className="w-1/2">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            ref={swiperRef}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {
              DUMMY_NEWS.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="overflow-hidden">
                      <div className="relative h-[50vh] max-h-[720px] w-full hover:scale-110 transition-transform bg-blue-primary/50">
                        <Image
                          src={String(item.img)}
                          alt={String(item.title)}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 75vw"
                          fill />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className="flex justify-end w-1/2 max-w-[650px]">
          <div className="p-8 text-white flex flex-col justify-between">
            <div>
              <p className="font-heading text text-blue-secondary mb-4 font-bold tracking-[10px]">BERITA PAROKI</p>
              <h1 className="font-heading text-5xl font-bold line-clamp-2 mb-4 leading-normal">{DUMMY_NEWS[currentNews].title}</h1>
              <p className="line-clamp-2">{DUMMY_NEWS[currentNews].description}</p>
            </div>
            <div className="flex gap-4 justify-end">
              <Button onPress={slidePrev} disableRipple isIconOnly variant="ghost" radius="full" color="primary" size="sm">{"<"}</Button>
              <Button onPress={slideNext} disableRipple isIconOnly variant="ghost" radius="full" color="primary" size="sm">{">"}</Button>
            </div>
            {/* <Button as={Link} href="/zaitun" variant="ghost" radius="sm" className="text-white mt-8 data-[hover=true]:border-blue-secondary data-[hover=true]:!bg-blue-secondary">Kunjungi</Button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default UpdatesSection