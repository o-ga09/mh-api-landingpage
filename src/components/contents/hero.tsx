import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <Image
          src="/logo.webp?height=100&width=240"
          alt="PokeAPI Logo"
          width={240}
          height={100}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">The RESTful Pokémon API</h1>
        <p className="text-xl">
          毎月<span className="font-bold">10億</span>以上のAPIコールを処理！
        </p>
      </div>
    </section>
  );
};
