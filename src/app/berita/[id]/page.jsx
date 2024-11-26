"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { BeritaDetail } from "@/app/ui/berita/berita-detail";

export default function BeritaPage({ params: paramsPromise }) {
  const [berita, setBerita] = useState(null);
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
      const fetchBerita = async () => {
        const response = await fetch(`/api/berita`);
        const berita = await response.json();
        const selectedBerita = berita.find((p) => p.id === parseInt(id));

        if (!selectedBerita) return notFound();

        setBerita(selectedBerita || null);
      };
      fetchBerita();
    }
  }, [id]);

  if (!berita) return <div>Not Found</div>;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <BeritaDetail berita={berita} />
      </div>
    </div>
  );
}
