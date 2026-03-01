"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { language, setLanguage, t, dir, languageLabel } = useLanguage();
  const { itemCount } = useCart();
  const [mounted, setMounted] = useState(false);

  // Hydration Error کو روکنے کے لیے فائنل حل
  useEffect(() => {
    setMounted(true);
  }, []);

  // جب تک کلائنٹ پر لوڈ نہ ہو، ہم صرف ایک سادہ ڈھانچہ دکھائیں گے
  if (!mounted) {
    return (
      <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/90 backdrop-blur h-[65px]">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="text-xl font-bold text-emerald-800">Bin Akber</div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/90 backdrop-blur">
      <div 
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6" 
        dir={dir}
      >
        <Link href="/" className="text-xl font-bold tracking-tight text-emerald-800">
          {t.brand}
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5">
          <Link href="/" className="font-medium text-emerald-700 hover:text-emerald-900">
            {t.navHome}
          </Link>

          <Link 
            href="/cart" 
            className="relative flex items-center gap-2 font-medium text-emerald-700 hover:text-emerald-900"
          >
            <ShoppingBasket className="h-5 w-5" />
            <span>{t.navCart}</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 rounded-full bg-emerald-800 px-1.5 text-[10px] font-bold text-white min-w-[18px] h-[18px] flex items-center justify-center border-2 border-white">
                {itemCount}
              </span>
            )}
          </Link>

          <select
            aria-label="Language Switcher"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-900 outline-none focus:border-emerald-500"
          >
            {Object.keys(languageLabel).map((key) => (
              <option value={key} key={key}>
                {languageLabel[key]}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
}