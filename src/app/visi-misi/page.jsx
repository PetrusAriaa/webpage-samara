import Image from "next/image"

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[50vh] max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image
            src="/assets/VISI-DAN-MISI_02.png"
            alt="hero"
            className="object-cover" 
            priority
            fill />
        </div>
      </div>
      <div className="bg-blue-950/50 w-full h-[50vh] max-h-[720px] absolute flex justify-center">
        <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-end">
          <div className="flex flex-col items-center gap-4 mb-16">
            <h1 className="font-heading text-6xl text-center min-w-max "><b>Visi</b> dan Misi</h1>
            <div className="w-8 h-1.5 bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Visi = () => {
  return(
    <div className="flex flex-row-reverse">
      <div className="relative w-1/2 aspect-square max-h-[1300px] flex-shrink-0">
        <Image
          src="/assets/VISI-DAN-MISI_05.png"
          alt="hero"
          className="object-cover brightness-75" 
          priority
          fill />
      </div>
      <div className="flex gap-16 flex-col justify-center items-end max-w-[650px] px-6">
        <h2 className="text-6xl font-bold font-heading text-blue-primary text-right">Visi</h2>
        <p className="text-2xl text-right">Meningkatkan kualitas hidup umat beriman dalam keluarga dan masyarakat dengan karya nyata, inovatif, dan dalam terang Roh Kudus sehingga kehadiran Allah dapat lebih dirasakan berdasarkan semangat Gembala Baik dan murah hati.</p>
      </div>
    </div>
  )
}

const Misi = () => {
  return(
    <div className="flex">
      <div className="relative w-1/2 aspect-square max-h-[1300px] flex-shrink-0">
        <Image
          src="/assets/VISI-DAN-MISI_13.png"
          alt="hero"
          className="object-cover brightness-75" 
          priority
          fill />
      </div>
      <div className="bg-white px-6 flex gap-16 flex-col justify-center max-w-[650px] py-20">
        <h2 className="text-6xl font-bold font-heading text-blue-primary">Misi</h2>
        <ol className="pl-6 text-lg list-decimal list-outside flex flex-col gap-4 text-justify">
          <li>Meningkatkan serta memperdalam iman akan Yesus Kristus di dalam komunitas basis, lingkungan, keluarga, dan kaum muda sehingga dapat menjadi Saksi Kristus dimanapun berada</li>
          <li>Membangun komunitas basis yang kooperatif, solider (kepedulian terhadap sesama) dan misioner</li>
          <li>Mendorong umat untuk menjadi saksi dan pewartaan iman sebagai tugas perutusan</li>
          <li>Membangun persaudaraan sejati dalam suka dan duka dengan sesama Umat Beriman dan dengan sesama umat di sekita Gereja</li>
          <li>Meningkatkan kesadaran serta kedewasaan umat untuk berperan aktif dalam hidup menggereja dan bermasyarakat</li>
          <li>Mengembangkan Pelayanan Kasih dengan sikap dan semangat Gembala Baik serta Murah Hati kepada Umat Beriman dan Masyarakat dengan Gerakan Ayo Sekolah, Ayo Kuliah, Ayo Kerja sehingga Kehadiran Gereja St. Matias Rasul dapat lebih dirasakan Umat</li>
          <li>Memberi perhatian lebih kepada yang Lemah dan Tertindas</li>
          <li>Menggalakkan Pendampingan Kaum Muda ( Anak dan Remaja ) sebagai Generasi Penerus</li>
          <li>Mengembangkan dan Memperlancar Komunikasi serta menggalang kesatuan antar Bidang, Seksi, Kategorial serta Teritorial dengan semangat kerjasama</li>
          <li>Memperlengkap Sarana dan Prasarana yang diperlukan</li>
        </ol>
      </div>
    </div>
  )
}

const VisiMisiPage = () => {
  return (
    <>
      <Header />
      <Visi />
      <Misi />
    </>
  )
}

export default VisiMisiPage