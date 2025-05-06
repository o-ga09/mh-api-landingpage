"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  // ゲーム風の要素のための状態管理
  const [treasureFound, setTreasureFound] = useState(false);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [showDialog, setShowDialog] = useState(true);

  // キャラクターの移動を制御
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setPositionY((prev) => Math.max(prev - 10, -100));
          break;
        case "ArrowDown":
          setPositionY((prev) => Math.min(prev + 10, 100));
          break;
        case "ArrowLeft":
          setPositionX((prev) => Math.max(prev - 10, -100));
          break;
        case "ArrowRight":
          setPositionX((prev) => Math.min(prev + 10, 100));
          break;
      }

      // 特定の位置に到達したら宝箱を発見
      if (Math.abs(positionX) > 80 && Math.abs(positionY) > 80) {
        setTreasureFound(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [positionX, positionY]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8 font-mono">
      {/* ピクセルアート風の背景グリッド */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTEiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-2xl w-full space-y-8 text-center z-10">
        {/* ゲームタイトル風に404 */}
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-widest animate-pulse mb-8 pixel-text">
          LEVEL 404
        </h1>

        {/* ドット絵キャラクター */}
        <div
          className="w-32 h-32 mx-auto transition-transform duration-200"
          style={{
            transform: `translate(${positionX}px, ${positionY}px)`,
            imageRendering: "pixelated",
            cursor: "pointer",
          }}
          onClick={() => setShowDialog(!showDialog)}
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
                  <rect x="16" y="8" width="32" height="32" fill="#55AAFF" />
                  <rect x="16" y="40" width="8" height="8" fill="#55AAFF" />
                  <rect x="40" y="40" width="8" height="8" fill="#55AAFF" />
                  <rect x="24" y="16" width="8" height="8" fill="#FFFFFF" />
                  <rect x="32" y="16" width="8" height="8" fill="#FFFFFF" />
                  <rect x="24" y="32" width="16" height="8" fill="#000000" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {showDialog && (
          <>
            {/* RPG風のテキストボックス */}
            <div className="bg-blue-900 border-4 border-white p-6 rounded-lg shadow-lg text-start relative my-8">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-700 rounded-lg pointer-events-none"></div>
              <p className="text-white text-lg typing-animation">
                <span className="text-green-300">勇者</span>:
                おっと！ここは存在しない世界のようだ…
              </p>
              <p className="text-white text-lg mt-2 typing-animation-delay">
                <span className="text-green-300">勇者</span>:
                方向キーで探索するか、冒険の始まりに戻ろう。
              </p>
              <div className="mt-4 h-4 w-4 animate-pulse">▼</div>
            </div>

            {/* ゲーム操作方法 */}
            <div className="grid grid-cols-2 gap-2 text-white mb-8">
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-gray-400 text-xs">操作方法</p>
                <p>方向キーで移動</p>
              </div>
              <div className="bg-gray-800 p-3 rounded">
                <p className="text-gray-400 text-xs">ミッション</p>
                <p>宝箱を見つけよう</p>
              </div>
            </div>
          </>
        )}

        {/* 隠し宝箱発見 */}
        {treasureFound && (
          <div className="bg-purple-900 border-2 border-yellow-500 p-4 rounded-lg animate-fadeIn mt-6">
            <p className="text-yellow-400">🎮 宝箱を発見しました！</p>
            <p className="text-purple-200 text-sm">
              「経験値 +404」を獲得した！
            </p>
          </div>
        )}

        {/* アクションボタン */}
        <div className="pt-4">
          <Link href="/">
            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 transition-all duration-200 px-8 py-6 text-lg border-b-4 border-green-800 active:border-b-0 active:transform active:translate-y-1"
            >
              <Home className="mr-2 h-5 w-5" />
              魔法の門をくぐる
            </Button>
          </Link>
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
