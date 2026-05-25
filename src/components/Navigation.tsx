import { logo, navigationLinks, searchText } from "@/constants/index";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return(
    <nav className="navigation">
      {/* Logo */}
      <section>
        <Link href="/" className="navigation-logo">
          <Image
            className="navigation-logo-image"
            src={logo.image}
            alt="Playful Logo"
            height={42}
            width={32}
          />
          <h2 className="navigation-logo-title">{logo.title}</h2>
        </Link>
      </section>

      {/* Links */}
        <section>
          <div className="navigation-links">
              <div className="navigation-links-list">
                {
                  navigationLinks.map((item) => {
                    return(
                        <Link href={item.route} key={item.label} className="navigation-links-item">
                          {item.label}
                        </Link>
                    );
                  })
                }
              </div>
          </div>
        </section>

      {/* Search */}
      <section>
        <div className="navigation-search">
            <Search className="navigation-search-icon" />
          <input type="text" className="navigation-search-bar" placeholder={searchText}/>
        </div>
      </section>

      {/* Icons */}
      <section>
        <div className="navigation-icons">
          <ul className="navigation-icons-list">
            <li><button><Heart className="navigation-icons-item" /></button></li>
            <li><button><UserRound className="navigation-icons-item" /></button></li>
            <li><button><ShoppingCart className="navigation-icons-item" /></button></li>
          </ul>
        </div>
      </section>
    </nav>
  );
}