import Papa from "papaparse";

export const fetchBooksFromSheet = async () => {
  // نیا لنک یہاں ڈالیں، اگر یہ کام نہ کرے تو شیٹ سے نیا نکال کر یہاں پیسٹ کریں
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vShd2_jTx2tkmzLBc3OQE1hk_3fHMQwfqzQZJUdMLjCwDUhH4CNX_A71AdDUPt_qDDLqllEvW-igwZC/pub?output=csv";

  try {
    const response = await fetch(csvUrl);
    
    // اگر رسپانس 404 ہے تو یہاں پکڑا جائے گا
    if (!response.ok) {
      throw new Error(`Google Sheet link returned status: ${response.status}`);
    }

    const csvText = await response.text();

    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          // کالمز کے نام وہی رکھیں جو آپ کی شیٹ میں ہیں
          const books = result.data.map((row) => ({
            id: row.id?.trim() || Math.random().toString(),
            title: { 
              ur: row.title_ur?.trim() || "نامعلوم", 
              en: row.title_en?.trim() || "Unknown", 
              ar: row.title_ar?.trim() || "غير معروف" 
            },
            author: row.author?.trim() || "نامعلوم",
            category: row.category?.trim() || "General",
            price: Number(row.price) || 0,
            gender: row.gender?.trim().toLowerCase() || "both", 
            darja: row.darja?.trim().toLowerCase() || "عام",
            image: row.image_url?.trim() || null
          }));

          console.log("✅ ڈیٹا کامیابی سے مل گیا:", books); 
          resolve(books);
        },
        error: (error) => {
          console.error("PapaParse Error:", error);
          resolve([]); 
        }
      });
    });
  } catch (error) {
    console.error("❌ ڈیٹا لانے میں مسئلہ:", error.message);
    return [];
  }
};