const JadwalMisaSection = () => {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-[95%] max-w-[1300px]">
        <div className="flex items-center gap-10 mb-16">
          <div className="w-full h-[2px] bg-neutral-300" />
          <h1 className="font-serif text-2xl text-center min-w-max text-neutral-500">Jadwal Misa</h1>
          <div className="w-full h-[2px] bg-neutral-300" />
        </div>
        <div className="flex justify-around">
          <div className="text-center">
            <div className="mb-8">
              <h2 className="font-serif font-bold text-xl mb-4 text-blue-primary">Misa Harian</h2>
              <div>
                <p className="font-semibold text-blue-secondary">Selasa, Kamis, dan Sabtu</p>
                <p>Pukul 06.00 (pagi)</p>
              </div>
              <div>
                <p className="font-semibold text-blue-secondary">Senin, Rabu, dan Jumat</p>
                <p>Pukul 19.00</p>
              </div>
            </div>
            <h2 className="font-serif font-bold text-xl mb-4 text-blue-primary">Misa Jumat Pertama & Adorasi SMK</h2>
            <div>
              <p className="font-semibold text-blue-secondary">Jumat minggu pertama</p>
              <p>Pukul 19.00</p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-serif font-bold text-xl mb-4 text-blue-primary">Misa Mingguan</h2>
            <div className="mb-4">
              <p className="font-semibold text-blue-secondary">Sabtu Sore</p>
              <p>Pukul 17.00</p>
            </div>
            <div>
              <p className="font-semibold text-blue-secondary">Minggu Pagi</p>
              <p>Pukul 06.00</p>
            </div>
            <div>
              <p className="font-semibold text-blue-secondary">Minggu Siang</p>
              <p>Pukul 08.30</p>
            </div>
            <div>
              <p className="font-semibold text-blue-secondary">Minggu Sore</p>
              <p>Pukul 17.00</p>
            </div>
            <div className="bg-red-500 text-white px-6 py-2 mt-8">
              <p>Perayaan Ekaristi tidak memerlukan pendaftaran</p>
              <p>Misa daring sudah ditiadakan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JadwalMisaSection