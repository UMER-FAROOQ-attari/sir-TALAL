import "./globals.css";
import { Agbalumo } from "next/font/google";

const fonts = Agbalumo({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        {children}
      </body>
    </html>
  );
}
