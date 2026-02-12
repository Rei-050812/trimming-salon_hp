import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Paw Salon ぱう",
  description:
    "トリミングサロン「Paw Salon ぱう」のプライバシーポリシーです。",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
