export default function Changelog() {
  return (
    <main className="flex-grow flex justify-center bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b-4 border-red-600 pb-4">
          更新履歴
        </h1>

        <div className="space-y-10">
          {/* 2025年の更新 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-600">2025年</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v0.2.0</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2025年5月1日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">新機能</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>武器データAPIの追加</li>
                      <li>防具データAPIの追加</li>
                      <li>スキルデータAPIの追加</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">改善</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>モンスターAPIのレスポンス速度を最大30%改善</li>
                      <li>ドキュメントの詳細化</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">バグ修正</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>特定のモンスターIDでエラーが発生する問題を修正</li>
                      <li>フィルタリングの不具合を修正</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v0.1.1</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2025年2月15日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">改善</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>モンスターデータの追加（合計100種類以上）</li>
                      <li>APIレスポンスのキャッシング対応</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">バグ修正</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>リクエスト制限の不具合を修正</li>
                      <li>検索フィルターの不具合を修正</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2024年の更新 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-600">2024年</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v0.1.0</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                    2024年12月1日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">初回リリース</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>モンスターデータAPIの公開</li>
                      <li>基本的な検索機能の実装</li>
                      <li>公式ドキュメントサイトのリリース</li>
                      <li>APIの基本認証機能</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 注意書き */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-gray-700">
            <p className="font-medium mb-1">注意:</p>
            <p>
              このページでは、Monster Hunter
              APIの主要なバージョン更新と変更点を記録しています。
            </p>
            <p>
              詳細な変更履歴については、
              <a
                href="https://github.com/o-ga09/MH-API"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              リポジトリをご覧ください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
