const ORDER_KEY = "bin_akber_orders";

export function getOrders() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(ORDER_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order) {
  if (typeof window === "undefined") {
    return;
  }

  const orders = getOrders();
  const nextOrders = [order, ...orders];
  window.localStorage.setItem(ORDER_KEY, JSON.stringify(nextOrders));
}
