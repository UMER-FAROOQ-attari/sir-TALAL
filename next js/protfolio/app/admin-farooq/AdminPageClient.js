"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useLanguage } from "@/context/LanguageContext";
import { getOrders } from "@/utils/orders";

export default function AdminPageClient() {
  const { t, dir, language } = useLanguage();
  const [orders, setOrders] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setOrders(getOrders());
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main>
      <Header />
      <section dir={dir} className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold text-emerald-900 border-b-2 border-emerald-100 pb-4">
          {t.adminTitle}
        </h1>

        {!orders.length ? (
          <p className="mt-8 rounded-xl bg-white p-8 text-center text-emerald-800 shadow-sm border border-emerald-50">
            {t.noOrders}
          </p>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-emerald-100 bg-white shadow-lg">
            <table className="min-w-full text-sm">
              <thead className="bg-emerald-50 text-emerald-800">
                <tr>
                  <th className="px-6 py-4 text-start font-bold uppercase tracking-wider">{t.orderId}</th>
                  <th className="px-6 py-4 text-start font-bold uppercase tracking-wider">{t.customer}</th>
                  <th className="px-6 py-4 text-start font-bold uppercase tracking-wider">{t.items}</th>
                  <th className="px-6 py-4 text-start font-bold uppercase tracking-wider">{t.total}</th>
                  <th className="px-6 py-4 text-start font-bold uppercase tracking-wider">{t.date}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-emerald-50/30 transition-colors align-top">
                    <td className="px-6 py-4 font-mono text-xs text-emerald-600">#{order.id}</td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">{order.customer.name || "N/A"}</p>
                      <p className="text-gray-500 text-xs">{order.customer.phone || "N/A"}</p>
                      <p className="text-gray-400 text-xs italic">{order.customer.area || "N/A"}</p>
                    </td>
                    <td className="px-6 py-4">
                      {order.items.map((item) => (
                        <div key={`${order.id}-${item.id}`} className="mb-1 last:mb-0">
                          <span className="font-medium text-emerald-800">
                            {item.title[language]}
                          </span>
                          <span className="text-gray-400 mx-1">×</span>
                          <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            {item.qty}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td className="px-6 py-4 font-black text-emerald-700">
                      PKR {order.total.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-xs">
                      {new Date(order.createdAt).toLocaleDateString(language === 'en' ? 'en-GB' : language)}
                      <br />
                      <span className="text-[10px] opacity-60">
                        {new Date(order.createdAt).toLocaleTimeString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}