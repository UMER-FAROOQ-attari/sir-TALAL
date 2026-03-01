"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getAdvisorReply } from "@/utils/advisor";

export default function AIAdvisor() {
  const { language, t, dir } = useLanguage();
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");

  const askAdvisor = () => {
    if (!question.trim()) return;
    setReply(getAdvisorReply(question, language));
  };

  return (
    <section dir={dir} className="mx-auto max-w-6xl px-4 pb-14 sm:px-6">
      <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
        <h3 className="text-xl font-bold text-emerald-900">{t.aiTitle}</h3>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askAdvisor()}
            placeholder={t.aiPlaceholder}
            className="w-full rounded-lg border border-emerald-200 px-4 py-2 outline-none focus:border-emerald-500"
          />
          <button
            onClick={askAdvisor}
            className="rounded-lg bg-emerald-700 px-5 py-2 font-medium text-white hover:bg-emerald-800 transition-colors"
          >
            {t.aiButton}
          </button>
        </div>
        {reply && (
          <div className="mt-4 rounded-lg bg-emerald-50 p-4 text-emerald-900 border-s-4 border-emerald-600 animate-in fade-in slide-in-from-top-1">
            <p className="font-medium text-xs uppercase tracking-widest opacity-60 mb-1">Advisor Reply:</p>
            {reply}
          </div>
        )}
      </div>
    </section>
  );
}