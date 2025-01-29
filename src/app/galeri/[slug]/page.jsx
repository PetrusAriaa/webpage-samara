"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GaleriDetail } from "@/app/ui/galeri/galeri-detail";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function GaleriPage({ params }) {
  const { slug } = use(params); // Menggunakan React.use() untuk mendapatkan params
  const [galeri, setGaleri] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchGaleri = async () => {
      try {
        const response = await fetch(`/api/galeri`);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const galeriItem = data.find((item) => slugify(item.title) === slug);

        if (!galeriItem) {
          router.push("/404");
          return;
        }

        setGaleri(galeriItem);
      } catch (error) {
        console.error("Error fetching galeri:", error);
        router.push("/404");
      }
    };

    fetchGaleri();
  }, [slug]);

  if (!galeri) return <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <GaleriDetail galeri={galeri} />
      </div>
    </div>
  );
}
