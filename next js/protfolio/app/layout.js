import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Bin Akber | Dars-e-Nizami Bookstore",
    template: "%s | Bin Akber",
  },
  description:
    "Bin Akber Karachi: Dars-e-Nizami books for students. بن اکبر کراچی: درس نظامی کتابیں اور کتبِ دینیہ۔ بن أكبر كراتشي: كتب درس نظامي.",
  alternates: {
    languages: {
      "en-US": "/",
      "ur-PK": "/?lang=ur",
      ar: "/?lang=ar",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}