import Link from "next/link";

const About = () => {
  return (
    <main className="flex-grow flex justify-center">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          PokeAPI について
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            プロジェクトについて
          </h2>
          <p className="mb-4">
            PokeAPI
            は、開発者が簡単にポケモンのデータにアクセスできるように設計されたRESTful
            APIです。
            このAPIは、ゲーム、ポケモン、アイテム、技、タイプなどに関する包括的な情報を提供します。
          </p>
          <p className="mb-4">
            すべてのデータは完全に無料でオープンに利用可能で、認証も必要ありません。
            このプロジェクトは、コミュニティによって維持されているオープンソースプロジェクトです。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            フェアユース方針
          </h2>
          <p className="mb-4">
            PokeAPIは無料で使用できますが、過剰な使用を避けるために以下のガイドラインに従ってください：
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              大量のリクエストを短時間で送信しないでください
            </li>
            <li className="mb-2">
              キャッシュを活用して、同じデータに対する重複リクエストを減らしてください
            </li>
            <li className="mb-2">
              データをダウンロードして自分のアプリケーションでホストすることを検討してください
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">貢献する</h2>
          <p className="mb-4">
            PokeAPIはオープンソースプロジェクトであり、コミュニティからの貢献を歓迎しています。
            バグを見つけたり、機能を追加したい場合は、GitHubリポジトリでイシューを開くか、プルリクエストを送信してください。
          </p>
          <div className="mt-4 text-center">
            <Link
              href="https://github.com/PokeAPI/pokeapi"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              GitHubでコントリビュートする
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">謝辞</h2>
          <p className="mb-4">
            このAPIは、以下のリソースからのデータとコントリビューターの協力によって成り立っています：
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              Veekun / Pokedex - ベースデータの主要ソース
            </li>
            <li className="mb-2">Bulbapedia - 追加情報とリソース</li>
            <li className="mb-2">Pokemon.comの公式サイト</li>
            <li className="mb-2">すべてのコントリビューターとサポーター</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default About;
