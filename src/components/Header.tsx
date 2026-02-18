"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary texture-dark sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-script text-xl text-white leading-none">
          Paw Salon ぱう
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium tracking-wider">
          <a
            href="#features"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            サロンの特徴
          </a>
          <a
            href="#pricing"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            料金
          </a>
          <a
            href="#trimmer"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            トリマー紹介
          </a>
          <a
            href="#shop"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            店舗情報
          </a>
          <a
            href="#faq"
            className="text-white/80 hover:text-white transition-colors duration-200"
          >
            よくある質問
          </a>
          <Link
            href="/contact"
            className="border border-white/50 text-white px-4 py-1.5 rounded-full text-sm hover:bg-white hover:text-primary transition-all duration-200"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
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
        <nav className="md:hidden bg-primary-dark border-t border-white/10 px-4 py-4 space-y-1 text-sm font-medium">
          {[
            { href: "#features", label: "サロンの特徴" },
            { href: "#pricing", label: "料金" },
            { href: "#trimmer", label: "トリマー紹介" },
            { href: "#shop", label: "店舗情報" },
            { href: "#faq", label: "よくある質問" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block py-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 mt-2">
            <Link
              href="/contact"
              className="inline-block border border-white/50 text-white px-5 py-2 rounded-full hover:bg-white hover:text-primary transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
