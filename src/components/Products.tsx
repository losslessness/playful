import { productsTitle, products } from "@/constants/index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import ProductCard from "@/components/common/ProductCard";

export default function Products() {
  return (
    <section>
      <div className="products">
        <h1 className="products-title">{productsTitle}</h1>
        <div className="products-list">
          <Carousel className="products-list-carousel">
            <CarouselContent>
              {
                products.map((item) => {
                  return (
                    <CarouselItem className="md:basis-1/4" key={item?.id}>
                      <ProductCard
                        sale={item?.sale}
                        image={item?.image[0]}
                        brand={item?.brand}
                        model={item?.model}
                        price={item?.price}
                        discount={item?.discount}
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