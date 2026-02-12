export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
        プライバシーポリシー
      </h1>

      <div className="bg-white rounded-2xl border border-warm-border p-6 md:p-10 shadow-sm space-y-8 text-sm text-text-sub leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-text-main mb-3">
            1. 個人情報の収集について
          </h2>
          <p>
            当サロン「Paw Salon
            ぱう」（以下「当サロン」）は、お問い合わせ・ご予約の際に、お名前・メールアドレス・電話番号等の個人情報をお預かりすることがあります。これらの情報は、お客様への連絡・サービス提供の目的でのみ利用いたします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-text-main mb-3">
            2. 個人情報の利用目的
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>ご予約・お問い合わせへの対応</li>
            <li>サービスに関するご案内やご連絡</li>
            <li>サービスの改善・向上のための分析</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-text-main mb-3">
            3. 個人情報の第三者提供
          </h2>
          <p>
            当サロンは、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-text-main mb-3">
            4. 個人情報の管理
          </h2>
          <p>
            当サロンは、お客様の個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、適切な安全管理措置を講じます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-text-main mb-3">
            5. Cookie（クッキー）について
          </h2>
          <p>
            当サイトでは、利便性の向上やアクセス解析のためにCookieを使用する場合があります。Cookieの使用を望まない場合は、ブラウザの設定により無効化することが可能です。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-text-main mb-3">
            6. プライバシーポリシーの変更
          </h2>
          <p>
            当サロンは、必要に応じて本ポリシーを変更することがあります。変更後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-text-main mb-3">
            7. お問い合わせ窓口
          </h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
          </p>
          <div className="mt-3 p-4 bg-warm-bg rounded-xl">
            <p className="font-medium text-text-main">Paw Salon ぱう</p>
            <p>電話番号：000-0000-0000</p>
            <p>メール：info@example.com</p>
          </div>
        </section>

        <p className="text-xs text-text-light text-right">
          制定日：2024年1月1日
        </p>
      </div>
    </div>
  );
}
