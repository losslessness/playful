import ProductCard from "@/components/common/ProductCard";
import { products } from "@/constants/index";

export default function Shop() {
  return (
    <main className="relative top-26.5 flex flex-col px-16 py-8 gap-4 z-1">
      <div className="flex flex-between">
        <h4 className="font-semibold text-20">Products</h4>
      </div>

      {/* Products */}
      <div className="grid grid-cols-3 max-h-[calc(100%-106px)] z-1 overflow-scroll max-md:grid-cols-1">
        {
          products.map((item) => {
            return(
              <ProductCard
                key={item?.id}
                sale={item?.sale}
                image={item?.image[0]}
                brand={item?.brand}
                model={item?.model}
                price={item?.price}
                discount={item?.discount}
              />
            );
          })
        }
      </div>
    </main>
  );
}