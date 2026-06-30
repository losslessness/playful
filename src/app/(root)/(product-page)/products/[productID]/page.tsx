// @ts-nocheck

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  categories,
  pageCart,
  pageColors,
  pageCurrency,
  pageDescription,
  pageDiscount,
  pageSuggestions,
  products
} from "@/constants/index";
import { mediaQueryHandler } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { CreditCard, ShoppingCart, Repeat } from "lucide-react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import StarRating from "@/components/StarRating";
import AvailableColors from "@/components/AvailableColors";
import ProductCard from "@/components/common/ProductCard";

export default function ProductPage({productID}: {productID: number}) {
  const isMobile = mediaQueryHandler(`(max-width: 1024px)`);
  const productInfo = products[productID - 1];
  const [imageDisplay, setImageDisplay] = useState(productInfo?.image[0]);
  const [breadcrumbLinks, setBreadcrumbLinks] = useState([
    {label: "Home", route: "/"},
    {label: "Shop", route: "/products"}
  ]);
  const productCategory = useMemo(() => {
    return categories?.find((category) => category?.id === productInfo?.category)
  }, [categories, productInfo]);
  const productSuggestions = useMemo(() => {
    return products?.filter((product) => (product !== productInfo) && (product?.category === productInfo?.category))
  }, [products, productInfo]);
  const saleValidation = productInfo?.sale && (productInfo?.price > 0) && (productInfo?.discount > 0) && (productInfo?.discount < productInfo?.price);
  const shoppingInfo = [
    {
      icon: <CreditCard />,
      info: "Secure Payment"
    },
    {
      icon: <Repeat />,
      info: "Free Shipping & Returns"
    }
  ];

  useEffect(() => {
    const pathLink = {
      label: productCategory?.label,
      route: productCategory?.route
    };

    setBreadcrumbLinks([...breadcrumbLinks, pathLink]);
  }, []);

  return (
    <section>
      <div className="product-page">
        <div className="product-page-layout">
          {/* Mobile */}
          {(isMobile != undefined && isMobile) && (
            <div className="product-page-content">
              <main className="product-page-main-mobile">
                {/* Breadcrumbs */}
                <Breadcrumbs links={breadcrumbLinks} />

                <div className="product-page-info-section">
                  {/* Product */}
                  <div className="product-page-info-product">
                    <h3 className="product-page-info-product-brand">{productInfo?.brand}</h3>
                    <h1 className="product-page-info-product-model">{productInfo?.model}</h1>
                  </div>

                  {/* Rating */}
                  <div className="product-page-info-rating">
                    <StarRating rating={productInfo?.rating} />
                    <p className="product-page-info-rating-value">{productInfo?.rating.toFixed(1)}</p>
                  </div>

                  {/* Pricing */}
                  <div className="product-page-info-pricing">
                    {
                      saleValidation ?
                      <h3 className="product-page-info-pricing-normal">{(productInfo?.price - productInfo?.discount).toFixed(2) + pageCurrency}</h3> :
                      <h3 className="product-page-info-pricing-normal">{productInfo?.price.toFixed(2) + pageCurrency}</h3>
                    }
                    {
                      saleValidation && 
                      <div className="product-page-info-pricing-sale">
                        <h3 className="product-page-info-pricing-original">{productInfo?.price.toFixed(2)}€</h3>
                        <h3 className="product-page-info-pricing-discount">{productInfo?.discount + pageDiscount}</h3>
                      </div>
                    }
                  </div>
                </div>

                <div className="product-page-main-mobile-gallery">
                  <div className="product-page-gallery-image">
                    <Image
                      src={imageDisplay}
                      alt={productInfo?.model}
                      height="auto"
                      width="auto"
                    />
                  </div>

                  <div className="product-page-gallery-list">
                    {
                      productInfo?.image?.map((item, index) => {
                        return (
                          <button
                            className="product-page-gallery-list-button"
                            key={index}
                            onClick={() => {setImageDisplay(item)}}
                          >
                            <Image
                              className="product-page-gallery-list-image"
                              src={item}
                              alt={"Image " + {index}}
                              height="auto"
                              width="auto"
                            />
                          </button>
                        );
                      })
                    }
                  </div>
                </div>

                <div className="product-page-info-section">
                  {/* Colors */}
                  <div className="product-page-info-colors">
                    <h3 className="product-page-info-colors-title">{pageColors}</h3>
                    <AvailableColors color={productInfo?.color} options={productInfo?.options} />
                  </div>

                  {/* Cart */}
                  <div className="product-page-info-cart">
                    <button className="product-page-info-cart-button">
                      <ShoppingCart className="product-page-info-cart-icon"/>
                      <p className="product-page-info-cart-label">{pageCart}</p>
                    </button>
                  </div>
                </div>

                {/* Shopping Info */}
                <div className="product-page-info-shopping">
                  {
                    shoppingInfo?.map((item, index) => {
                      return(
                        <div className="product-page-info-shopping-item" key={index}>
                          <div className="product-page-info-shopping-icon">
                            {item?.icon}
                          </div>
                          <p className="product-page-info-shopping-label">{item?.info}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </main>
              
              {/* Description */}
              <div className="product-page-description">
                <h1 className="product-page-description-title">{pageDescription}</h1>
                <p className="product-page-description-copy">{productInfo?.description}</p>
              </div>

              {/* Suggestions */}
              <div className="product-page-suggestions">
                <h1 className="product-page-suggestions-title">{pageSuggestions}</h1>
                                <div className="products-list">
                  <Carousel className="products-list-carousel">
                    <CarouselContent>
                      {
                        productSuggestions?.map((item) => {
                          return (
                            <CarouselItem className="md:basis-1/4" key={item?.id}>
                              <ProductCard
                                id={item?.id}
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
            </div>
          )}

          {/* Desktop */}
          {(isMobile != undefined && !isMobile) && (
            <div className="product-page-content">
              <main className="product-page-main-desktop">
                <div className="product-page-main-desktop-gallery">
                  <div className="product-page-gallery-list">
                    {
                      productInfo?.image?.map((item, index) => {
                        return (
                          <button
                            className="product-page-gallery-list-button"
                            key={index}
                            onClick={() => {setImageDisplay(item)}}
                          >
                            <Image
                              className="product-page-gallery-list-image"
                              src={item}
                              alt={"Image " + {index}}
                              height="auto"
                              width="auto"
                            />
                          </button>
                        );
                      })
                    }
                  </div>

                  <div className="product-page-gallery-image">
                    <Image
                      src={imageDisplay}
                      alt={productInfo?.model}
                      height="auto"
                      width="auto"
                    />
                  </div>
                </div>

                <div className="product-page-main-desktop-info">
                  {/* Breadcrumbs */}
                  <Breadcrumbs links={breadcrumbLinks} />

                  <main className="product-page-info-main">
                    {/* Product */}
                    <div className="product-page-info-product">
                      <h3 className="product-page-info-product-brand">{productInfo?.brand}</h3>
                      <h1 className="product-page-info-product-model">{productInfo?.model}</h1>
                    </div>

                    {/* Rating */}
                    <div className="product-page-info-rating">
                      <StarRating rating={productInfo?.rating} />
                      <p className="product-page-info-rating-value">{productInfo?.rating.toFixed(1)}</p>
                    </div>

                    {/* Pricing */}
                    <div className="product-page-info-pricing">
                      {
                        saleValidation ?
                        <h3 className="product-page-info-pricing-normal">{(productInfo?.price - productInfo?.discount).toFixed(2) + pageCurrency}</h3> :
                        <h3 className="product-page-info-pricing-normal">{productInfo?.price.toFixed(2) + pageCurrency}</h3>
                      }
                      {
                        saleValidation && 
                        <div className="product-page-info-pricing-sale">
                          <h3 className="product-page-info-pricing-original">{productInfo?.price.toFixed(2)}€</h3>
                          <h3 className="product-page-info-pricing-discount">{productInfo?.discount + pageDiscount}</h3>
                        </div>
                      }
                    </div>

                    {/* Colors */}
                    <div className="product-page-info-colors">
                      <h3 className="product-page-info-colors-title">{pageColors}</h3>
                      <AvailableColors color={productInfo?.color} options={productInfo?.options} />
                    </div>

                    {/* Cart */}
                    <div className="product-page-info-cart">
                      <button className="product-page-info-cart-button">
                        <ShoppingCart className="product-page-info-cart-icon"/>
                        <p className="product-page-info-cart-label">{pageCart}</p>
                      </button>
                    </div>
                  </main>
                  
                  {/* Shopping Info */}
                  <div className="product-page-info-shopping">
                    {
                      shoppingInfo?.map((item, index) => {
                        return(
                          <div className="product-page-info-shopping-item" key={index}>
                            <div className="product-page-info-shopping-icon">
                              {item?.icon}
                            </div>
                            <p className="product-page-info-shopping-label">{item?.info}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </main>

              {/* Description */}
              <div className="product-page-description">
                <h1 className="product-page-description-title">{pageDescription}</h1>
                <p className="product-page-description-copy">{productInfo?.description}</p>
              </div>

              {/* Suggestions */}
              {productSuggestions.length !== 0 &&
                <div className="product-page-suggestions">
                  <h1 className="product-page-suggestions-title">{pageSuggestions}</h1>
                  <div className="products-list">
                    <Carousel className="products-list-carousel">
                      <CarouselContent>
                        {
                          productSuggestions?.map((item) => {
                            return (
                              <CarouselItem className="md:basis-1/4" key={item?.id}>
                                <ProductCard
                                  id={item?.id}
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
              }
            </div>
          )}
        </div>
      </div>
    </section>
  );
}