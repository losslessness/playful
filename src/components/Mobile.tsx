"use client";

import Logo from "@/assets/logos/playful-logo.svg";
import { Heart, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Mobile() {
  const links = [{
    label: "Shop",
    route: "/shop",
    active: true
  },
  {
    label: "Discover",
    route: "/discover",
    active: false
  },
  {
    label: "Deals",
    route: "/deals",
    active: false
  },
  {
    label: "Support",
    route: "/support",
    active: false
  }];

  const [open, setOpen] = useState(false);

  return(
    <nav className="mobile">
      {/* Logo */}
      <section>
        <Link href="/" className="mobile-logo">
          <Image
            className="mobile-logo-image"
            src={Logo}
            alt="Playful Logo"
            height={42}
            width={40}
          />
          <h2 className="mobile-logo-title">playful</h2>
        </Link>
      </section>

      {/* Icons */}
      <section>
        <div className="mobile-menu">
          <section>
            <div className="mobile-menu-icons">
              <ul className="mobile-menu-icons-list">
                <li><button><Heart className="mobile-menu-icons-item"/></button></li>
                <li><button><UserRound className="mobile-menu-icons-item"/></button></li>
                <li><button><ShoppingCart className="mobile-menu-icons-item"/></button></li>
                <li><button><Menu className="mobile-menu-icons-item" onClick={() => setOpen(true)}/></button></li>
              </ul>
            </div>
          </section>

        {/* Sheet */}
        {open && (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent className="mobile-menu-sheet" side="right" showCloseButton={false} >  
              <div className="mobile-menu-sheet-container">
                {/* Logo */}
                <Link href="/" className="mobile-logo">
                  <Image
                    className="mobile-logo-image"
                    src={Logo}
                    alt="Playful Logo"
                    height={42}
                    width={40}
                  />
                  <h2 className="mobile-logo-title">playful</h2>
                </Link>

                {/* Exit */}
                <SheetClose>
                  <X className="mobile-menu-item"/>
                </SheetClose>
              </div>

              <div className="mobile-menu-sheet-content">
                {/* Search */}
                <section>
                  <div className="navigation-search">
                      <Search />
                    <input type="text" className="navigation-search-bar" placeholder="Search..."/>
                  </div>
                </section>

                {/* Links */}
                <nav className="mobile-menu-sheet-navigation">
                  {
                    links.map((item) => {
                      return(
                        <SheetClose key={item.route}>
                          <Link
                            href={item.route}
                            key={item.label}
                            className={cn("mobile-menu-sheet-link", {"bg-black": item.active})}
                          >
                            <p className={cn("mobile-menu-sheet-link-label", {"text-white": item.active})}>{item.label}</p>
                          </Link>
                        </SheetClose>
                      );
                    })
                  }
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        )}
        </div>
      </section>
    </nav>
  );
}