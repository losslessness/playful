import Categories from "@/components/CategoriesList";
import Hero from "@/components/HeroSection";
import Products from "@/components/ProductsCarousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Products />
    </main>
  );
}