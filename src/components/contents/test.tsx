import { CopyIcon } from "lucide-react";
import Link from "next/link";
import ApiResponse from "../demo/apiResponese";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Test = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          今すぐ試してみよう！
        </h2>

        <div className="flex items-center mb-6">
          <div className="flex-1 relative">
            <Input
              type="text"
              defaultValue="https://mh-api.com/v1/"
              className="pr-12 border-gray-300"
              readOnly
            />
            <Input
              type="text"
              defaultValue="pokemon/ditto"
              className="absolute top-0 left-[215px] right-0 h-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <Button variant="outline" className="ml-2 px-3">
            <CopyIcon className="h-4 w-4" />
          </Button>
          <Button className="ml-2 bg-blue-500 hover:bg-blue-600">送信</Button>
        </div>

        <div className="text-sm mb-6">
          <p>
            ヒントが必要ですか？こちらを試してみてください:
            <Link href="#" className="text-blue-500 hover:underline mx-1">
              pokemon/ditto
            </Link>
            ,
            <Link href="#" className="text-blue-500 hover:underline mx-1">
              pokemon-species/aegislash
            </Link>
            ,
            <Link href="#" className="text-blue-500 hover:underline mx-1">
              type/3
            </Link>
            ,
            <Link href="#" className="text-blue-500 hover:underline mx-1">
              ability/battle-armor
            </Link>
          </p>
        </div>

        <div className="mb-6">
          <p className="font-medium mb-2">
            直接リンク:
            <Link
              href="https://mh-api.com/v1/"
              className="text-blue-500 hover:underline ml-1"
            >
              https://mh-api.com/v1/
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">dittoのリソース</h3>
          <ApiResponse />
        </div>
      </div>
    </section>
  );
};
