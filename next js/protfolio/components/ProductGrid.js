"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchBooksFromSheet } from "@/utils/books"; // تبدیل شدہ لائن
import { useLanguage } from "@/context/LanguageContext";
import BookCard from "@/components/BookCard";

export default function ProductGrid() {
  const { t, dir, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [allBooks, setAllBooks] = useState([]); // شیٹ کا ڈیٹا یہاں آئے گا
  const [isLoading, setIsLoading] = useState(true); // لوڈنگ اسٹیٹ

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedDarja, setSelectedDarja] = useState(null);

  useEffect(() => {
    setMounted(true);
    // ویب سائٹ کھلتے ہی گوگل شیٹ سے ڈیٹا منگوائیں
    fetchBooksFromSheet().then((data) => {
      setAllBooks(data);
      setIsLoading(false);
    });
  }, []);

  if (!mounted) return null;

  // UI Labels اور darjat کا پرانا کوڈ وہی رہے گا جو پہلے تھا...
  // (اپنا پرانا uiLabels اور darjat والا حصہ یہاں رہنے دیں)

  const uiLabels = {
    selectGender: { ur: "کتابوں کے لیے شعبہ منتخب کریں", en: "Select Department", ar: "اختر القسم" },
    selectDarja: { ur: "اب اپنا درجہ منتخب کریں", en: "Now Select Your Grade", ar: "اختر درجتك الآن" },
    boys: { ur: "شعبہ بنین (Boys)", en: "Boys (Banin)", ar: "قسم البنين" },
    girls: { ur: "شعبہ بنات (Girls)", en: "Girls (Banat)", ar: "قسم البنات" },
    back: { ur: "← واپس جائیں", en: "← Go Back", ar: "← عودة" },
    noBooks: { ur: "اس درجے میں ابھی کتابیں موجود نہیں ہیں۔", en: "No books available in this grade yet.", ar: "لا توجد كتب في هذه الدرجة بعد." },
    loading: { ur: "کتابیں لوڈ ہو رہی ہیں...", en: "Loading books...", ar: "جاري تحميل الكتب..." }
  };

  const darjat = [
    { id: "matwasita_awal", title: { ur: "متوسطہ اول", en: "Matwasita Awal", ar: "المتوسطة الأولى" } },
    { id: "matwasita_doom", title: { ur: "متوسطہ دوم", en: "Matwasita Doom", ar: "المتوسطة الثانية" } },
    { id: "ula", title: { ur: "درجہ اولیٰ", en: "Grade Ula", ar: "الدرجة الأولى" } },
    { id: "saniya", title: { ur: "درجہ ثانیہ", en: "Grade Saniya", ar: "الدرجة الثانية" } },
    { id: "salisa", title: { ur: "درجہ ثالثہ", en: "Grade Salisa", ar: "الدرجة الثالثة" } },
    { id: "rabia", title: { ur: "درجہ رابعہ", en: "Grade Rabia", ar: "الدرجة الرابعة" } },
    { id: "khamisa", title: { ur: "درجہ خامسہ", en: "Grade Khamisa", ar: "الدرجة الخامسة" } },
    { id: "sadisa", title: { ur: "درجہ سادسہ", en: "Grade Sadisa", ar: "الدرجة السادسة" } },
    { id: "sabia", title: { ur: "درجہ سابعہ", en: "Grade Sabia", ar: "الدرجة السابعة" } },
    { id: "daura", title: { ur: "دورہ حدیث", en: "Daura-e-Hadith", ar: "دورة الحديث" } },
  ];

  const filteredBooks = allBooks.filter(
    (book) => book.gender === selectedGender && book.darja === selectedDarja
  );

  return (
    <section dir={dir} className="mx-auto max-w-6xl px-4 py-12 sm:px-6 min-h-[500px]">
      
      {/* ہیڈنگ سیکشن */}
      <div className="border-s-4 border-emerald-600 ps-4 mb-8">
        <h2 className="text-3xl font-bold text-emerald-900 tracking-tight">
          {selectedDarja 
            ? darjat.find(d => d.id === selectedDarja)?.title[language]
            : t.booksHeading}
        </h2>
        {selectedGender && (
          <button 
            onClick={() => selectedDarja ? setSelectedDarja(null) : setSelectedGender(null)}
            className="mt-3 text-sm font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
          >
            {uiLabels.back[language]}
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="text-center py-20">
           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
           <p className="mt-4 text-emerald-800 font-medium">{uiLabels.loading[language]}</p>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          {/* اسٹیپ 1: بنین یا بنات کا انتخاب */}
          {!selectedGender && (
            <motion.div
              key="gender-selection"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto mt-10"
            >
              <button
                onClick={() => setSelectedGender('banin')}
                className="group flex flex-col items-center justify-center rounded-3xl border-2 border-emerald-100 bg-emerald-50 py-12 px-6 shadow-sm hover:border-emerald-500 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <span className="text-3xl sm:text-4xl font-black text-emerald-900 group-hover:text-white mb-2">👨‍🎓</span>
                <h3 className="text-xl font-bold text-emerald-900 group-hover:text-white">
                  {uiLabels.boys[language]}
                </h3>
              </button>
              <button
                onClick={() => setSelectedGender('banat')}
                className="group flex flex-col items-center justify-center rounded-3xl border-2 border-emerald-100 bg-emerald-50 py-12 px-6 shadow-sm hover:border-emerald-500 hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <span className="text-3xl sm:text-4xl font-black text-emerald-900 group-hover:text-white mb-2">🧕</span>
                <h3 className="text-xl font-bold text-emerald-900 group-hover:text-white">
                  {uiLabels.girls[language]}
                </h3>
              </button>
            </motion.div>
          )}

          {/* اسٹیپ 2: درجے کا انتخاب */}
          {selectedGender && !selectedDarja && (
            <motion.div
              key="darja-selection"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-6"
            >
              {darjat.map((darja, idx) => (
                <motion.button
                  key={darja.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedDarja(darja.id)}
                  className="flex items-center justify-center rounded-2xl border border-emerald-200 bg-white py-6 px-4 shadow-sm hover:shadow-md hover:border-emerald-500 hover:bg-emerald-50 transition-all"
                >
                  <h3 className="text-lg font-bold text-emerald-900">
                    {darja.title[language]}
                  </h3>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* اسٹیپ 3: کتابوں کا گرڈ */}
          {selectedGender && selectedDarja && (
            <motion.div
              key="books-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {filteredBooks.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredBooks.map((book, idx) => (
                    <BookCard key={book.id} book={book} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-emerald-50 rounded-3xl border border-emerald-100">
                  <p className="text-emerald-800 text-lg font-medium">
                    {uiLabels.noBooks[language]}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}