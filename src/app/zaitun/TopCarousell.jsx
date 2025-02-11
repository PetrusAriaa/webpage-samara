'use client'

import { Button } from "@nextui-org/button"
import {useState, useRef, useEffect} from "react"
import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay } from 'swiper/modules'
import Image from "next/image"

import 'swiper/css'
import Link from "next/link"
import { getTopArticles } from "@/actions/articles"

const TOP_DATA = [
  {
    title: "St. Matias Rasul, Pelindung Paroki Kosambi Baru",
    slug: "st-matias-rasul-pelindung-paroki-kosambi-baru",
    paragraph: "Nama Matias berasal dari bahasa Yunani Mattatias (Ματταθίας). Nama ini kemudian disingkat menjadi Mattias (Μαθθίας). Nama Matias sendiri berarti “Pemberian Allah”. Matias lahir pada awal abad pertama Masehi di Yudea. Meskipun namanya tidak disebutkan dalam keempat Injil utama dan tidak dipilih langsung oleh Yesus menjadi rasul, ia merupakan murid yang setia mengikuti Yesus dari awal Yesus dibaptis, hingga akhirnya menjadi pengganti Yudas Iskariot melalui undian. Sebagai ikon Gereja, Matias dilukiskan membawa salib dan kapak halberd (kapak dengan ujung tombak) yang bertuliskan “Super Mathiam, dari Kis 1:26: “et dederunt sortes eis, et cecidit sors super Mathiam…” yang artinya “Lalu mereka membuang undi bagi kedua orang itu dan yang kena undi adalah Matias…”",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/05/Untitled-design.png',
    writer: 'Sonny Sutanto',
    publishedDate: '14 May 2024',
  },
  {
    title: "Yesus yang Tersalib di Kayu Salib yang Panas",
    slug: "yesus-yang-tersalib-di-kayu-salib-yang-panas",
    paragraph: "Perayaan Jumat Agung tidak afdol rasanya kalau tidak ada tablo jalan salib seperti tahun tahun sebelumnya. Karena itu, panitia paskah dari wilayah 10 juga mulai menyusun rencana tablo paskah.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/04/WIN90376-960x1000.jpg',
    writer: 'Prabowo',
    publishedDate: '9 April 2024',
  },
  {
    title: "Menyampaikan Gagasan Butuh Ketrampilan- Workshop “Publik Speaking” WKRI",
    slug: "menyampaikan-gagasan-butuh-ketrampilan-workshop-publik-speaking-wkri",
    paragraph: "Berbicara itu mudah, tapi menyampaikan gagasan di muka umum itu ternyata tidak gampang. Romo Aloysius Yus Noron Pr berbagi pengalaman, betapa groginya saat pertama kali “dipaksa” berkotbah ketika mendampingi misa. Walaupun pernah belajar teori public speaking, praktek kotbah atau bicara di depan umum itu sangat menakutkan ketika itu.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/06/DSC05726-960x1000.jpg',
    writer: 'Prabowo',
    publishedDate: '29 June 2024',
  },
]

const getTopArticle = async (callback) => {
  const articleData = await getTopArticles()
  callback(articleData)
}

const TopCarousell = () => {
  const [topArticles, setTopArticles] = useState([])
  useEffect(()=> {
    getTopArticle(setTopArticles)
  }, [])
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

      {
        topArticles.length > 0 ?
        (
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
                topArticles.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Link href={`/zaitun/${item.slug}`}>
                        <div className="relative w-full aspect-square bg-xmas-tertiary/25">
                          <Image
                            src={item.thumb_img}
                            alt=""
                            fill
                            className="object-cover"
                            />
                        </div>
                      </Link>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        ):
        (
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
                [0, 1, 2].map((i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="relative w-full aspect-square bg-xmas-tertiary/25" />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        )
      }

      {
        topArticles.length > 0 ?
        (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {
              topArticles.map((item, i) => {
                return (
                  <div key={i} className={
                    (currentNews === i ? "-translate-y-3 " : "translate-y-0 ") +
                    " flex flex-col gap-2 transition-transform duration-400"
                    }>
                    <Link href={`/zaitun/${item.slug}`}>
                      <div className={
                        (currentNews === i ? "shadow-lg " : "shadow-none ") +
                        " relative w-full aspect-square bg-xmas-tertiary/25 transition-shadow rounded-lg overflow-hidden"}>
                        <Image
                          src={item.thumb_img}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <Link href={`/zaitun/${item.slug}`}>
                      <h3 className="text-xl font-ibara font-medium text-xmas-primary">{item.title}</h3>
                    </Link>
                    <div className="flex items-center gap-2">
                      <div className="aspect-square w-8 bg-slate-300 rounded-full" />
                      <div>
                        <p className="text-xs text-xmas-secondary uppercase">{item.writer_name}</p>
                        <p className="text-xs text-xmas-tertiary">{new Date(item.created_at).toLocaleDateString('id-US', {
                          dateStyle: 'long'
                        })}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
        :
        (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {
              [0,1,2].map((i) => {
                return (
                  <div key={i} className={
                    (currentNews === i ? "-translate-y-3 " : "translate-y-0 ") +
                    " flex flex-col gap-2 transition-transform duration-400"
                    }>
                      <div className={
                        (currentNews === i ? "shadow-lg " : "shadow-none ") +
                        " relative w-full aspect-square bg-xmas-tertiary/25 transition-shadow rounded-lg"}>
                      </div>
                      <div className="bg-xmas-tertiary/25 w-full h-8 rounded-full animate-pulse" />
                    <div className="flex items-center gap-2">
                      <div className="aspect-square w-8 bg-xmas-tertiary/25 rounded-full flex-shrink-0" />
                      <div className="flex flex-col gap-2 w-1/3">
                        <div className="bg-xmas-tertiary/25 w-full h-3 rounded-full animate-pulse" />
                        <div className="bg-xmas-tertiary/25 w-full h-2 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}
export default TopCarousell