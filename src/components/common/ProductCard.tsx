import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductCard({image, brand, model}: ProductProps) {
  return (
    <main className="product-card">
      {/* Header */}      
      <div className="product-card-header">
        <p className="product-card-header-sale">SALE</p>
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
          <p className="product-card-footer-pricing-normal">159,99€</p>
          <p className="product-card-footer-pricing-original">179,99€</p>
        </div>
        <button><ShoppingCart className="product-card-footer-cart"/></button>
      </div>
    </main>
  );
}