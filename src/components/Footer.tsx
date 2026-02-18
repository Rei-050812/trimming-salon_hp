import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark texture-dark text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <p className="font-script text-2xl text-white mb-1">
              Paw Salon ぱう
            </p>
            <p className="text-xs font-serif tracking-[0.2em] text-white/40 mt-1 uppercase">
              Natural Trimming Salon
            </p>
            <p className="text-sm text-white/50 mt-3">
              大切な家族に、やさしいトリミングを
            </p>
          </div>
          <nav className="flex flex-col gap-2.5 text-sm">
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              トップページ
            </Link>
            <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
              お問い合わせ
            </Link>
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
        <div className="pt-6 border-t border-white/10 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Paw Salon ぱう All rights reserved.
        </div>
      </div>
    </footer>
  );
}
