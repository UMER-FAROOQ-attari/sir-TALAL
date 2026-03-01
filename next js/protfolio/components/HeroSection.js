"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t, dir } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // جب تک کلائنٹ پر لوڈ نہ ہو، رینڈر نہ کریں تاکہ Hydration Error سے بچا جا سکے
  if (!mounted) return null;

  return (
    <section dir={dir} className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 p-7 text-white sm:p-10 shadow-xl"
      >
        {/* پس منظر میں ہلکا سا ڈیزائن کا اثر */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        
        <p className="relative z-10 mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
          {t.heroBadge}
        </p>
        
        <h1 className="relative z-10 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
          {t.heroTitle}
        </h1>
        
        <p className="relative z-10 mt-4 max-w-xl text-sm text-emerald-50/90 sm:text-lg leading-relaxed">
          {t.heroSubtitle}
        </p>
        
        <button className="relative z-10 mt-8 rounded-full bg-white px-8 py-3 font-bold text-emerald-900 shadow-lg hover:bg-emerald-50 hover:scale-105 active:scale-95 transition-all">
          {t.heroCta}
        </button>
      </motion.div>
    </section>
  );
}