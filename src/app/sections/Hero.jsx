import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[70vh] max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image
            src="/assets/parokikosambi-hero.webp"
            alt="hero"
            className="object-cover brightness-75" 
            priority
            fill />
        </div>
      </div>
      <div className="bg-blue-950/50 w-full h-[70vh] max-h-[720px] absolute flex justify-center">
        <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-black text-center">SELAMAT DATANG</h1>
          <div>
            <h2 className="text-3xl font-semibold text-center">DI WEBSITE PAROKI KOSAMBI BARU</h2>
            <h2 className="text-3xl font-semibold text-center">GEREJA SANTO MATIAS RASUL</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection