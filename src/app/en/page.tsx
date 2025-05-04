// filepath: /Users/taichi/OSS/mh-api-landingpage/src/app/en/page.tsx
import { Hero } from "@/components/contents/en/hero";
import { Description } from "@/components/contents/en/description";
import { Test } from "@/components/contents/en/test";
import Acknowledgement from "@/components/contents/en/acknowledgement";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Description />
      <Test />
      <Acknowledgement />
    </div>
  );
};

export default Home;
