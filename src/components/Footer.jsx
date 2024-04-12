const Footer = () => {
  return (
    <>
      <div className="flex justify-center bg-blue-primary py-16">
        <div className="w-[95%] max-w-[1300px] grid grid-cols-3 gap-8">
          <div>
            <div className="text-white mb-6">
              <h1 className="text-xl font-black">Paroki Kosambi Baru</h1>
              <h2 className="text-xl mb-2">Gereja Santo Matias Rasul</h2>
              <p>Taman Kosambi Barat blok A ext 1 no.120 Perumahan Kosambi Baru, Jakarta Barat 11750</p>
            </div>
            <div>
              <div className="text-white">
                <p>Telp. (021) 5411509</p>
              </div>
              <div className="text-white">
                <p>Fax (021) 54393323</p>
              </div>
              <div className="text-white">
                <p>sekretariat@parokikosambibaru.or.id</p>
              </div>
              <div className="text-white">
                <p>0818 0699 9631 (Whatsapp)</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-lg font-semibold text-white">Komsos Paroki</h2>
            </div>
            <div>
              <div className="text-white">
                <p>komsos@parokikosambibaru.or.id</p>
              </div>
            </div>
          </div>
          <div>
            <div className="size-96 bg-slate-200 animate-pulse rounded" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center bg-blue-950 py-2">
        <div className="w-[95%] max-w-[1300px]">
          <p className="text-center text-white/50 text-sm">© Paroki Kosambi Baru - Gereja Santo Matias Rasul - 2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer