import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import ProductCard from "@/components/common/ProductCard";
import ProductImage from "@/assets/images/product-image.webp";

export default function Products() {
  const links = [{
    key: 1,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike"
  },
  {
    key: 2,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike"
  },
  {
    key: 3,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike"
  },
  {
    key: 4,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike"
  },
  {
    key: 5,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike"
  },
  {
    key: 6,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike"
  },
  {
    key: 7,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike"
  },
  {
    key: 8,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike"
  }];

  return (
    <section>
      <div className="products">
        <h1 className="products-title">Best Sellers</h1>
        <div className="products-list">
          <Carousel className="products-list-carousel">
            <CarouselContent>
              {
                links.map((item) => {
                  return (
                    <CarouselItem className="md:basis-1/4" key={item.key} >
                      <ProductCard
                        image={item.image}
                        brand={item.brand}
                        model={item.model}
                      />
                    </CarouselItem>
                  );
                })
              }
            </CarouselContent>
            <CarouselPrevious className="products-list-carousel-button"/>
            <CarouselNext className="products-list-carousel-button"/>
          </Carousel>
        </div>
      </div>
    </section>
  );
}