import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text-main text-warm-border py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="text-lg font-bold text-white mb-2">
              🐾 Paw Salon ぱう
            </p>
            <p className="text-sm text-text-light">
              大切な家族に、やさしいトリミングを
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              トップページ
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              お問い合わせ
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-text-sub text-center text-xs text-text-light">
          &copy; {new Date().getFullYear()} Paw Salon ぱう All rights reserved.
        </div>
      </div>
    </footer>
  );
}
