import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import FadeIn from "@/components/FadeIn";

const features = [
  {
    icon: "🤲",
    title: "一頭一頭、丁寧に",
    description:
      "わんちゃんの性格や体調に合わせて、ストレスの少ない施術を心がけています。",
  },
  {
    icon: "📅",
    title: "完全予約制",
    description:
      "お待たせしない・他の子と会わない環境で、落ち着いてトリミングを受けられます。",
  },
  {
    icon: "✂️",
    title: "安心の施術",
    description:
      "皮膚や被毛の状態をチェックしながら、やさしいシャンプーと丁寧なカットを行います。",
  },
  {
    icon: "💬",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="トリミングサロンでブラッシングを受けるトイプードル"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority

          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30 md:from-white/85 md:via-white/60 md:to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-xl">
            <FadeIn>
              <p className="text-sm text-primary font-medium tracking-wider mb-4">
                Trimming Salon
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                大切な家族に、
                <br />
                やさしいトリミングを。
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-text-sub max-w-lg mb-10 leading-relaxed">
                一頭一頭に寄り添った完全予約制のプライベートサロン。
                <br className="hidden md:block" />
                わんちゃんもオーナー様も安心できる空間をご用意しています。
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:000-0000-0000"
                  className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-light transition-colors shadow-md"
                >
                  📞 電話で予約する
                </a>
                <Link
                  href="/contact"
                  className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-medium hover:bg-warm-card transition-colors"
                >
                  ✉️ お問い合わせ
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
      <section id="features" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              サロンの特徴
            </h2>
            <p className="text-text-sub text-center mb-12 text-sm">
              わんちゃんファーストの4つのこだわり
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-warm-border shadow-sm hover:shadow-md transition-shadow text-center h-full">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-text-sub leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-warm-card">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              料金表
            </h2>
            <p className="text-text-sub text-center mb-10 text-sm">
              犬種別の目安料金です。毛量・体格により変動する場合がございます。
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="bg-white rounded-2xl border border-warm-border overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left px-5 py-3 font-medium">犬種</th>
                      <th className="text-left px-5 py-3 font-medium">
                        シャンプーコース
                      </th>
                      <th className="text-left px-5 py-3 font-medium">
                        カットコース
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.map((p, i) => (
                      <tr
                        key={i}
                        className="border-t border-warm-border hover:bg-warm-bg transition-colors"
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
      <section id="trimmer" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              トリマー紹介
            </h2>
            <p className="text-text-sub text-center mb-12 text-sm">
              経験豊富なトリマーが丁寧に対応します
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="bg-white rounded-2xl border border-warm-border p-6 md:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/trimmer.png"
                    alt="オーナートリマー 田邉凜々花"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover object-top"
        
                  />
                </div>
                <div>
                  <p className="text-xs text-primary font-medium mb-1">
                    オーナートリマー
                  </p>
                  <h3 className="text-xl font-bold mb-3">田邉 凜々花</h3>
                  <div className="text-sm text-text-sub leading-relaxed space-y-2">
                    <p>
                      JKC公認トリマーA級ライセンス取得。ペットサロン勤務10年を経て、
                      2020年に「Paw Salon
                      ぱう」をオープン。小型犬から大型犬まで幅広く対応しています。
                    </p>
                    <p className="text-primary font-medium italic">
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
      <section id="shop" className="py-16 md:py-24 bg-warm-card">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              店舗情報
            </h2>
            <p className="text-text-sub text-center mb-12 text-sm">
              お気軽にお越しください
            </p>
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
                  <div>
                    <p className="text-xs text-text-light mb-1">店舗名</p>
                    <p className="font-medium">Paw Salon ぱう</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-light mb-1">住所</p>
                    <p>〒000-0000 東京都渋谷区○○ 1-2-3 ぱうビル 1F</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-light mb-1">電話番号</p>
                    <p>
                      <a
                        href="tel:000-0000-0000"
                        className="text-primary hover:underline"
                      >
                        000-0000-0000
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-light mb-1">営業時間</p>
                    <p>10:00〜18:00（最終受付 16:00）</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-light mb-1">定休日</p>
                    <p>毎週水曜日・第3火曜日</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-light mb-1">アクセス</p>
                    <p>○○駅 徒歩5分 / 駐車場2台あり</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              よくある質問
            </h2>
            <p className="text-text-sub text-center mb-12 text-sm">
              お客様からよくいただくご質問をまとめました
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <FAQ />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-warm-card to-accent/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
                className="bg-primary text-white px-8 py-4 rounded-2xl font-medium hover:bg-primary-light transition-colors shadow-md flex items-center justify-center gap-2"
              >
                📞
                <span>
                  <span className="block text-xs opacity-80">お電話でのご予約</span>
                  <span className="block text-lg">000-0000-0000</span>
                </span>
              </a>
              <a
                href="#"
                className="bg-[#06C755] text-white px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-2"
              >
                💬
                <span>
                  <span className="block text-xs opacity-80">LINEでのご予約</span>
                  <span className="block text-lg">LINE で友だち追加</span>
                </span>
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-block text-primary font-medium border-b-2 border-primary pb-1 hover:text-primary-light hover:border-primary-light transition-colors"
            >
              お問い合わせフォームはこちら →
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
