import type { Metadata } from "next";
import {
  Noto_Sans_JP,
  Dancing_Script,
  Cormorant_Garamond,
  Shippori_Mincho,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Paw Salon ぱう | 大切な家族にやさしいトリミング",
    template: "%s | Paw Salon ぱう",
  },
  description:
    "完全予約制のトリミングサロン「Paw Salon ぱう」。一頭一頭に寄り添った丁寧な施術で、大切な家族をやさしくケアします。",
  openGraph: {
    title: "Paw Salon ぱう | 大切な家族にやさしいトリミング",
    description:
      "完全予約制のトリミングサロン「Paw Salon ぱう」。一頭一頭に寄り添った丁寧な施術で、大切な家族をやさしくケアします。",
    siteName: "Paw Salon ぱう",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paw Salon ぱう | 大切な家族にやさしいトリミング",
    description:
      "完全予約制のトリミングサロン。一頭一頭に寄り添った丁寧な施術で、大切な家族をやさしくケアします。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${dancingScript.variable} ${cormorant.variable} ${shipporiMincho.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
