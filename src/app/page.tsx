import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import List from "@/components/Products";
import Mobile from "@/components/Mobile";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <Mobile />
      </header>
      <main>
        <Hero />
        <Categories />
        <List />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}