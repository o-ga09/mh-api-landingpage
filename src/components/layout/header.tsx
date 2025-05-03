import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-red-500 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Image
            src="/logo.webp?height=20&width=60"
            alt="PokeAPI"
            width={60}
            height={20}
            className="mr-2"
          />
        </div>
        <nav className="flex space-x-1">
          <Link
            href="/"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-colors"
          >
            ホーム
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 hover:bg-red-600 transition-colors"
          >
            概要
          </Link>
        </nav>
      </div>
    </header>
  );
};
