export default function Changelog() {
  return (
    <main className="flex-grow flex justify-center bg-gray-50 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 border-b-4 border-red-600 pb-4">
          更新履歴
        </h1>

        <div className="space-y-10">
          {/* 2024年の更新 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-600">2024年</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.2.1</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2024年6月4日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">新機能</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>BGM検索機能の追加</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.2.0</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2024年4月14日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">β版リリース</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>モンスター検索機能（複数件）の実装</li>
                      <li>モンスター検索機能（1件）の実装</li>
                      <li>モンスター人気投票ランキング検索の追加</li>
                      <li>DBヘルスチェック機能の追加</li>
                      <li>
                        コードのリファクタリングとディレクトリ構造の最適化
                      </li>
                      <li>API仕様の整理</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2023年の更新 */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-red-600">2023年</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.7</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2023年11月11日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">修正</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Terraformの適用に関する問題の修正</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.6</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2023年11月11日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">修正</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>APIレスポンスの不具合修正</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.3</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2023年11月6日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">新機能</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Auth0認証機能の実装</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">改善</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>API定義の整理と改善</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.2</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2023年11月5日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">改善</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>インフラをTerraformで管理するように変更</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.1</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2023年10月14日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">改善</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>log/slogの実装</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">修正</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Secret Managerで発生していた課金問題の修正</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.1.0</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                    2023年6月8日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">リリース</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>ソースコードの公開</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">v1.0.0</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                    2023年5月27日
                  </span>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-800">初回リリース</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Monster Hunter APIの初回リリース</li>
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
