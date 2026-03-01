"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import AboutUs from "@/components/AboutUs"; // <-- نیا About Us امپورٹ کیا ہے

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="bg-emerald-50/30 min-h-screen">
      <Header />
      <HeroSection />
      <ProductGrid />
      <AboutUs /> {/* <-- AIAdvisor کی جگہ اب یہ لگا دیا ہے */}
    </main>
  );
}