"use client";

import { logo, products, productsTitle } from "@/constants/index";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import { mediaQueryHandler } from "@/lib/utils";
import { ListFilter, X } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/common/ProductCard";
import Image from "next/image";
import Link from "next/link";
import Filter from "@/components/Filter";

export default function Shop() {
  const [open, setOpen] = useState(false);
  const isMobile = mediaQueryHandler(`(max-width: 1280px)`);

  return (
    <main className="products-page">
      <div className="products-page-header">
        <h4 className="products-page-header-title">{productsTitle}</h4>
        <button><ListFilter className="products-page-header-icon" size={20} onClick={() => setOpen(true)}/></button>
      </div>

      {/* Sheet */}
      {open && (
          <Sheet open={isMobile && open} onOpenChange={setOpen}>
            <SheetContent className="mobile-menu-sheet" side="right" showCloseButton={false}>  
              <div className="mobile-menu-sheet-container">
                {/* Logo */}
                <SheetClose>
                  <Link href="/" className="mobile-logo">
                    <Image
                      className="mobile-logo-image"
                      src={logo.image}
                      alt="Playful Logo"
                      height={42}
                      width={40}
                    />
                    <h2 className="mobile-logo-title">{logo.title}</h2>
                  </Link>
                </SheetClose>

                {/* Exit */}
                <SheetClose>
                  <X className="mobile-menu-exit-item"/>
                </SheetClose>
              </div>
              <div className="mobile-menu-sheet-content">
                {/* Filter */}
                <Filter device="Mobile"/>
              </div>
            </SheetContent>
            </Sheet>
      )}

      {/* Products */}
      <div className="products-page-grid">
        {
          products.map((item) => {
            return(
              <ProductCard
                key={item?.id}
                id={item?.id}
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