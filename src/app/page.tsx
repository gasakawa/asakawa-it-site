import About from "@/components/about";
import Contact from "@/components/contact";
import CookieBanner from "@/components/cookie-banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <CookieBanner />
      <Footer />
    </>
  );
}
