export function getAdvisorReply(question, language = "ur") {
  const q = question.toLowerCase();

  // 1. درجہ اولیٰ کے سوالات
  if (q.includes("ula") || q.includes("oola") || q.includes("اولی") || q.includes("أولى")) {
    if (language === "en") return "For Grade Ula, we highly recommend 'Nahw Meer', 'Sarf Bahaee', and 'Minhaj-ul-Arabia'. Please select 'Grade Ula' from the books section above.";
    if (language === "ar") return "للدرجة الأولى، نوصي بكتب 'نحو مير' و'صرف بهائي'. يرجى اختيار الدرجة الأولى من قسم الكتب.";
    return "درجہ اولیٰ کے لیے 'نحو میر'، 'صرف بہائی' اور 'منہاج العربیہ' جیسی کتابیں بہترین ہیں۔ آپ اوپر کتابوں کے سیکشن سے درجہ اولیٰ منتخب کر سکتے ہیں۔";
  }

  // 2. درجہ ثانیہ کے سوالات
  if (q.includes("saniya") || q.includes("ثانیہ") || q.includes("ثانية") || q.includes("qudoori") || q.includes("قدوری")) {
    if (language === "en") return "For Grade Saniya, 'Mukhtasar Al-Qudoori' is the most important book. You can find it in the Saniya grade section.";
    if (language === "ar") return "للدرجة الثانية، كتاب 'مختصر القدوري' هو الأهم. يمكنك العثور عليه في قسم الدرجة الثانية.";
    return "درجہ ثانیہ کے لیے 'مختصر القدوری' سب سے اہم کتاب ہے۔ آپ اسے ثانیہ کے درجات میں تلاش کر سکتے ہیں۔";
  }

  // 3. درجہ ثالثہ / رابعہ کے سوالات
  if (q.includes("salisa") || q.includes("rabia") || q.includes("ثالثہ") || q.includes("رابعہ")) {
    if (language === "en") return "For Grade Salisa & Rabia, we have 'Hidayah', 'Usul ash-Shashi', and 'Noor-ul-Anwar'.";
    if (language === "ar") return "للدرجة الثالثة والرابعة، لدينا 'الهداية' و'أصول الشاشي' و'نور الأنوار'.";
    return "درجہ ثالثہ اور رابعہ کے لیے ہمارے پاس 'ہدایہ'، 'اصول الشاشی' اور 'نور الانوار' دستیاب ہیں۔";
  }

  // 4. آرڈر اور ڈیلیوری کے سوالات
  if (q.includes("order") || q.includes("delivery") || q.includes("آرڈر") || q.includes("ڈیلیوری") || q.includes("منگوانا")) {
    if (language === "en") return "You can add your required books to the basket and complete your order via WhatsApp. We deliver all over Karachi.";
    if (language === "ar") return "يمكنك إضافة الكتب إلى السلة وإكمال طلبك عبر واتساب. نقوم بالتوصيل في جميع أنحاء كراتشي.";
    return "آپ اپنی پسند کی کتابیں ٹوکری میں ڈالیں اور واٹس ایپ کے ذریعے آرڈر مکمل کریں۔ ہم پورے کراچی میں ڈیلیوری کرتے ہیں۔";
  }

  // 5. کنز المدارس / نصاب کے سوالات
  if (q.includes("kanz") || q.includes("کنز") || q.includes("syllabus") || q.includes("نصاب")) {
    if (language === "en") return "All our books are according to the latest Kanz-ul-Madaris 2026 syllabus.";
    if (language === "ar") return "جميع كتبنا متوافقة مع أحدث منهج لكنز المدارس لعام 2026.";
    return "ہماری تمام کتابیں کنز المدارس بورڈ کے 2026 کے جدید نصاب کے عین مطابق ہیں۔";
  }

  // ڈیفالٹ جواب (اگر کوئی ایسا سوال ہو جو سمجھ نہ آئے)
  if (language === "en") {
    return "I am your Student Advisor! You can ask me about books for any grade (e.g., Ula, Saniya) or how to place an order.";
  }
  if (language === "ar") {
    return "أنا مستشارك الطلابي! يمكنك سؤالي عن كتب أي درجة (مثل الأولى، الثانية) أو كيفية تقديم طلب.";
  }
  
  return "میں آپ کا اسٹوڈنٹ ایڈوائزر ہوں! آپ مجھ سے کسی بھی درجے (جیسے اولیٰ، ثانیہ) کی کتابوں یا آرڈر کرنے کے طریقے کے بارے میں پوچھ سکتے ہیں۔";
}