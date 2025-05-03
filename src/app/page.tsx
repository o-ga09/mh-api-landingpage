import { Header } from "@/components/layout/header";
import { Hero } from "@/components/contents/hero";
import { Description } from "@/components/contents/description";
import { Test } from "@/components/contents/test";
import { Footer } from "@/components/layout/footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Description />
      <Test />
      <Footer />
    </div>
  );
};

export default Home;
