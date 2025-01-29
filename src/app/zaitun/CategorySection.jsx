"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const getArticleContent = async (categoryId, callback) => {
  try {
    const res = await fetch(`/api/articles?category=${categoryId}`) 
    const data = await res.json()
    callback(data)
  } catch (err) {
    console.error(err)
  }
}

const CategorySection = ({ categoryId, categoryTitle }) => {
  const [contents, setContents] = useState([])
  useEffect(() => {
    getArticleContent(categoryId, setContents)
  }, [])
  return (
    <div className="mt-20">
      <h3 className="font-ibara font-medium text-2xl my-4 text-xmas-secondary">{categoryTitle}</h3>
      <div className="flex flex-col gap-4">
        {
          contents.length > 0 &&
          contents.map((item, i) => {
            return (
              <div key={i} className="flex items-center gap-4">
                <Link href={`/zaitun/${item.slug}`}>
                <div className="aspect-[4/5] w-56 overflow-hidden">
                  <div className="relative aspect-[4/5] w-56 bg-slate-300 hover:scale-110 ease-in-out duration-500">
                    <Image
                      src={'https://web-admin-eta-gray.vercel.app'+item.thumb_img}
                      fill
                      alt=""
                      className="object-cover"
                    />
                  </div>
                </div>
                </Link>
                <div>
                  <Link href={`/zaitun/${item.slug}`}>
                    <h3 className="text-3xl font-ibara font-semibold text-xmas-primary hover:text-xmas-tertiary transition-colors">{item.title}</h3>
                  </Link>
                  <p className="text-xmas-dark line-clamp-3">{item.paragraph}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="aspect-square w-8 bg-slate-300 rounded-full" />
                    <div>
                      <p className="text-xs text-xmas-secondary uppercase">{item.writer_name}</p>
                      <p className="text-xs text-xmas-tertiary">{new Date(item.created_at).toLocaleDateString('id-US', {dateStyle: "long"})}</p>
                    </div>
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

export default CategorySection