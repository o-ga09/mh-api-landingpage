export default function Acknowledgement() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          謝辞
        </h2>

        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6 text-sm sm:text-base border border-gray-100">
          <p className="leading-relaxed">
            このプロジェクトは、
            <strong className="text-blue-600">
              オープンソースコミュニティの貢献者
            </strong>
            や <strong className="text-blue-600">MH-API ユーザー</strong>
            のご協力によって成り立っています。多くの人々に感謝の意を表します。
          </p>

          <hr className="border-gray-200" />

          <p className="leading-relaxed">
            このプロジェクトは、株式会社カプコンの商標および登録商標である
            <strong className="text-blue-600">
              モンスターハンターシリーズ ™
            </strong>{" "}
            を利用しています。モンスターハンターシリーズ ™
            は株式会社カプコンの知的財産です。ここにカプコン様へ感謝の意を表します。
          </p>

          <p className="italic text-gray-600 bg-gray-50 p-4 rounded-md border-l-4 border-gray-300 text-sm">
            なお、このプロジェクトは非公式のものであり、株式会社カプコンとは関係ありません。
          </p>
        </div>
      </div>
    </section>
  );
}
