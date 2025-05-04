import { Hero } from "@/components/contents/hero";
import { Description } from "@/components/contents/description";
import { Test } from "@/components/contents/test";
import Acknowledgement from "@/components/contents/acknowledgement";

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
