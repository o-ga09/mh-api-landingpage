"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-red-500 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/logo.webp?height=20&width=60"
              alt="Monster Hunter API"
              width={60}
              height={20}
              className="mr-2"
            />
          </Link>
        </div>
        <nav className="flex space-x-1">
          <Link
            href="/"
            className={`px-4 py-2 ${
              pathname === "/" ? "bg-red-600" : "hover:bg-red-600"
            } transition-colors`}
          >
            ホーム
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 ${
              pathname === "/about" ? "bg-red-600" : "hover:bg-red-600"
            } transition-colors`}
          >
            概要
          </Link>
          <Link
            href="/document"
            className={`px-4 py-2 ${
              pathname === "/document" ? "bg-red-600" : "hover:bg-red-600"
            } transition-colors`}
          >
            ドキュメント
          </Link>
        </nav>
      </div>
    </header>
  );
};
