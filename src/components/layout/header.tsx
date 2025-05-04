"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドのみで実行されるように設定
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 現在の言語が英語かどうかを判断
  const isEnglish = isClient && pathname?.startsWith("/en");

  // 対応する反対言語のパスを取得
  const getAlternateLanguagePath = () => {
    if (!pathname) return isEnglish ? "/" : "/en";

    if (isEnglish) {
      // 英語から日本語へ
      return pathname.replace(/^\/en/, "");
    } else {
      // 日本語から英語へ
      return `/en${pathname}`;
    }
  };

  // 現在の言語に応じてナビゲーションリンクを設定
  const homeLink = isEnglish ? "/en" : "/";
  const aboutLink = isEnglish ? "/en/about" : "/about";
  const documentLink = isEnglish ? "/en/document" : "/document";

  // ナビゲーションリンクのラベル
  const homeLabel = isEnglish ? "Home" : "ホーム";
  const aboutLabel = isEnglish ? "About" : "概要";
  const documentLabel = isEnglish ? "Documentation" : "ドキュメント";
  const languageLabel = isEnglish ? "日本語" : "English";

  return (
    <header className="bg-red-500 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Link href={homeLink} className="text-2xl font-bold">
            <Image
              src="/logo.webp?height=20&width=60"
              alt="Monster Hunter API"
              width={60}
              height={20}
              className="mr-2"
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-1">
          <Link
            href={homeLink}
            className={`px-4 py-2 ${
              (pathname === "/" && !isEnglish) ||
              (pathname === "/en" && isEnglish)
                ? "bg-red-600"
                : "hover:bg-red-600"
            } transition-colors`}
          >
            {homeLabel}
          </Link>
          <Link
            href={aboutLink}
            className={`px-4 py-2 ${
              pathname.includes("/about") ? "bg-red-600" : "hover:bg-red-600"
            } transition-colors`}
          >
            {aboutLabel}
          </Link>
          <Link
            href={documentLink}
            className={`px-4 py-2 ${
              pathname.includes("/document") ? "bg-red-600" : "hover:bg-red-600"
            } transition-colors`}
          >
            {documentLabel}
          </Link>
          <Link
            href={getAlternateLanguagePath()}
            className="ml-2 px-3 py-1 border border-white rounded-md hover:bg-white hover:text-red-600 transition-colors text-sm"
          >
            {languageLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
};
