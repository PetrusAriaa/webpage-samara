import localFont from "next/font/local"
import { Plus_Jakarta_Sans } from "next/font/google"

import Providers from "./Providers";
import "./globals.css";
import dynamic from "next/dynamic";
import InfoModal from "@/components/InfoModal";

export const trajan = localFont({
  src: [
    {
      path: './font/TrajanPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/TrajanPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-trajan"
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta"
})

export const metadata = {
  title: "St. Matias Rasul - Paroki Kosambi Baru",
  description: "Situs Web Resmi Gereja Santo Matias Rasul Kosambi Baru",
};

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
})

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${trajan.variable} ${plusJakartaSans.className} text-dark-primary antialiased`}
      >
        <Providers>
          <div className="flex flex-col w-full justify-between min-h-screen">
            <div>
              <Navbar />
              {children}
            </div>
            <div className="w-full place-items-end">
              <Footer />
            </div>
          </div>
          <InfoModal />
        </Providers>
      </body>
    </html>
  );
}
