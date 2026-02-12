# Paw Salon ぱう - トリミングサロン Web サイト

地域のトリミングサロン向けの小規模 Web サイトです。
安心感・親しみやすさを重視した、集客・予約導線のためのサイトとして設計しています。

## ページ構成

| ページ | パス | 内容 |
|---|---|---|
| トップページ | `/` | ヒーロー・特徴・料金表・トリマー紹介・店舗情報・FAQ・予約CTA |
| お問い合わせ | `/contact` | 名前・メール・内容の簡易フォーム（仮送信） |
| プライバシーポリシー | `/privacy` | 個人情報の取り扱いについて |

## 技術スタック

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- レスポンシブ対応（スマホ・タブレット・PC）

## セットアップ

```bash
npm install
npm run dev
```

開発サーバーが起動します（デフォルト: http://localhost:3000）

## ビルド

```bash
npm run build
npm start
```

## ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx          # 共通レイアウト（Header/Footer・OGP設定）
│   ├── page.tsx            # トップページ
│   ├── globals.css         # グローバルスタイル・カラーテーマ
│   ├── contact/
│   │   ├── layout.tsx      # お問い合わせSEO設定
│   │   └── page.tsx        # お問い合わせフォーム
│   └── privacy/
│       ├── layout.tsx      # プライバシーポリシーSEO設定
│       └── page.tsx        # プライバシーポリシー
├── components/
│   ├── Header.tsx          # ヘッダー（モバイルハンバーガーメニュー付き）
│   ├── Footer.tsx          # フッター
│   ├── FAQ.tsx             # アコーディオンFAQ
│   └── FadeIn.tsx          # スクロールアニメーション
public/
├── hero.png                # ヒーロー背景画像
└── trimmer.png             # トリマー紹介写真
```
