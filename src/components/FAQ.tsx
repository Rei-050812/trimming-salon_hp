"use client";

import { useState } from "react";

const faqs = [
  {
    q: "予約なしでも利用できますか？",
    a: "当サロンは完全予約制です。お電話・LINE・お問い合わせフォームからご予約ください。当日空きがある場合はご案内可能な場合もございます。",
  },
  {
    q: "初めての利用ですが、何を持っていけばいいですか？",
    a: "狂犬病予防接種・混合ワクチンの証明書をお持ちください。初回はカウンセリングのお時間をいただきますので、10分ほど早めのご来店をお願いします。",
  },
  {
    q: "高齢の犬でも対応してもらえますか？",
    a: "はい、シニア犬も対応しております。体調やストレスに配慮しながら、無理のない範囲で施術いたします。事前にご相談ください。",
  },
  {
    q: "猫のトリミングはできますか？",
    a: "申し訳ございませんが、現在は犬のみの対応とさせていただいております。",
  },
  {
    q: "キャンセル料はかかりますか？",
    a: "前日までのキャンセルは無料です。当日キャンセルの場合は施術料金の50%を頂戴しております。日程変更はお早めにご連絡ください。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-warm-border overflow-hidden"
        >
          <button
            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-medium text-text-main hover:bg-warm-card transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="flex items-start gap-2">
              <span className="text-primary font-bold shrink-0">Q.</span>
              {faq.q}
            </span>
            <svg
              className={`w-5 h-5 shrink-0 text-text-light transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-text-sub leading-relaxed">
              <div className="flex items-start gap-2 pt-2 border-t border-warm-border">
                <span className="text-accent font-bold shrink-0">A.</span>
                <p>{faq.a}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
