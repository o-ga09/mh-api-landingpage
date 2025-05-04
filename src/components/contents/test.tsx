"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { CopyIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import ApiResponse from "../demo/apiResponese";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Test = () => {
  const baseUrl = "https://api.mh-api.com/v1/"; // モンスターハンターAPIのURL
  const [endpoint, setEndpoint] = useState("monsters");
  const [apiData, setApiData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // コピーの状態をリセットするタイマー
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  // APIリクエストを送信する関数
  const fetchApiData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setApiData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  // ヒントリンクをクリックしたときのハンドラ
  const handleHintClick = (hint: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setEndpoint(hint);
  };

  // URLをクリップボードにコピーする関数
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`${baseUrl}${endpoint}`)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("コピーできませんでした:", err);
      });
  };

  // フォーム送信時のハンドラ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchApiData();
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          今すぐ試してみよう！
        </h2>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex items-center">
            <div className="flex-1 flex items-center">
              <Input
                type="text"
                value={baseUrl}
                className="rounded-r-none border-r-0 w-1/2"
                readOnly
              />
              <Input
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                className="rounded-l-none w-1/2"
              />
            </div>
            <Button
              type="button"
              variant="outline"
              className="ml-2 px-3"
              onClick={copyToClipboard}
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <CopyIcon className="h-4 w-4" />
              )}
            </Button>
            <Button
              type="submit"
              className="ml-2 bg-blue-500 hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? "送信中..." : "送信"}
            </Button>
          </div>
        </form>

        <div className="text-sm mb-6">
          <p>
            ヒントが必要ですか？こちらを試してみてください:
            <Link
              href="#"
              className="text-blue-500 hover:underline mx-1"
              onClick={handleHintClick("monsters")}
            >
              monsters
            </Link>
            ,
            <Link
              href="#"
              className="text-blue-500 hover:underline mx-1"
              onClick={handleHintClick("weapons/great-sword")}
            >
              weapons/great-sword
            </Link>
            ,
            <Link
              href="#"
              className="text-blue-500 hover:underline mx-1"
              onClick={handleHintClick("locations/ancient-forest")}
            >
              locations/ancient-forest
            </Link>
            ,
            <Link
              href="#"
              className="text-blue-500 hover:underline mx-1"
              onClick={handleHintClick("items/potion")}
            >
              items/potion
            </Link>
          </p>
        </div>

        <div className="mb-6">
          <p className="font-medium mb-2">
            直接リンク:
            <Link
              href={`${baseUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-1"
            >
              {baseUrl}
            </Link>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            {apiData ? `${endpoint}のレスポンス` : "monsters のリソース"}
          </h3>
          <ApiResponse
            data={apiData}
            isLoading={isLoading}
            error={error || undefined}
          />
        </div>
      </div>
    </section>
  );
};
