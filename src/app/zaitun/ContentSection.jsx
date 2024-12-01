import Link from "next/link"
import TopCarousell from "./TopCarousell"
import { Button } from "@nextui-org/button"
import Image from "next/image"

const LAPORAN_UTAMA = [
  {
    title: "Telur Paskah Bagi Anak-Anak Apa Artinya? (Lomba Paskah)",
    slug: "telur-paskah-bagi-anak-apa-artinya-lomba-paskah",
    paragraph: "Tulisan ini tidak membahas aspek filosofis atau pemaknaan soal telur Paskah, tidak juga untuk menjelaskan apa hubungan antara Paskah dengan telur. Tetapi telur bisa menjadi sebuah bentuk perayaan kegembiraan anak-anak pada perayaan Paskah dalam lomba.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/06/WhatsApp-Image-2024-03-24-at-18.51.47-960x1000.jpeg',
    writer: 'Prabowo',
    publishedDate: '16 June 2024',
  },
  {
    title: "Mencium Salib pada Jumat Agung: Penyembahan atau Penghormatan?",
    slug: "mencium-salib-pada-jumat-agung-penyembahan-atau-penghormatan",
    paragraph: "Ibadat Jumat Agung yang dilaksanakan Gereja Katolik setidaknya terdiri dari tiga bagian: Liturgi Sabda, Ritus Penghormatan Salib, dan Komuni. Dalam bagian kedua, umat diajak untuk menghormati salib Kristus melalui tradisi berlutut dan/atau mencium salib. Namun, adanya Covid-19 beberapa tahun terakhir membuat tradisi tersebut diganti dengan hanya menundukkan kepala atau cara lain yang disepakati masing-masing paroki.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/03/57418971_2138830139540052_8151682824970174464_n-960x1000.jpg',
    writer: 'Eolia Pratama',
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
]

const SURAT_GEMBALA = [
  {
    title: "Apa yang Kita Buat Dalam Kegembiraan Suasana Paskah?",
    slug: "apa-yang-kita-buat-dalam-kegembiraan-suasana-paskah",
    paragraph: "Haleluya… Tuhan telah bangkit. Itulah kegembiraan para murid ketika melihat Sang Guru mereka, Yesus, tampak ada bersama mereka. Ada rasa gembira, bahagia, dan haru yang tak terhingga. Kesedihan, ketakutan, dan ketidakpastian selama penderitaan yang mereka alami, sekarang berubah menjadi semangat dan sukacita.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/03/PHOTO-2024-03-24-12-59-15-814x1000.jpg',
    writer: 'Romo Aloysius Yus Noron, Pr.',
    publishedDate: '28 March 2024',
  },
]

const LIPUTAN_UMUM = [
  {
    title: "Ketika Prapaskah dan Ramadhan Berbarengan",
    slug: "ketika-prapaskah-dan-ramadhan-berbarengan",
    paragraph: "Gereja Katolik di tengah masyarakat muslim yang toleran adalah sebuah anugerah. Tahun ini Gereja Katolik St. Matias Rasul Kosambi Baru sudah 18 tahun berada di kompleks perumahan Kosambi Baru dan sejauh ini semua kegiatan gereja berjalan dengan baik dan kondusif. Sebagai bagian dari masyarakat, Gereja St. Matias Rasul juga mengembangkan peran dan jalinan silaturahmi dengan umat muslim.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/06/EDJ0098-copy-960x1000.jpg',
    writer: 'Prabowo',
    publishedDate: '16 June 2024',
  },
]

const INSPIRATIF = [
  {
    title: "St. Matias Rasul, Pelindung Paroki Kosambi Baru",
    slug: "st-matias-rasul-pelindung-paroki-kosambi-baru",
    paragraph: "Nama Matias berasal dari bahasa Yunani Mattatias (Ματταθίας). Nama ini kemudian disingkat menjadi Mattias (Μαθθίας). Nama Matias sendiri berarti “Pemberian Allah”. Matias lahir pada awal abad pertama Masehi di Yudea. Meskipun namanya tidak disebutkan dalam keempat Injil utama dan tidak dipilih langsung oleh Yesus menjadi rasul, ia merupakan murid yang setia mengikuti Yesus dari awal Yesus dibaptis, hingga akhirnya menjadi pengganti Yudas Iskariot melalui undian. Sebagai ikon Gereja, Matias dilukiskan membawa salib dan kapak halberd (kapak dengan ujung tombak) yang bertuliskan “Super Mathiam, dari Kis 1:26: “et dederunt sortes eis, et cecidit sors super Mathiam…” yang artinya “Lalu mereka membuang undi bagi kedua orang itu dan yang kena undi adalah Matias…”",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/05/Untitled-design.png',
    writer: 'Sonny Sutanto',
    publishedDate: '14 May 2024',
  },
  {
    title: "Makna Natal dari Para Pastor Paroki",
    slug: "makna-natal-dari-para-pastor-paroki",
    paragraph: "Ketika dekorasi warna merah, hijau, dan putih bertebaran di banyak tempat publik serta mulai banyak diputarkan lagu Natal, kita pelan-pelan telah mengalami momen sukacita Natal. Aksentuasi Natal dipercantik dengan aneka dekorasi pohon pinus, kotak kado, bahkan sampai patung Santa Claus. Semua ini memancarkan kesan Natal sebagai momen sukacita bagi siapa pun. Momen Natal pun juga memiliki kesan khas bagi kedua pastor paroki kita, Romo Yus dan Romo Sil.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/02/Screenshot-2024-02-05-at-6.15.47%E2%80%AFPM.webp',
    writer: 'Bima Laiyanan',
    publishedDate: '5 February 2024',
  },
]

const SERBA_SERBI = [
  {
    title: "Protes Parkir Kendaraan Umat di Setiap Perayaan",
    slug: "protes-parkir-kendaraan-umat-di-setiap-perayaan",
    paragraph: "“Mobil siapa sih yang parkir di depan ini?” tanya seorang kasir mini market. “Iya nih, parkir orang gereja. Brengsek emang.” Jawab salah satu karyawan laki-laki dari teras minimarket. Waktu itu hari Kamis menjelang misa pertama Kamis Putih. Percakapan ini terdengar jelas saat penulis sedang mampir mini market untuk belanja. Ternyata ada yang merasa terganggu dengan kendaraan umat yang diparkir sembarangan di depan sebuah mini market. Mungkin keluhan ini mewakili sebagian dari warga yang tinggal di seputar gereja, yang kadang terganggu oleh keberadaan mobil umat yang posisi parkirnya menghalangi akses penghuni.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-01-at-15.37.42-960x899.jpeg',
    writer: 'Prabowo',
    publishedDate: '9 April 2024',
  },
  {
    title: "ORANG MUDA KATOLIK",
    slug: "orang-muda-katolik",
    paragraph: "Tulisan ini ditujukan untuk seluruh pembaca Orang Muda Katolik. Setelah sekian lama kita berjalan, bertumbuh, dan berproses bersama… Halo, OMK X OMK X adalah sebutan untuk Orang Muda Katolik (OMK) Wilayah 10, salah satu OMK wilayah yang berada di Paroki Kosambi Baru. OMK X terdiri dari 4 lingkungan yaitu Lingkungan Santo Petrus, Lingkungan Santo Bonifasius, Lingkungan Santo Yakobus, dan Lingkungan Santo Yohanes Paulus II.",
    imgSrc: 'https://zaitun.id/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-01-at-14.51.17-960x1000.jpeg',
    writer: 'Redaksi Zaitun',
    publishedDate: '9 April 2024',
  },
]

const CategorySection = ({ sectionGroup, categoryTitle }) => {
  return (
    <div className="mt-20">
      <h3 className="font-ibara font-medium text-2xl my-4 text-xmas-secondary">{categoryTitle}</h3>
      <div className="flex flex-col gap-4">
        {
          sectionGroup.map((item, i) => {
            return (
              <div key={i} className="flex items-center gap-4">
                <Link href={`/zaitun/${item.slug}`}>
                <div className="aspect-[4/5] w-56 overflow-hidden">
                  <div className="relative aspect-[4/5] w-56 bg-slate-300 hover:scale-110 ease-in-out duration-500">
                    <Image
                      src={item.imgSrc}
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
                      <p className="text-xs text-xmas-secondary uppercase">{item.writer}</p>
                      <p className="text-xs text-xmas-tertiary">{item.publishedDate}</p>
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

const ContentSection = () => {
  return (
    <>
      <h1 className="text-[2rem] font-ibara font-medium text-xmas-secondary">Artikel Teratas</h1>
      <div className="mt-4 mb-20">
        <TopCarousell />
      </div>
      <CategorySection sectionGroup={LAPORAN_UTAMA} categoryTitle="Laporan Utama"/>
      <CategorySection sectionGroup={SURAT_GEMBALA} categoryTitle="Surat Gembala"/>
      <CategorySection sectionGroup={LIPUTAN_UMUM} categoryTitle="Liputan Umum"/>
      <CategorySection sectionGroup={INSPIRATIF} categoryTitle="Inspiratif"/>
      <CategorySection sectionGroup={SERBA_SERBI} categoryTitle="Serba Serbi"/>
    </>
  )
}

export default ContentSection