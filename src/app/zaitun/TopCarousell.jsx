'use client'

import { Button } from "@nextui-org/button"
import {useState, useRef} from "react"
import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import Link from "next/link"

const TopCarousell = () => {
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
    <div className="relative">
      <div className="z-10 flex items-center absolute right-0 top-0 gap-2 mt-4 mr-4">
        <Button onPress={slidePrev} isIconOnly variant="ghost" color="primary" radius="full">{"<"}</Button>
        <Button onPress={slideNext} isIconOnly variant="ghost" color="primary" radius="full">{">"}</Button>
      </div>
      <div className="w-full relative z-0">
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
            [1, 2, 3].map((item) => {
              return (
                <SwiperSlide key={item}>
                  <Link href={`/zaitun/artikel${item}`}>
                    <div className="w-full aspect-square bg-slate-300 flex justify-center items-center">
                      Artikel {item}
                    </div>
                  </Link>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {
          [1, 2, 3].map((item) => {
            return (
              <div key={item} className={
                (currentNews === item-1 ? "-translate-y-3 " : "translate-y-0 ") +
                " flex flex-col gap-2 transition-transform duration-400"
                }>
                <Link href={`/zaitun/artikel${item}`}>
                  <div className={
                    (currentNews === item-1 ? "shadow-lg " : "shadow-none ") +
                    " w-full aspect-square  bg-slate-200 flex justify-center items-center transition-shadow"}>
                    Artikel {item}
                  </div>
                </Link>
                <Link href={`/zaitun/artikel${item}`}>
                  <h3 className="text-xl font-heading font-bold">Title {item}</h3>
                </Link>
                <div className="flex items-center gap-2">
                  <div className="aspect-square w-8 bg-slate-300 rounded-full" />
                  <div>
                    <p className="text-xs text-dark-primary/50 uppercase">Penulis {item}</p>
                    <p className="text-xs text-dark-primary/50">Tanggal terbit {item}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default TopCarousell