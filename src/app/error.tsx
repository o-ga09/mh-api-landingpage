"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // エラーをコンソールに記録
  useEffect(() => {
    console.error(error);
  }, [error]);

  // ゲーム風の要素のための状態管理
  const [bounceCount, setBounceCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  // バウンスカウンターを増やす関数
  const handleBounce = () => {
    const newCount = bounceCount + 1;
    setBounceCount(newCount);

    // 10回バウンスしたら隠し要素を表示
    if (newCount >= 10) {
      setShowSecret(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8 font-mono">
      {/* ピクセルアート風の背景グリッド */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTEiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-2xl w-full space-y-8 text-center z-10">
        {/* ゲームオーバー表示 */}
        <h1 className="text-5xl md:text-7xl font-bold text-red-500 tracking-widest animate-pulse mb-8 pixel-text">
          ERROR ENCOUNTERED
        </h1>

        {/* ドット絵キャラクター */}
        <div
          className="w-32 h-32 mx-auto cursor-pointer transition-transform hover:scale-110"
          onClick={handleBounce}
          style={{
            animation: "bounce 0.5s infinite alternate",
            imageRendering: "pixelated",
          }}
        >
          {/* 8ビット風キャラクター */}
          <div className="pixel-art">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ imageRendering: "pixelated" }}
                >
                  <rect x="16" y="8" width="32" height="32" fill="#FF5555" />
                  <rect x="16" y="40" width="8" height="8" fill="#FF5555" />
                  <rect x="40" y="40" width="8" height="8" fill="#FF5555" />
                  <rect x="24" y="16" width="8" height="8" fill="#FFFFFF" />
                  <rect x="32" y="16" width="8" height="8" fill="#FFFFFF" />
                  <rect x="24" y="32" width="16" height="8" fill="#000000" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {bounceCount > 0 && (
          <p className="text-yellow-400 text-sm animate-bounce">
            キャラクターをクリック: {bounceCount}/10
          </p>
        )}

        {/* RPG風のテキストボックス */}
        <div className="bg-blue-900 border-4 border-white p-6 rounded-lg shadow-lg text-start relative my-8">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-700 rounded-lg pointer-events-none"></div>
          <p className="text-white text-lg typing-animation">
            <span className="text-yellow-300">システム</span>:
            予期せぬエラーが発生しました!
          </p>
          <p className="text-white text-lg mt-2 typing-animation-delay">
            <span className="text-yellow-300">システム</span>:
            再起動して冒険を続けましょう。
          </p>
          <div className="mt-4 h-4 w-4 animate-pulse">▼</div>
        </div>

        {/* 隠し要素 */}
        {showSecret && (
          <div className="bg-purple-900 border-2 border-purple-500 p-4 rounded-lg animate-fadeIn mt-6">
            <p className="text-yellow-400">🎮 隠しアイテムを発見しました！</p>
            <p className="text-purple-200 text-sm">
              「デバッガーの剣」を手に入れた！
            </p>
          </div>
        )}

        {/* ゲーム風のステータス表示 */}
        <div className="grid grid-cols-2 gap-2 text-white mb-8">
          <div className="bg-gray-800 p-3 rounded">
            <p className="text-gray-400 text-xs">ステータス</p>
            <p>混乱状態</p>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <p className="text-gray-400 text-xs">エラーコード</p>
            <p className="font-mono">{error.digest || "???"}</p>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={reset}
            size="lg"
            className="bg-green-600 text-white hover:bg-green-700 transition-all duration-200 px-8 py-6 text-lg border-b-4 border-green-800 active:border-b-0 active:transform active:translate-y-1 w-full sm:w-auto"
          >
            <RefreshCcw className="mr-2 h-5 w-5" />
            再起動する
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            size="lg"
            variant="outline"
            className="bg-gray-800 text-white border-2 border-gray-600 hover:bg-gray-700 transition-all duration-200 px-8 py-6 text-lg active:transform active:translate-y-1 w-full sm:w-auto"
          >
            <Home className="mr-2 h-5 w-5" />
            メインメニューへ
          </Button>
        </div>
      </div>

      {/* ゲームスタイルのカスタムCSS */}
      <style jsx global>{`
        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }

        .pixel-text {
          font-family: "Press Start 2P", monospace;
          text-shadow: 3px 3px 0 #000;
          -webkit-text-stroke: 1px #000;
        }

        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(40, end);
        }

        .typing-animation-delay {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(40, end);
          animation-delay: 2s;
          animation-fill-mode: both;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }

        .pixel-art {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
}
