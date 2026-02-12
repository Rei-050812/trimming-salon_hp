import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Paw Salon ぱう",
  description:
    "トリミングサロン「Paw Salon ぱう」へのお問い合わせ・ご予約はこちらから。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
