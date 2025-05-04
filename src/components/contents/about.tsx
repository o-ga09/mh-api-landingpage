import Link from "next/link";

const About = () => {
  return (
    <main className="flex-grow flex justify-center bg-gray-50 py-12">
      <div className="container max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-800 border-b-4 border-red-600 pb-4 max-w-2xl mx-auto">
          Monster Hunter API について
        </h1>

        {/* プロジェクト紹介セクション */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border border-gray-100 transform transition-all hover:shadow-xl">
          <div className="flex items-center mb-6">
            <div className="bg-red-600 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              プロジェクトについて
            </h2>
          </div>

          <div className="pl-2 border-l-4 border-red-600">
            <p className="mb-4 leading-relaxed text-gray-700">
              <strong className="text-red-600">Monster Hunter API</strong>{" "}
              は、開発者が簡単にモンスターハンターのデータにアクセスできるように設計されたRESTful
              APIです。
              このAPIは、ゲーム、モンスター、武器、防具、スキルなどに関する包括的な情報を提供します。
            </p>
            <p className="mb-2 leading-relaxed text-gray-700">
              すべてのデータは<strong>完全に無料</strong>
              でオープンに利用可能で、認証も必要ありません。
              このプロジェクトは、コミュニティによって維持されている
              <strong>オープンソースプロジェクト</strong>です。
            </p>
          </div>
        </section>

        {/* API説明セクション */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white rounded-lg shadow-md p-8 border border-gray-100 h-full">
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                APIとは？
              </h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              <strong>
                API（アプリケーション・プログラミング・インターフェース）
              </strong>
              とは、開発者が一連のインターフェースを通じてアプリケーションとやり取りできるようにする仕組みです。この場合、アプリケーションはモンスターハンター関連データのデータベースであり、インターフェースはURLリンクです。
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              <strong>RESTful API</strong>{" "}
              は、HTTP動詞、エラー、ハイパーリンクに基づく一連の規則に準拠した
              API です。
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 border border-gray-100 h-full">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                なぜ必要なの？
              </h2>
            </div>
            <p className="leading-relaxed text-gray-700">
              モンスターハンターに関するウェブサイトは多数存在しますが、それぞれが独自のデータを管理しています。私たちの目標は、
              <strong>単一の信頼できるデータソース</strong>を提供することです。
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              新作や大型アップデートがリリースされた際、各サイトが同じ情報を更新する必要がありますが、Monster
              Hunter
              APIを利用することで、すべてのサイトが同時に最新データにアクセスできるようになります。
            </p>
          </section>
        </div>

        {/* 情報量と貢献セクション */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white rounded-lg shadow-md p-8 border border-gray-100 h-full">
            <div className="flex items-center mb-6">
              <div className="bg-purple-500 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                収録データ
              </h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              このAPIでは以下のような豊富なデータを提供しています：
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>モンスター情報（弱点、報酬など）</li>
              <li>武器データ（種類別、レア度別など）</li>
              <li>防具セットと個別防具</li>
              <li>スキルとその効果</li>
              <li>アイテムと素材</li>
              <li>クエスト情報</li>
              <li>ロケーションとマップデータ</li>
            </ul>
            <p className="mt-4 text-gray-700">
              すべてのデータ種類を確認するには、
              <Link href="/document" className="text-red-600 hover:underline">
                ドキュメント
              </Link>
              をご覧ください。
            </p>
            <p>
              また、データの収集については、モンハン20th記念サイトから作成しました。
              <Link
                href="https://www.monsterhunter.com/20th/ja-jp/"
                className="text-red-600 hover:underline"
              >
                こちら
              </Link>
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 border border-gray-100 h-full">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">改善提案</h2>
            </div>
            <p className="mb-4 leading-relaxed text-gray-700">
              APIに足りない情報や改善点がある場合は、ぜひご協力ください。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700">
                <strong>新機能のアイデア？</strong>{" "}
                GitHubリポジトリでIssueを作成してください。
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>データの不備？</strong>{" "}
                プルリクエストを送信してデータの修正にご協力ください。
              </p>
            </div>
          </section>
        </div>

        {/* テクノロジースタック */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-600 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              テクノロジースタック
            </h2>
          </div>
          <div className="space-y-4 pl-2 border-l-4 border-indigo-600">
            <p className="leading-relaxed text-gray-700">
              Monster Hunter APIは以下のテクノロジーで構築されています：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-600 mb-2">
                  バックエンド
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Go</li>
                  <li>Gin</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h3 className="font-semibold text-indigo-600 mb-2">
                インフラストラクチャ
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Cloud Run</li>
                <li>TiDB Serverless</li>
              </ul>
            </div>
          </div>
        </section>

        {/* フェアユース方針 */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="bg-red-600 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              フェアユース方針
            </h2>
          </div>
          <div className="pl-2 border-l-4 border-red-600">
            <p className="mb-6 leading-relaxed text-gray-700">
              Monster Hunter APIは<strong>無料</strong>
              で使用できますが、サービスを維持するために以下のガイドラインに従ってください：
            </p>
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <ul className="list-disc pl-5 space-y-4 text-gray-700">
                <li className="leading-relaxed">
                  <strong className="text-red-600">リクエスト制限：</strong>{" "}
                  短時間で大量のリクエストを送信しないでください
                </li>
                <li className="leading-relaxed">
                  <strong className="text-red-600">キャッシング：</strong>{" "}
                  アプリケーションでデータをキャッシュして、同じデータに対する重複リクエストを減らしてください
                </li>
                <li className="leading-relaxed">
                  <strong className="text-red-600">自己ホスト：</strong>{" "}
                  高頻度で利用する場合は、データをダウンロードして自分のアプリケーションでホストすることを検討してください
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 貢献セクション */}
        <section className="mb-8 bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:border-red-600 transition-colors">
          <div className="flex items-center mb-6">
            <div className="bg-red-600 p-3 rounded-full mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">貢献する</h2>
          </div>
          <div className="pl-2 border-l-4 border-red-600">
            <p className="mb-6 leading-relaxed text-gray-700">
              Monster Hunter
              APIはオープンソースプロジェクトであり、コミュニティからの貢献を歓迎しています。
              以下の方法で参加できます：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="bg-red-100 p-3 rounded-full inline-flex mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">バグ報告</h3>
                <p className="text-sm text-gray-700">
                  GitHubリポジトリでイシューを作成する
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="bg-red-100 p-3 rounded-full inline-flex mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-600"
                  >
                    <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
                    <line x1="3" y1="22" x2="21" y2="22"></line>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">コード貢献</h3>
                <p className="text-sm text-gray-700">
                  プルリクエストを送信する
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="bg-red-100 p-3 rounded-full inline-flex mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-red-600"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">フィードバック</h3>
                <p className="text-sm text-gray-700">改善アイデアを共有する</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                href="https://github.com/o-ga09/MH-API"
                className="bg-red-600 text-white px-8 py-4 rounded-md font-medium hover:bg-red-700 transition-colors shadow-lg inline-flex items-center space-x-2 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHubでコントリビュートする
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
