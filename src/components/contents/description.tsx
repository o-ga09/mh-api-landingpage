import { Button } from "../ui/button";

export const Description = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-lg mb-6">
          必要なポケモンデータがすべて一箇所に。
          <br />
          モダンで無料のオープンソースRESTful
          APIを通じて簡単にアクセスできます。
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600">
          ドキュメントを確認する
        </Button>
      </div>
    </section>
  );
};
