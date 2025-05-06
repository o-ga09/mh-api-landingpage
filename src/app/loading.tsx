"use client";
import { useEffect, useState, useMemo } from "react";

export default function Loading() {
  // ランダムなローディングメッセージをuseMemoでラップ
  const loadingTexts = useMemo(
    () => [
      "パーティーを結成中...",
      "ダンジョンを生成中...",
      "魔法の詠唱中...",
      "アイテムを収集中...",
      "冒険の準備中...",
    ],
    []
  );

  const [loadingText, setLoadingText] = useState(loadingTexts[0]);
  const [progress, setProgress] = useState(0);

  // ローディングメッセージをランダムに変更
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [loadingTexts]);

  // プログレスバーを進める
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.floor(Math.random() * 5) + 1;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-8 font-mono">
      {/* ピクセルアート風の背景グリッド */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTEiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative max-w-2xl w-full space-y-8 text-center z-10">
        {/* ゲームタイトル風のローディングテキスト */}
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500 tracking-widest mb-8 pixel-text">
          LOADING...
        </h1>

        {/* ピクセルアートキャラクター */}
        <div className="flex items-center justify-center mb-8">
          <div className="pixel-art-character walk-animation">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ imageRendering: "pixelated" }}
            >
              <rect x="16" y="8" width="32" height="32" fill="#55FF55" />
              <rect x="16" y="40" width="8" height="8" fill="#55FF55" />
              <rect x="40" y="40" width="8" height="8" fill="#55FF55" />
              <rect x="24" y="16" width="8" height="8" fill="#FFFFFF" />
              <rect x="32" y="16" width="8" height="8" fill="#FFFFFF" />
              <rect x="24" y="32" width="16" height="8" fill="#000000" />
            </svg>
          </div>
        </div>

        {/* ローディングテキスト */}
        <p className="text-xl font-medium text-green-400 blink-text mb-4">
          {loadingText}
        </p>

        {/* ピクセルアートスタイルのプログレスバー */}
        <div className="w-full max-w-md mx-auto bg-gray-800 h-8 border-4 border-gray-600 relative pixel-border">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-white text-xs font-pixel">{progress}%</span>
          </div>
        </div>

        {/* ゲームのヒント */}
        <div className="mt-8 bg-gray-800 p-4 border-2 border-gray-600 max-w-md mx-auto">
          <p className="text-gray-400 text-xs mb-1">ゲームヒント:</p>
          <p className="text-white text-sm">
            ローディング中に方向キーを押すと隠しミニゲームが...かもしれません
          </p>
        </div>

        {/* ゲーム風のドットアニメーション */}
        <div className="flex items-center justify-center space-x-4 mt-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-none bg-yellow-400"
              style={{
                animation: `pixel-bounce 0.5s infinite alternate`,
                animationDelay: `${index * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ゲームスタイルのカスタムCSS */}
      <style jsx global>{`
        @keyframes pixel-bounce {
          0% {
            transform: translateY(0);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        @keyframes blink {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }

        @keyframes walk {
          0% {
            transform: translateX(-50px);
          }
          100% {
            transform: translateX(50px);
          }
        }

        .pixel-text {
          font-family: "Press Start 2P", monospace;
          text-shadow: 3px 3px 0 #000;
          -webkit-text-stroke: 1px #000;
        }

        .blink-text {
          animation: blink 1s infinite;
        }

        .walk-animation {
          animation: walk 3s infinite alternate;
        }

        .pixel-border {
          box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.2),
            inset 0 4px 0 0 rgba(255, 255, 255, 0.1);
        }

        .font-pixel {
          font-family: monospace;
          letter-spacing: 2px;
        }

        .pixel-art-character {
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
}
