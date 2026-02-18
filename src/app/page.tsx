import type { ReactNode } from "react";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/FadeIn";

const FeatureIcon = ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src={src} alt={alt} className="w-full h-full object-contain" />
);

const IconPhone = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconMail = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);

const IconLineChat = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const features: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <FeatureIcon src="/trimming-salon_hp/icons/icon-paw.png" alt="肉球アイコン" />,
    title: "一頭一頭、丁寧に",
    description:
      "わんちゃんの性格や体調に合わせて、ストレスの少ない施術を心がけています。",
  },
  {
    icon: <FeatureIcon src="/trimming-salon_hp/icons/icon-calendar.png" alt="カレンダーアイコン" />,
    title: "完全予約制",
    description:
      "お待たせしない・他の子と会わない環境で、落ち着いてトリミングを受けられます。",
  },
  {
    icon: <FeatureIcon src="/trimming-salon_hp/icons/icon-scissors.png" alt="ハサミとコームアイコン" />,
    title: "安心の施術",
    description:
      "皮膚や被毛の状態をチェックしながら、やさしいシャンプーと丁寧なカットを行います。",
  },
  {
    icon: <FeatureIcon src="/trimming-salon_hp/icons/icon-chat.png" alt="チャットアイコン" />,
    title: "何でもご相談ください",
    description:
      "お手入れのコツやフードのことなど、日頃のケアについてもお気軽にどうぞ。",
  },
];

const pricing = [
  { breed: "チワワ", shampoo: "3,500円〜", cut: "5,000円〜" },
  { breed: "トイプードル", shampoo: "4,500円〜", cut: "6,500円〜" },
  { breed: "ミニチュアダックス", shampoo: "4,000円〜", cut: "5,500円〜" },
  { breed: "ポメラニアン", shampoo: "4,000円〜", cut: "6,000円〜" },
  { breed: "シーズー", shampoo: "4,500円〜", cut: "6,500円〜" },
  { breed: "柴犬", shampoo: "5,000円〜", cut: "—" },
  { breed: "ゴールデンレトリバー", shampoo: "8,000円〜", cut: "12,000円〜" },
];

