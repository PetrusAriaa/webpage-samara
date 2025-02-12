import TopCarousell from "./TopCarousell"
import CategorySection from "./CategorySection"
import AdCarousell from "./AdCarousell"

const AdImage1 = [
  "https://storage.googleapis.com/zaitun-dev/ads/1.png",
  "https://storage.googleapis.com/zaitun-dev/ads/2.png",
  "https://storage.googleapis.com/zaitun-dev/ads/3.png",
]

const AdImage2 = [
  "https://storage.googleapis.com/zaitun-dev/ads/4.png",
  "https://storage.googleapis.com/zaitun-dev/ads/5.png",
  "https://storage.googleapis.com/zaitun-dev/ads/6.png",
]

const ContentSection = () => {
  return (
    <>
      <h1 className="text-[2rem] font-ibara font-medium text-xmas-secondary">Artikel Teratas</h1>
      <div className="mt-4 mb-20">
        <TopCarousell />
      </div>
      <div className="flex gap-4 pr-4 lg:hidden">
        <div className="w-1/2">
          <AdCarousell ads={AdImage1} />
        </div>
        <div className="w-1/2">
          <AdCarousell ads={AdImage2} />
        </div>
      </div>
      <CategorySection categoryId={5} categoryTitle="Sambutan"/>
      <CategorySection categoryId={2} categoryTitle="Liputan Utama"/>
      <div className="flex gap-4 pr-4 lg:hidden mt-12">
        <div className="w-1/2">
          <AdCarousell ads={AdImage1} />
        </div>
        <div className="w-1/2">
          <AdCarousell ads={AdImage2} />
        </div>
      </div>
      <CategorySection categoryId={1} categoryTitle="Liputan Umum"/>
      <CategorySection categoryId={3} categoryTitle="Katekese"/>
      <div className="flex gap-4 pr-4 lg:hidden mt-12">
        <div className="w-1/2">
          <AdCarousell ads={AdImage1} />
        </div>
        <div className="w-1/2">
          <AdCarousell ads={AdImage2} />
        </div>
      </div>
      <CategorySection categoryId={4} categoryTitle="Tradisi dan Sejarah"/>
      <CategorySection categoryId={6} categoryTitle="Serba Serbi"/>
    </>
  )
}

export default ContentSection