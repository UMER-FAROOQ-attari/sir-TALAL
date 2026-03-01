"use client";

import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

export default function BookCard({ book, index = 0 }) {
  const { addToCart } = useCart();
  const { language, t, dir } = useLanguage();

  return (
    <motion.article
      dir={dir}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.35 }}
      className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
    >
      {/* 🖼️ کتاب کی تصویر کا حصہ */}
      <div className="relative w-full h-56 mb-4 overflow-hidden rounded-xl bg-emerald-50 border border-emerald-100/50">
        <img 
          src={book.image || "https://placehold.co/400x600/e6f4ea/064e3b?text=Book"} 
          alt={book.title[language]} 
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
        />
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-emerald-900 line-clamp-2">{book.title[language]}</h3>
        <p className="mt-2 text-sm text-emerald-700">
          <span className="opacity-70">{t.author}:</span> {book.author}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <p className="text-lg font-black text-emerald-800">PKR {book.price}</p>
        <button
          onClick={() => addToCart(book)}
          className="w-full rounded-lg bg-emerald-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-800 active:scale-95"
        >
          {t.addToCart}
        </button>
      </div>
    </motion.article>
  );
}