"use client";

import { cn } from "@/lib/utils";
import { logo, mobileLinks } from "@/constants/index";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function Mobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return(
    <nav className="mobile">
      {/* Logo */}
      <section>
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
                    mobileLinks.map((item) => {
                      const activePage = pathname === item?.route || pathname.startsWith(`${item?.route}`);

                      return(
                        <SheetClose key={item?.route}>
                          <Link
                            href={item?.route}
                            key={item.label}
                            className={cn("mobile-menu-sheet-link", {"bg-black": activePage})}
                          >
                            <p className={cn("mobile-menu-sheet-link-label", {"text-white": activePage})}>{item?.label}</p>
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