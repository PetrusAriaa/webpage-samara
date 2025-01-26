import TopCarousell from "./TopCarousell"
import CategorySection from "./CategorySection"

const ContentSection = () => {
  return (
    <>
      <h1 className="text-[2rem] font-ibara font-medium text-xmas-secondary">Artikel Teratas</h1>
      <div className="mt-4 mb-20">
        <TopCarousell />
      </div>
      <CategorySection categoryId={5} categoryTitle="Sambutan"/>
      <CategorySection categoryId={2} categoryTitle="Liputan Utama"/>
      <CategorySection categoryId={1} categoryTitle="Liputan Umum"/>
      <CategorySection categoryId={3} categoryTitle="Katekese"/>
      <CategorySection categoryId={4} categoryTitle="Tradisi dan Sejarah"/>
      <CategorySection categoryId={6} categoryTitle="Serba Serbi"/>
    </>
  )
}

export default ContentSection