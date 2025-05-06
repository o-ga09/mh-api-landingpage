"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  const changelogLink = isEnglish ? "/en/changelog" : "/changelog";

  // ナビゲーションリンクのラベル
  const homeLabel = isEnglish ? "Home" : "ホーム";
  const aboutLabel = isEnglish ? "About" : "概要";
  const documentLabel = isEnglish ? "Documentation" : "ドキュメント";
  const changelogLabel = isEnglish ? "Changelog" : "更新履歴";
  const languageLabel = isEnglish ? "日本語" : "English";

  // モバイルメニューの切り替え
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // メニューリンク共通のクラス
  const linkClass = (isActive: boolean) =>
    `px-4 py-2 ${
      isActive ? "bg-red-600" : "hover:bg-red-600"
    } transition-colors`;

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

        {/* モバイルハンバーガーボタン */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isEnglish ? "Toggle menu" : "メニューを切り替える"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link
            href={homeLink}
            className={linkClass(
              (pathname === "/" && !isEnglish) ||
                (pathname === "/en" && isEnglish)
            )}
          >
            {homeLabel}
          </Link>
          <Link
            href={aboutLink}
            className={linkClass(pathname.includes("/about"))}
          >
            {aboutLabel}
          </Link>
          <Link
            href={documentLink}
            className={linkClass(pathname.includes("/document"))}
          >
            {documentLabel}
          </Link>
          <Link
            href={changelogLink}
            className={linkClass(pathname.includes("/changelog"))}
          >
            {changelogLabel}
          </Link>
          <Link
            href={getAlternateLanguagePath()}
            className="ml-2 px-3 py-1 border border-white rounded-md hover:bg-white hover:text-red-600 transition-colors text-sm"
          >
            {languageLabel}
          </Link>
        </nav>
      </div>

      {/* モバイルメニュー - メニューが開いているときだけ表示 */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col w-full border-t border-red-400">
          <Link
            href={homeLink}
            className={`py-3 px-4 border-b border-red-400 ${
              (pathname === "/" && !isEnglish) ||
              (pathname === "/en" && isEnglish)
                ? "bg-red-600"
                : "hover:bg-red-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {homeLabel}
          </Link>
          <Link
            href={aboutLink}
            className={`py-3 px-4 border-b border-red-400 ${
              pathname.includes("/about") ? "bg-red-600" : "hover:bg-red-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {aboutLabel}
          </Link>
          <Link
            href={documentLink}
            className={`py-3 px-4 border-b border-red-400 ${
              pathname.includes("/document") ? "bg-red-600" : "hover:bg-red-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {documentLabel}
          </Link>
          <Link
            href={changelogLink}
            className={`py-3 px-4 border-b border-red-400 ${
              pathname.includes("/changelog")
                ? "bg-red-600"
                : "hover:bg-red-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            {changelogLabel}
          </Link>
          <Link
            href={getAlternateLanguagePath()}
            className="py-3 px-4 border-b border-red-400"
            onClick={() => setIsMenuOpen(false)}
          >
            {languageLabel}
          </Link>
        </nav>
      )}
    </header>
  );
};
