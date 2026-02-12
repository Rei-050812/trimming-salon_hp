"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          🐾 Paw Salon ぱう
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-text-sub">
          <Link href="/#features" className="hover:text-primary transition-colors">
            サロンの特徴
          </Link>
          <Link href="/#pricing" className="hover:text-primary transition-colors">
            料金
          </Link>
          <Link href="/#trimmer" className="hover:text-primary transition-colors">
            トリマー紹介
          </Link>
          <Link href="/#shop" className="hover:text-primary transition-colors">
            店舗情報
          </Link>
          <Link href="/#faq" className="hover:text-primary transition-colors">
            よくある質問
          </Link>
          <Link
            href="/contact"
            className="bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-light transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-text-main"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-warm-border px-4 py-4 space-y-3 text-sm font-medium text-text-sub">
          <Link
            href="/#features"
            className="block py-1 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            サロンの特徴
          </Link>
          <Link
            href="/#pricing"
            className="block py-1 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            料金
          </Link>
          <Link
            href="/#trimmer"
            className="block py-1 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            トリマー紹介
          </Link>
          <Link
            href="/#shop"
            className="block py-1 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            店舗情報
          </Link>
          <Link
            href="/#faq"
            className="block py-1 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            よくある質問
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-light transition-colors"
            onClick={() => setIsOpen(false)}
          >
            お問い合わせ
          </Link>
        </nav>
      )}
    </header>
  );
}
