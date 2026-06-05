import { Heart, ShoppingCart } from "lucide-react";
import { saleLabel } from "@/constants/index";
import Image from "next/image";

export default function ProductCard({sale, image, brand, model, price, discount}: ProductCardProps) {
  return (
    <main className="product-card">
      {/* Header */}      
      <div className="product-card-header">
        <p className={(sale && discount) ? "product-card-header-sale" : "product-card-header-no-sale"}>
          {saleLabel}
        </p>
        <button><Heart className="product-card-header-favorite"/></button>
      </div>
      {/* Main */}
      <Image
        className="product-card-main-image"
        src={image}
        alt={model}
        height={300}
        width={300}
      />
      <div>
        <h4 className="product-card-main-title-brand">{brand}</h4>
        <h2 className="product-card-main-title-model">{model}</h2>
      </div>
      {/* Footer */}
      <div className="product-card-footer">
        <div className="product-card-footer-pricing">
          {(sale && discount) ?
            <p className="product-card-footer-pricing-normal">{(sale && discount) && (price - discount)}€</p> :
            <p className="product-card-footer-pricing-normal">{price}€</p>
          }
          {(sale && discount) &&
            <p className="product-card-footer-pricing-original">{price}€</p>
          }
        </div>
        <button><ShoppingCart className="product-card-footer-cart"/></button>
      </div>
    </main>
  );
}