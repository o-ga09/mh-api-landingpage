## モンハンAPIの紹介サイト

モンハンAPIの紹介サイト用のソースコード。

- APIをデモリクエスト可能
- API概要
- APIドキュメント
- 更新履歴

を確認可能です。

### 技術構成

- Next.js
- TailWindCSS
- CloudFlare Workers

### 起動

```
$ npm run dev
```

### デプロイ

mainブランチへのPushで、Cloudflare Workersに自動デプロイされる。