function SectionLabel({
  en,
  ja,
  sub,
}: {
  en: string;
  ja: string;
  sub?: string;
}) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="block w-10 h-px bg-warm-border" />
        <p className="font-serif tracking-[0.3em] text-xs text-text-light uppercase">
          {en}
        </p>
        <span className="block w-10 h-px bg-warm-border" />
      </div>
      <h2 className="font-mincho text-2xl md:text-3xl font-medium mb-3">{ja}</h2>
      {sub && <p className="text-text-sub text-sm">{sub}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/trimming-salon_hp/hero.png"
            alt="トリミングサロンでブラッシングを受けるトイプードル"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-warm-bg/95 via-warm-bg/80 to-warm-bg/20 md:to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-28 md:py-40">
          <div className="max-w-xl">
            <FadeIn>
              <p className="font-script text-3xl md:text-4xl text-primary mb-1 leading-relaxed">
                Natural Dog Salon
              </p>
              <p className="font-serif italic tracking-[0.2em] text-text-sub text-xs mb-8">
                — Trimming Salon —
              </p>
              <h1 className="font-mincho text-3xl md:text-5xl font-semibold leading-tight mb-6">
                大切な家族に、
                <br />
                やさしいトリミングを。
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-text-sub max-w-lg mb-10 leading-relaxed text-sm md:text-base">
                一頭一頭に寄り添った完全予約制のプライベートサロン。
                <br className="hidden md:block" />
                わんちゃんもオーナー様も安心できる空間をご用意しています。
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:000-0000-0000"
                  className="bg-primary text-white px-8 py-3.5 rounded-xl font-medium hover:bg-primary-light transition-colors shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <IconPhone className="w-4 h-4" />
                  電話で予約する
                </a>
                <Link
                  href="/contact"
                  className="border border-primary text-primary px-8 py-3.5 rounded-xl font-medium hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <IconMail className="w-4 h-4" />
                  お問い合わせ
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" className="w-full block">
            <path
              fill="var(--color-warm-bg)"
              d="M0,48 C360,80 720,16 1440,48 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24 texture-light">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <SectionLabel
              en="Features"
              ja="サロンの特徴"
              sub="わんちゃんファーストの4つのこだわり"
            />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-warm-border shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-warm-border overflow-hidden shadow-sm">
                    {f.icon}
                  </div>
                  <h3 className="font-bold mb-2 text-sm">{f.title}</h3>
                  <p className="text-xs text-text-sub leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-warm-card texture-light">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <SectionLabel
              en="Price List"
              ja="料金表"
              sub="犬種別の目安料金です。毛量・体格により変動する場合がございます。"
            />
          </FadeIn>
          <FadeIn delay={150}>
            <div className="bg-white rounded-2xl border border-warm-border overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left px-5 py-3.5 font-medium">犬種</th>
                      <th className="text-left px-5 py-3.5 font-medium">
                        シャンプーコース
                      </th>
                      <th className="text-left px-5 py-3.5 font-medium">
                        カットコース
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((p, i) => (
                      <tr
                        key={i}
                        className={`border-t border-warm-border hover:bg-warm-bg transition-colors ${
                          i % 2 !== 0 ? "bg-warm-bg/50" : ""
                        }`}
                      >
                        <td className="px-5 py-3 font-medium">{p.breed}</td>
                        <td className="px-5 py-3 text-text-sub">{p.shampoo}</td>
                        <td className="px-5 py-3 text-text-sub">{p.cut}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-text-light mt-4 text-center">
              ※ 上記は税込価格です。毛玉・もつれがある場合は別途料金がかかる場合があります。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Trimmer */}
      <section id="trimmer" className="py-16 md:py-24 texture-light">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <SectionLabel
              en="Our Trimmer"
              ja="トリマー紹介"
              sub="経験豊富なトリマーが丁寧に対応します"
            />
          </FadeIn>
          <FadeIn delay={150}>
            <div className="bg-white rounded-2xl border border-warm-border p-6 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0 ring-4 ring-warm-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/trimming-salon_hp/trimmer.png"
                    alt="オーナートリマー 田邉凜々花"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-serif italic tracking-[0.2em] text-primary text-xs uppercase mb-1">
                    Owner Trimmer
                  </p>
                  <h3 className="font-mincho text-xl font-medium mb-4">田邉 凜々花</h3>
                  <div className="text-sm text-text-sub leading-relaxed space-y-3">
                    <p>
                      JKC公認トリマーA級ライセンス取得。ペットサロン勤務10年を経て、
                      2020年に「Paw Salon
                      ぱう」をオープン。小型犬から大型犬まで幅広く対応しています。
                    </p>
                    <p className="text-primary font-medium italic border-l-2 border-primary/30 pl-3 py-0.5">
                      「わんちゃんが&quot;また来たい&quot;と思ってくれるサロンでありたいです。
                      お気軽にご相談ください！」
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Shop Info */}
      <section id="shop" className="py-16 md:py-24 bg-warm-card texture-light">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <SectionLabel
              en="Shop Info"
              ja="店舗情報"
              sub="お気軽にお越しください"
            />
          </FadeIn>
          <FadeIn delay={150}>
            <div className="bg-white rounded-2xl border border-warm-border overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2">
                <div className="bg-warm-border/30 flex items-center justify-center min-h-[280px] text-text-light text-sm">
                  <div className="text-center">
                    <p className="text-4xl mb-2">🗺️</p>
                    <p>Google Map 埋め込みエリア</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4 text-sm">
                  <div className="pb-4 border-b border-warm-border/60">
                    <p className="font-serif tracking-widest text-xs text-text-light uppercase mb-1.5">
                      店舗名
                    </p>
                    <p className="font-medium">Paw Salon ぱう</p>
                  </div>
                  <div className="pb-4 border-b border-warm-border/60">
                    <p className="font-serif tracking-widest text-xs text-text-light uppercase mb-1.5">
                      住所
                    </p>
                    <p>〒000-0000 東京都渋谷区○○ 1-2-3 ぱうビル 1F</p>
                  </div>
                  <div className="pb-4 border-b border-warm-border/60">
                    <p className="font-serif tracking-widest text-xs text-text-light uppercase mb-1.5">
                      電話番号
                    </p>
                    <a
                      href="tel:000-0000-0000"
                      className="text-primary hover:underline font-medium"
                    >
                      000-0000-0000
                    </a>
                  </div>
                  <div className="pb-4 border-b border-warm-border/60">
                    <p className="font-serif tracking-widest text-xs text-text-light uppercase mb-1.5">
                      営業時間
                    </p>
                    <p>10:00〜18:00（最終受付 16:00）</p>
                  </div>
                  <div className="pb-4 border-b border-warm-border/60">
                    <p className="font-serif tracking-widest text-xs text-text-light uppercase mb-1.5">
                      定休日
                    </p>
                    <p>毎週水曜日・第3火曜日</p>
                  </div>
                  <div>
                    <p className="font-serif tracking-widest text-xs text-text-light uppercase mb-1.5">
                      アクセス
                    </p>
                    <p>○○駅 徒歩5分 / 駐車場2台あり</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 texture-light">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <SectionLabel
              en="FAQ"
              ja="よくある質問"
              sub="お客様からよくいただくご質問をまとめました"
            />
          </FadeIn>
          <FadeIn delay={150}>
            <FAQ />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-warm-card texture-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="font-script text-3xl text-primary mb-2">
              Get in Touch
            </p>
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="block w-10 h-px bg-warm-border" />
              <p className="font-serif tracking-[0.3em] text-xs text-text-light uppercase">
                Contact
              </p>
              <span className="block w-10 h-px bg-warm-border" />
            </div>
            <h2 className="font-mincho text-2xl md:text-3xl font-medium mb-4">
              ご予約・お問い合わせ
            </h2>
            <p className="text-text-sub mb-10 text-sm leading-relaxed">
              ご予約は電話・LINE・お問い合わせフォームから承っております。
              <br className="hidden md:block" />
              お気軽にお問い合わせください。
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:000-0000-0000"
                className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-light transition-colors shadow-md flex items-center justify-center gap-3"
              >
                <IconPhone className="w-5 h-5 shrink-0" />
                <span>
                  <span className="block text-xs opacity-80">お電話でのご予約</span>
                  <span className="block text-base font-bold">000-0000-0000</span>
                </span>
              </a>
              <a
                href="#"
                className="bg-[#06C755] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-3"
              >
                <IconLineChat className="w-5 h-5 shrink-0" />
                <span>
                  <span className="block text-xs opacity-80">LINEでのご予約</span>
                  <span className="block text-base font-bold">LINE で友だち追加</span>
                </span>
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-medium border-b border-primary/40 pb-0.5 hover:border-primary transition-colors text-sm"
            >
              お問い合わせフォームはこちら →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
