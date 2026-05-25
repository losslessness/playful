"use client";

import HeroSection from "@/assets/images/hero-section.webp";
import HeroSectionMobile from "@/assets/images/hero-section-mobile.webp";
import Image from "next/image";
import { mediaQueryHandler } from "@/lib/utils";

export default function Hero() {
  const isMobile = mediaQueryHandler(`(max-width: 768px)`);
  const labels = {
    subtitle: "Pro X2",
    title: "SUPERSTRIKE",
    button: "Shop"
  }

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
                  {labels.subtitle}
                </h3>
                <h1 className="hero-cta-title">
                  {labels.title}
                </h1>
                <button className="hero-cta-button">
                  {labels.button}
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
                  {labels.subtitle}
                </h3>
                <h1 className="hero-cta-title">
                  {labels.title}
                </h1>
                <button className="hero-cta-button">
                  {labels.button}
                </button>
            </div>
          </div>
        </main>
      )}
    </section>
  );
}