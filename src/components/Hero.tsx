"use client";

import { heroLabels } from "@/constants/index";
import { mediaQueryHandler } from "@/lib/utils";
import HeroSection from "@/assets/images/hero-section.webp";
import HeroSectionMobile from "@/assets/images/hero-section-mobile.webp";
import Image from "next/image";

export default function Hero() {
  const isMobile = mediaQueryHandler(`(max-width: 768px)`);

  return(
    <section>
      {(isMobile || isMobile == undefined) && (
        <main className="hero">
          <Image 
            className="hero-image-mobile"
            src={HeroSectionMobile}
            alt="Hero Section Mobile"
            height={1080}
            width={720}
          />

          <div className="hero-cta">
            <div className="hero-cta-labels">
                <h3 className="hero-cta-subtitle">
                  {heroLabels.subtitle}
                </h3>
                <h1 className="hero-cta-title">
                  {heroLabels.title}
                </h1>
                <button className="hero-cta-button">
                  {heroLabels.button}
                </button>
            </div>
          </div>
        </main>
      )}

      {(!isMobile || isMobile === undefined) && (
        <main className="hero">
          <Image
            className="hero-image-desktop"
            src={HeroSection}
            alt="Hero Section"
            height={950}
            width={1920}
          />
          
          <div className="hero-cta">
            <div className="hero-cta-labels">
                <h3 className="hero-cta-subtitle">
                  {heroLabels.subtitle}
                </h3>
                <h1 className="hero-cta-title">
                  {heroLabels.title}
                </h1>
                <button className="hero-cta-button">
                  {heroLabels.button}
                </button>
            </div>
          </div>
        </main>
      )}
    </section>
  );
}