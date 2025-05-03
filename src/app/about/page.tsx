import About from "@/components/contents/about";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <About />
      <Footer />
    </div>
  );
}
