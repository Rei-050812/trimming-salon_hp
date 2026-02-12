import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    // OGP画像を追加する場合は以下のコメントを外してください
    // images: [{ url: "/ogp.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paw Salon ぱう | 大切な家族にやさしいトリミング",
    description:
      "完全予約制のトリミングサロン。一頭一頭に寄り添った丁寧な施術で、大切な家族をやさしくケアします。",
    // OGP画像を追加する場合は以下のコメントを外してください
    // images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
