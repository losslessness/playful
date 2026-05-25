import Logo from "@/assets/logos/playful-logo.svg";
import Facebook from "@/assets/logos/facebook-logo.svg";
import Instagram from "@/assets/logos/instagram-logo.svg";
import X from "@/assets/logos/x-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const playfulLinks = [
    {
      label: "About",
      route: "/about",
    },
    {
      label: "Careers",
      route: "/careers",
    },
    {
      label: "Investors",
      route: "/investors",
    },
    {
      label: "Press",
      route: "/press",
    },
    {
      label: "Sustainability",
      route: "/sustainability",
    }
  ];
  const informationLinks = [
    {
      label: "Terms of Use",
      route: "/terms-of-use",
    },
    {
      label: "Privacy Policy",
      route: "/privacy-policy",
    },
    {
      label: "Cookie Settings",
      route: "/cookie-settings",
    },
    {
      label: "Payment Methods",
      route: "/payment-methods",
    },
    {
      label: "Shipping Details",
      route: "/shipping-details",
    }
  ];
  const supportLinks = [
    {
      label: "FAQ",
      route: "/faq"
    },
    {
      label: "Return Policy",
      route: "/return-policy"
    },
    {
      label: "Help Center",
      route: "/help-center"
    },
    {
      label: "Suggestions",
      route: "/suggestions"
    },
    {
      label: "Contact Us",
      route: "/contact-us"
    }
  ];
  const date = new Date();

  return (
    <main className="footer">
      <div className="footer-content">
        <div className="footer-content-branding">
          <div className="footer-content-branding-logo">
              <Link href="/" className="footer-content-branding-logo-container">
                <Image
                  className="footer-content-branding-logo-image"
                  src={Logo}
                  alt="Playful Logo"
                  height={42}
                  width={32}
                />
                <h2 className="footer-content-branding-logo-title">playful</h2>
              </Link>
            <p className="footer-content-branding-logo-slogan">For those aiming for the top.</p>
          </div>
          <div className="footer-content-branding-socials">
            <Link href="/" className="footer-content-branding-socials-logo">
              <Image
                className="size-6"
                src={Facebook}
                alt="Facebook Logo"
                height={24}
                width={24}
              />
            </Link>
            <Link href="/" className="footer-content-branding-socials-logo">
              <Image
                className="size-6"
                src={Instagram}
                alt="Instagram Logo"
                height={24}
                width={24}
              />
            </Link>
            <Link href="/" className="footer-content-branding-socials-logo">
              <Image
                className="size-5"
                src={X}
                alt="X Logo"
                height={24}
                width={24}
              />
            </Link>
          </div>
        </div>
        <div className="footer-content-links">
          <div className="footer-content-links-section">
            <h4 className="footer-content-links-section-title">Playful</h4>
            <div className="footer-content-links-section-items">
              {
                playfulLinks.map((item) => {
                  return(
                    <Link href={item.route} key={item.label}>
                      <p className="footer-content-links-section-item">{item.label}</p>
                    </Link>
                  );
                }) 
              }
            </div>
          </div>
          <div className="footer-content-links-section">
            <h4 className="footer-content-links-section-title">Information</h4>
            <div className="footer-content-links-section-items">
              {
                informationLinks.map((item) => {
                  return(
                    <Link href={item.route} key={item.label}>
                      <p className="footer-content-links-section-item">{item.label}</p>
                    </Link>
                  );
                }) 
              }
            </div>
          </div>
          <div className="footer-content-links-section">
            <h4 className="footer-content-links-section-title">Support</h4>
            <div className="footer-content-links-section-items">
              {
                supportLinks.map((item) => {
                  return(
                    <Link href={item.route} key={item.label}>
                      <p className="footer-content-links-section-item">{item.label}</p>
                    </Link>
                  );
                }) 
              }
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-text">&copy; {date.getFullYear()} Playful. No rights reserved.</p>
      </div>
    </main>
  );
}