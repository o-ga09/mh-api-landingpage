import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <Image
          src="/logo.webp?height=100&width=240"
          alt="Monster Hunter API Logo"
          width={240}
          height={100}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">
          The RESTful Monster Hunter API
        </h1>
      </div>
    </section>
  );
};
