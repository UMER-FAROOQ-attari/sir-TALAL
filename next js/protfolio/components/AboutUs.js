"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUs() {
  const { dir, language } = useLanguage();

  // مقامی ترجمہ (تاکہ آپ کو i18n بار بار اپڈیٹ نہ کرنا پڑے)
  const content = {
    title: {
      ur: "بن اکبر کے بارے میں",
      en: "About Bin Akber",
      ar: "نبذة عن بن أكبر",
    },
    desc1: {
      ur: "بن اکبر، درس نظامی کے طلباء و طالبات کے لیے ایک مستند اور قابلِ اعتماد آن لائن کتب خانہ ہے۔ ہمارا مقصد دینی علوم کی ترویج اور طلبہ کے لیے معیاری نصابی کتب کی باآسانی فراہمی کو یقینی بنانا ہے۔",
      en: "Bin Akber is an authentic and reliable online bookstore for Dars-e-Nizami students. Our mission is to promote Islamic education and ensure easy access to high-quality textbooks.",
      ar: "بن أكبر هي مكتبة إلكترونية موثوقة لطلاب درس نظامي. مهمتنا هي تعزيز التعليم الإسلامي وضمان سهولة وصول الطلاب إلى الكتب المدرسية عالية الجودة.",
    },
    desc2: {
      ur: "ہم کنز المدارس بورڈ کے جدید نصاب کے مطابق بنین اور بنات کے تمام درجات (اولیٰ سے دورہ حدیث تک) کی کتابیں فراہم کرتے ہیں۔ آپ گھر بیٹھے واٹس ایپ کے ذریعے اپنا آرڈر بک کروا سکتے ہیں اور ہم اسے آپ کی دہلیز تک باحفاظت پہنچائیں گے۔",
      en: "We provide books for all grades (from Ula to Daura-e-Hadith) for both Banin and Banat according to the latest Kanz-ul-Madaris syllabus. Place your order via WhatsApp from the comfort of your home.",
      ar: "نوفر كتبًا لجميع الدرجات (من الأولى إلى دورة الحديث) للبنين والبنات وفقًا لأحدث منهج لكنز المدارس. يمكنك بسهولة تقديم طلبك عبر واتساب من منزلك.",
    },
    tag: {
      ur: "آپ کا مستند تعلیمی ساتھی",
      en: "Your Authentic Educational Partner",
      ar: "شريكك التعليمي الموثوق",
    }
  };

  return (
    <section dir={dir} className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border-2 border-emerald-100 bg-white shadow-lg"
      >
        <div className="flex flex-col md:flex-row">
          {/* بائیں طرف کا حصہ (ڈیزائن) */}
          <div className="bg-emerald-800 p-8 md:w-1/3 flex flex-col justify-center relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 h-32 w-32 rounded-full bg-emerald-600/50 blur-2xl" />
            
            <h2 className="relative z-10 text-3xl font-black text-white mb-2">
              Bin Akber
            </h2>
            <p className="relative z-10 text-emerald-100 font-medium">
              {content.tag[language]}
            </p>
          </div>

          {/* دائیں طرف کا حصہ (تفصیل) */}
          <div className="p-8 md:w-2/3 md:p-12">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6 border-s-4 border-emerald-500 ps-4">
              {content.title[language]}
            </h3>
            <div className="space-y-4 text-emerald-800/80 leading-relaxed text-lg">
              <p>{content.desc1[language]}</p>
              <p>{content.desc2[language]}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}