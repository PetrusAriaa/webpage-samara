"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { PengurusDetail } from "@/app/ui/pengurus/pengurus-detail";

export default function SusunanPengurusPage({ params: paramsPromise }) {
  const [pengurus, setpengurus] = useState(null);
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
      const fetchpengurus = async () => {
        const response = await fetch(`/api/pengurus`);
        const pengurus = await response.json();
        const selectedpengurus = pengurus.find((p) => p.id === parseInt(id));

        if (!selectedpengurus) return notFound();

        setpengurus(selectedpengurus || null);
      };
      fetchpengurus();
    }
  }, [id]);

  if (!pengurus) return <div>Not Found</div>;
  

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <PengurusDetail pengurus={pengurus} />
      </div>
    </div>
  );
}
