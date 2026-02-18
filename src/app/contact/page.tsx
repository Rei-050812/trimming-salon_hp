"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl border border-warm-border p-10 shadow-sm">
          <p className="text-5xl mb-6">✉️</p>
          <h1 className="text-2xl font-bold mb-4">
            お問い合わせありがとうございます
          </h1>
          <p className="text-text-sub text-sm leading-relaxed mb-8">
            内容を確認のうえ、2営業日以内にご連絡いたします。
            <br />
            しばらくお待ちください。
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-light transition-colors"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="block w-10 h-px bg-warm-border" />
          <p className="font-serif tracking-[0.3em] text-xs text-text-light uppercase">
            Contact
          </p>
          <span className="block w-10 h-px bg-warm-border" />
        </div>
        <h1 className="font-mincho text-2xl md:text-3xl font-medium mb-3">お問い合わせ</h1>
        <p className="text-text-sub text-sm leading-relaxed">
          ご予約やご質問など、お気軽にお問い合わせください。
          <br />
          2営業日以内にご返信いたします。
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-warm-border p-6 md:p-10 shadow-sm space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
          >
            お名前 <span className="text-red-500 text-xs">*必須</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="山田 太郎"
            className="w-full border border-warm-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-warm-bg"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
          >
            メールアドレス <span className="text-red-500 text-xs">*必須</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@email.com"
            className="w-full border border-warm-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-warm-bg"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium mb-2"
          >
            お問い合わせ種別
          </label>
          <select
            id="category"
            name="category"
            className="w-full border border-warm-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-warm-bg"
          >
            <option value="reservation">ご予約について</option>
            <option value="question">サービスについてのご質問</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
          >
            お問い合わせ内容{" "}
            <span className="text-red-500 text-xs">*必須</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="ご予約希望日やご質問内容をご記入ください"
            className="w-full border border-warm-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-warm-bg resize-y"
          />
        </div>

        <div className="text-center pt-2">
          <button
            type="submit"
            className="bg-primary text-white px-10 py-3 rounded-full font-medium hover:bg-primary-light transition-colors shadow-md"
          >
            送信する
          </button>
        </div>

        <p className="text-xs text-text-light text-center">
          <Link href="/privacy" className="underline hover:text-primary">
            プライバシーポリシー
          </Link>
          に同意のうえ、送信してください。
        </p>
      </form>
    </div>
  );
}
