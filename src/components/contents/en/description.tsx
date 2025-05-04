// filepath: /Users/taichi/OSS/mh-api-landingpage/src/components/contents/en/description.tsx
import Link from "next/link";
import { Button } from "../../ui/button";

export const Description = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-lg mb-6">
          All the Monster Hunter data you need in one place.
          <br />
          Easily accessible through a modern, free and open-source RESTful API.
        </p>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Link href="/en/document">Check Documentation</Link>
        </Button>
      </div>
    </section>
  );
};
