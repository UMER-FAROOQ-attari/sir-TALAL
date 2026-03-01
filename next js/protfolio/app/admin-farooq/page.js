import AdminPageClient from "./AdminPageClient";

export const metadata = {
  title: "Admin Farooq | Bin Akber | ایڈمن پینل",
  description: 
    "Hidden admin route to monitor bookstore orders. آرڈرز دیکھنے کے لیے پوشیدہ ایڈمن صفحہ۔",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminPageClient />;
}