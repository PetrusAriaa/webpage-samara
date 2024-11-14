import Image from "next/image"

const CardItem = ({img, nama, posisi, masaJabat}) => {
  return (
    <div className="bg-white w-full min-h-[30rem] shadow-lg rounded-lg overflow-hidden">
      <div className="overflow-hidden">
        <div className="w-full aspect-square relative hover:scale-105 transition-transform duration-500">
          <Image
            alt="romo"
            src={img}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-heading text-sm tracking-widest text-blue-secondary mb-3 uppercase">{posisi}</h2>
        <h1 className="font-heading text-blue-primary text-xl font-bold">{nama}</h1>
        <p className="font-xs text-neutral-400">{masaJabat}</p>
      </div>
    </div>
  )
}

const RomoChips = ({img, nama, masaJabat}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-fit items-center">
        <div className="rounded-full overflow-hidden">
          <div className="relative w-48 aspect-square hover:scale-110 transition-transform duration-700">
            <Image
              alt="foto-romo"
              src={img}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h2 className="text-lg font-medium text-blue-primary text-center">{nama}</h2>
        <p className="font-xs text-neutral-400">{masaJabat}</p>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[60vh] max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image
            src="/assets/sejarah-paroki_01.webp"
            alt="hero"
            className="object-cover" 
            priority
            fill />
        </div>
      </div>
      <div className="bg-blue-950/65 w-full h-[60vh] max-h-[720px] absolute flex justify-center">
        <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-end">
          <div className="flex flex-col items-center gap-4 mb-16">
            <h1 className="font-heading text-6xl text-center min-w-max "><b>Profil</b> Pastor Paroki</h1>
            <div className="w-8 h-1.5 bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const ContentSection = () => {
  return (
    <div className="flex w-full min-h-screen justify-center bg-white">
      <div className="w-4/5 max-w-[1300px] py-20">
        <div className="flex gap-8">
          <CardItem img="/assets/romo-yus.webp" nama="RD. Aloysius Yus Noron" posisi="Pastor Kepala" masaJabat="2022 - sekarang"/>
          <CardItem img="/assets/romo-silvester.webp" nama="RD. Silvester Hari Pamungkas" posisi="Pastor Rekan" masaJabat="2023 - sekarang"/>
          <CardItem img="/assets/romo-gunadi.webp" nama="RD. Gunadi Emmanuel" posisi="Pastor Residensi" masaJabat=""/>
        </div>
        <div className="grid grid-cols-4 mt-10 gap-8">
          <RomoChips img="/assets/romo-jacobus.webp" nama="RD. Jacobus Tarigan" masaJabat="2005 - 2009" />
          <RomoChips img="/assets/romo-suherman.webp" nama="RD. Fx Suherman" masaJabat="2006 - 2008" />
          <RomoChips img="/assets/romo-didit.webp" nama="RD. A. Didit Supartono" masaJabat="2009 - 2011" />
          <RomoChips img="/assets/romo-wiryo.webp" nama="RD. L. B. S. Wiryowardoyo" masaJabat="2012 - 2014" />
          <RomoChips img="/assets/romo-susilo.webp" nama="RD. Aloysius Susilo Wijoyo" masaJabat="2009 - 2017" />
          <RomoChips img="/assets/romo-ndito.webp" nama="RD. Ndito Martawi" masaJabat="2012 - 2019" />
          <RomoChips img="/assets/romo-almo.webp" nama="RD. Albertus Monang Rianto Sidabutar" masaJabat="2019 - 2023" />
          <RomoChips img="/assets/romo-michael.webp" nama="RD. Michael Wisnu Agung Pribadi" masaJabat="2017 - 2022" />
        </div>
      </div>
    </div>
  )
}

const ProfilPastorPage = () => {
  return (
    <>
      <Header />
      <ContentSection />
    </>
  )
}

export default ProfilPastorPage