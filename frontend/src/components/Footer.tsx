import {
  logo,
  playfulTitle,
  playfulLinks,
  informationTitle,
  informationLinks,
  supportTitle,
  supportLinks,
  copyrightText
} from "@/constants/index";
import Facebook from "@/assets/logos/facebook-logo.svg";
import Instagram from "@/assets/logos/instagram-logo.svg";
import X from "@/assets/logos/x-logo.svg";
import FooterList from "@/components/common/FooterList";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date();

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-branding">
          <div className="footer-content-branding-logo">
              <Link href="/" className="footer-content-branding-logo-container">
                <Image
                  className="footer-content-branding-logo-image"
                  src={logo.image}
                  alt="Playful Logo"
                  height={42}
                  width={32}
                />
                <h2 className="footer-content-branding-logo-title">{logo.title}</h2>
              </Link>
            <p className="footer-content-branding-logo-slogan">{logo.slogan}</p>
          </div>
          <div className="footer-content-branding-socials">
            <Link href="#" className="footer-content-branding-socials-logo">
              <Image
                className="size-6"
                src={Facebook}
                alt="Facebook Logo"
                height={24}
                width={24}
              />
            </Link>
            <Link href="#" className="footer-content-branding-socials-logo">
              <Image
                className="size-6"
                src={Instagram}
                alt="Instagram Logo"
                height={24}
                width={24}
              />
            </Link>
            <Link href="#" className="footer-content-branding-socials-logo">
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
          <FooterList title={playfulTitle} links={playfulLinks} />
          <FooterList title={informationTitle} links={informationLinks} />
          <FooterList title={supportTitle} links={supportLinks} />
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright-text">&copy; {date.getFullYear()} {copyrightText}</p>
      </div>
    </div>
  );
}