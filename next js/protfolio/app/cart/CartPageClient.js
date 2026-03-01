"use client";

import { useMemo, useState } from "react";
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { saveOrder } from "@/utils/orders";

export default function CartPageClient() {
  const { items, removeFromCart, grandTotal, clearCart } = useCart();
  const { language, t, dir } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const lineItems = useMemo(
    () =>
      items.map(
        (item, idx) => `${idx + 1}. ${item.title[language]} x${item.qty} = PKR ${item.price * item.qty}`,
      ),
    [items, language],
  );

  const finalizeOrder = () => {
    if (!items.length) return;

    const order = {
      id: `BA-${Date.now()}`,
      customer: { name, phone, area },
      items,
      total: grandTotal,
      createdAt: new Date().toISOString(),
    };

    saveOrder(order);

    const message = [
      "Bin Akber Order",
      `Name: ${name || "N/A"}`,
      `Phone: ${phone || "N/A"}`,
      `Area: ${area || "N/A"}`,
      "",
      ...lineItems,
      "",
      `Total: PKR ${grandTotal}`,
    ].join("\n");

    const waUrl = `https://wa.me/923092467623?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    clearCart();
  };

  return (
    <main>
      <Header />
      <section dir={dir} className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold text-emerald-900">{t.cartTitle}</h1>

        {!items.length ? (
          <p className="mt-5 rounded-xl bg-white p-4 text-emerald-800">{t.cartEmpty}</p>
        ) : (
          <div className="mt-5 grid gap-5 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-3">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm"
                >
                  <h2 className="font-semibold text-emerald-900">{item.title[language]}</h2>
                  <p className="text-sm text-emerald-700">PKR {item.price}</p>
                  <p className="text-sm text-emerald-700">Qty: {item.qty}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-sm text-red-600"
                  >
                    {t.remove}
                  </button>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
              <p className="font-semibold text-emerald-900">
                {t.total}: PKR {grandTotal}
              </p>

              <div className="mt-4 space-y-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.fullName}
                  className="w-full rounded-md border border-emerald-200 px-3 py-2"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phone}
                  className="w-full rounded-md border border-emerald-200 px-3 py-2"
                />
                <input
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder={t.area}
                  className="w-full rounded-md border border-emerald-200 px-3 py-2"
                />
              </div>

              <button
                onClick={finalizeOrder}
                className="mt-4 w-full rounded-md bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800"
              >
                {t.finalize}
              </button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
