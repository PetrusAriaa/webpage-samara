"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentSection from "./ContentSection";

import { HiHome } from "react-icons/hi";
import { FaCompass } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const Sponsors = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePopup = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closePopupOnOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsOpen(false);
      setSelectedImage(null);
    }
  };



  const iklan_D=[
    "/assets/iklan/Iklan_D/1.png",
    "/assets/iklan/Iklan_D/3.png",
    "/assets/iklan/Iklan_D/2.png",
    "/assets/iklan/Iklan_D/4.png",
    "/assets/iklan/Iklan_D/5.png",
  ]

  const iklan_E=[
    "/assets/iklan/Iklan_E/1.png",
    "/assets/iklan/Iklan_E/2.png",
    "/assets/iklan/Iklan_E/3.png",
    "/assets/iklan/Iklan_E/4.png",
    "/assets/iklan/Iklan_E/5.png",
    "/assets/iklan/Iklan_E/6.png",
    "/assets/iklan/Iklan_E/7.png",
    "/assets/iklan/Iklan_E/8.png",
    "/assets/iklan/Iklan_E/9.png",
    "/assets/iklan/Iklan_E/10.png",
    "/assets/iklan/Iklan_E/11.png",
    "/assets/iklan/Iklan_E/12.png",
    "/assets/iklan/Iklan_E/13.png",
    "/assets/iklan/Iklan_E/14.png",
  ]

  const iklan_F=[
    "/assets/iklan/Iklan_F/1.png",
    "/assets/iklan/Iklan_F/2.png",
    "/assets/iklan/Iklan_F/3.png",
    "/assets/iklan/Iklan_F/4.png",
    "/assets/iklan/Iklan_F/5.png",
    "/assets/iklan/Iklan_F/6.png",
    "/assets/iklan/Iklan_F/7.png",
    "/assets/iklan/Iklan_F/8.png",
    "/assets/iklan/Iklan_F/9.png",
    "/assets/iklan/Iklan_F/10.png",
    "/assets/iklan/Iklan_F/11.png",
    "/assets/iklan/Iklan_F/12.png",
    "/assets/iklan/Iklan_F/13.png",
    "/assets/iklan/Iklan_F/14.png",
  ]


  return (
    <div>
      <h2 className="text-center font-heading text-blue-primary mb-2">Terima kasih kepada:</h2>

      {/* Iklan D */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        {iklan_D.map((image, index) => (
          <div key={index} className="relative bg-blue-600/20 w-full aspect-[4/3] rounded-lg flex justify-center items-center cursor-pointer" onClick={() => handlePopup(image)}>
            <Image className="object-cover" fill priority alt="Iklan" src={image} />
          </div>
        ))}
      </div>

      {/* Iklan E */}
      <div className="grid grid-cols-4 gap-3 mb-3">
        {iklan_E.map((image, index) => (
          <div key={index} className="relative bg-blue-600/20 w-full aspect-[4/3] rounded-lg flex justify-center items-center cursor-pointer" onClick={() => handlePopup(image)}>
            <Image className="object-cover" fill priority alt="Iklan" src={image} />
          </div>
        ))}
      </div>


      {/* Iklan F */}
      <div className="grid grid-cols-5 gap-3">
        {iklan_E.map((image, index) => (
          <div key={index} className="relative bg-blue-600/20 w-full aspect-[4/3] rounded-lg flex justify-center items-center cursor-pointer" onClick={() => handlePopup(image)}>
            <Image className="object-cover" fill priority alt="Iklan" src={image} />
          </div>
        ))}
      </div>

      {isOpen && selectedImage && (
        <div id="popup-overlay" className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6 lg:px-0" onClick={closePopupOnOutsideClick}>
          <div className="relative">
            <Image className="max-w-full max-h-[90vh] rounded-md" alt="Popup Iklan" src={selectedImage} width={410} height={0} onClick={(e) => e.stopPropagation()} />
            <button className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700" onClick={() => setIsOpen(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  )
}

const ZaitunPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePopup = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closePopupOnOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsOpen(false);
      setSelectedImage(null);
    }
  };

  const iklan_A = [
    "https://storage.googleapis.com/zaitun-dev/ads/1.png",
    "https://storage.googleapis.com/zaitun-dev/ads/2.png",
    "https://storage.googleapis.com/zaitun-dev/ads/3.png",
  ];

  const iklan_B = [
    "https://storage.googleapis.com/zaitun-dev/ads/4.png",
    "https://storage.googleapis.com/zaitun-dev/ads/5.png",
    "https://storage.googleapis.com/zaitun-dev/ads/6.png",
  ];

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="h-screen w-[55%] fixed flex">
          <div className="w-[16%] min-w-[180px] h-full bg-zinc-800 p-2">
            <p className="text-center italic text-white/50">Advertisements</p>

            {/* Iklan A */}
            {iklan_A.map((img, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/5] bg-zinc-700 rounded flex overflow-hidden mb-2 cursor-pointer"
                onClick={() => handlePopup(img)}
              >
                <Image className="object-cover" fill priority alt="" src={img} />
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col">
            <div className="relative w-full h-full">
              <Image className="object-cover" fill priority alt="" src="/assets/zaitun-preview.webp" />
            </div>
          </div>

          {/* Iklan B */}
          <div className="px-2 py-6 h-full border-r border-xmas-tertiary/20 bg-xmas-neutral flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Link href="/zaitun">
                <div title="Beranda" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <HiHome className="text-2xl text-xmas-tertiary" />
                </div>
              </Link>
              <Link href="#">
                <div title="Zaitun" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <FaCompass className="text-2xl text-xmas-tertiary" />
                </div>
              </Link>
            </div>
            <Link href="/">
              <div title="Keluar" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                <FiLogOut className="text-2xl text-xmas-tertiary" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-end w-full bg-xmas-neutral">
          <div className="w-[45%] py-10 px-4 flex-shrink-0">
            <div className="w-full max-w-prose">
              <h1 className="text-8xl font-ibara font-bold leading-tight text-xmas-primary">
                Zaitun Edisi Natal 2024
              </h1>
              <div className="my-8">
                <ContentSection />
              </div>
              <div className="flex gap-4 w-full justify-center items-center mb-10">
                {iklan_B.map((img, index) => (
                  <div
                    key={index}
                    className="relative w-56 aspect-[4/5] bg-slate-200 rounded-lg flex justify-center items-center cursor-pointer"
                    onClick={() => handlePopup(img)}
                  >
                    <Image className="object-cover" fill priority alt="" src={img} />
                  </div>
                ))}
              </div>
              <Sponsors />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="popup-overlay" className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6 lg:px-0" onClick={closePopupOnOutsideClick}>
        <div className="relative">
          <Image className="max-w-full max-h-[90vh] rounded-md" alt="Popup Iklan" src={selectedImage} width={410} height={0} onClick={(e) => e.stopPropagation()} />
          <button className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700" onClick={() => setIsOpen(false)}>X</button>
        </div>
      </div>
      )}
    </div>
  );
};
export default ZaitunPage