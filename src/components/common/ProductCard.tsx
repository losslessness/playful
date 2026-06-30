import { Heart, ShoppingCart } from "lucide-react";
import { saleLabel } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({id, sale, image, brand, model, price, discount}: ProductCardProps) {
  const saleValidation = sale && (price > 0) && (discount > 0) && (discount < price);

  return (
    <main className="product-card">
      {/* Header */}      
      <div className="product-card-header">
        <p className={saleValidation ? "product-card-header-sale" : "product-card-header-no-sale"}>
          {saleLabel}
        </p>
        <button><Heart className="product-card-header-favorite"/></button>
      </div>
      {/* Main */}
      <Link href={`/products/${id}`}>
        <Image
          className="product-card-main-image"
          src={image}
          alt={model}
          height={300}
          width={300}
        />
      </Link>
      <div>
        <h4 className="product-card-main-title-brand">{brand}</h4>
        <h2 className="product-card-main-title-model">{model}</h2>
      </div>
      {/* Footer */}
      <div className="product-card-footer">
        <div className="product-card-footer-pricing">
          {saleValidation ?
            <p className="product-card-footer-pricing-normal">{saleValidation && (price - discount).toFixed(2)}€</p> :
            <p className="product-card-footer-pricing-normal">{price.toFixed(2)}€</p>
          }
          {saleValidation &&
            <p className="product-card-footer-pricing-original">{price.toFixed(2)}€</p>
          }
        </div>
        <button><ShoppingCart className="product-card-footer-cart"/></button>
      </div>
    </main>
  );
}