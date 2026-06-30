"use client";

import { heroSectionLabels } from "@/constants/index";
import { mediaQueryHandler } from "@/lib/utils";
import HeroSectionImage from "@/assets/images/hero-section-image.webp";
import HeroSectionMobileImage from "@/assets/images/hero-section-mobile-image.webp";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const isMobile = mediaQueryHandler(`(max-width: 768px)`);

  return(
    <section>
      {(isMobile || isMobile == undefined) && (
        <main className="hero">
          <Image 
            className="hero-image-mobile"
            src={HeroSectionMobileImage}
            alt="Hero Section Mobile"
            height={1080}
            width={720}
          />

          <div className="hero-cta">
            <div className="hero-cta-labels">
                <h3 className="hero-cta-subtitle">
                  {heroSectionLabels.subtitle}
                </h3>
                <h1 className="hero-cta-title">
                  {heroSectionLabels.title}
                </h1>
                <Link href="/products/1">
                  <button className="hero-cta-button">
                    {heroSectionLabels.button}
                  </button>
                </Link>
            </div>
          </div>
        </main>
      )}

      {(!isMobile || isMobile == undefined) && (
        <main className="hero">
          <Image
            className="hero-image-desktop"
            src={HeroSectionImage}
            alt="Hero Section"
            height={950}
            width={1920}
          />
          
          <div className="hero-cta">
            <div className="hero-cta-labels">
                <h3 className="hero-cta-subtitle">
                  {heroSectionLabels.subtitle}
                </h3>
                <h1 className="hero-cta-title">
                  {heroSectionLabels.title}
                </h1>
                <Link href="/products/1">
                  <button className="hero-cta-button">
                    {heroSectionLabels.button}
                  </button>
                </Link>
            </div>
          </div>
        </main>
      )}
    </section>
  );
}