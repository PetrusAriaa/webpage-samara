"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { GaleriDetail } from "@/app/ui/galeri/galeri-detail";

export default function GaleriPage({ params: paramsPromise }) {
  const [galeri, setGaleri] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const params = await paramsPromise;
      setId(params.id);
    };
    unwrapParams();
  }, [paramsPromise]);

  useEffect(() => {
    if (id) {
      const fetchGaleri = async () => {
        const response = await fetch(`/api/galeri`);
        const galeri = await response.json();
        const selectedGaleri = galeri.find((p) => p.id === parseInt(id));

        if (!selectedGaleri) return notFound();

        setGaleri(selectedGaleri || null);
      };
      fetchGaleri();
    }
  }, [id]);

  if (!galeri) return <div>Not Found</div>;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <GaleriDetail galeri={galeri} />
      </div>
    </div>
  );
}
