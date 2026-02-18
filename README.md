# Paw Salon ぱう — ホームページ

犬のトリミングサロン「Paw Salon ぱう」のホームページです。
Next.js による静的サイトとして構築し、GitHub Pages にデプロイしています。

## 公開 URL

**https://rei-050812.github.io/trimming-salon_hp/**

---

## 技術スタック

| カテゴリ | 採用技術 |
|---|---|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| デプロイ | GitHub Pages (静的エクスポート) |

---

## フォント

| 用途 | フォント |
|---|---|
| 本文・UI全般 | Noto Sans JP |
| ロゴ・手書きアクセント | Dancing Script |
| 英字セリフ (セクションラベルなど) | Cormorant Garamond |
| 見出し (日本語) | Shippori Mincho |

---

## カラーパレット

| 変数名 | 値 | 用途 |
|---|---|---|
| `--color-primary` | `#2A5240` | メインカラー（濃いグリーン） |
| `--color-primary-light` | `#3D7A5A` | ホバー・アクセント |
| `--color-primary-dark` | `#1C3A2C` | フッター背景など |
| `--color-accent` | `#7B4F3A` | アクセント（ブラウン） |
| `--color-accent-light` | `#B07B5C` | アクセントホバー |
| `--color-warm-bg` | `#F7F3EC` | ページ背景 |
| `--color-warm-card` | `#EDE9E0` | カード・セクション背景 |
| `--color-warm-border` | `#D8CFBF` | ボーダー |
| `--color-text-main` | `#2C2018` | メインテキスト |
| `--color-text-sub` | `#6A5A4E` | サブテキスト |
| `--color-text-light` | `#9A8A7E` | 補足テキスト |

---

## ローカル開発

### 環境要件

- Node.js 18 以上
- npm

### セットアップ

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

> ローカルでは `basePath` は適用されません。GitHub Pages でのみ有効です。

---

## ビルド・デプロイ

### 静的ファイルを生成

```bash
npm run build
```

`out/` ディレクトリに静的ファイルが出力されます。

### GitHub Pages へのデプロイ

`main` ブランチにプッシュすると、GitHub Actions が自動的にビルドして GitHub Pages へデプロイします。

---

## ディレクトリ構成

```
trimming-salon/
├── public/
│   ├── hero.png          # ヒーローセクションの画像
│   ├── texture.svg       # 背景テクスチャ（SVG ノイズフィルター）
│   └── trimmer.png       # トリマー紹介の画像
├── src/
│   ├── app/
│   │   ├── layout.tsx    # レイアウト・フォント設定
│   │   ├── page.tsx      # トップページ
│   │   ├── globals.css   # デザイントークン・グローバルスタイル
│   │   ├── contact/      # お問い合わせページ
│   │   └── privacy/      # プライバシーポリシーページ
│   └── components/
│       ├── Header.tsx    # ヘッダー・ナビゲーション
│       ├── Footer.tsx    # フッター
│       └── FAQ.tsx       # よくある質問（アコーディオン）
├── next.config.ts        # Next.js 設定（basePath・静的エクスポート）
└── package.json
```
