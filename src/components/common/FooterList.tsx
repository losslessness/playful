import Link from "next/link";

export default function FooterList({title, links}: FooterListProps) {
  return (
    <div className="footer-content-links-section">
      <h4 className="footer-content-links-section-title">{title}</h4>
      <div className="footer-content-links-section-items">
        {
          links.map((item) => {
            return(
              <div key={item.label}>
                <Link href={item.route}>
                  <p className="footer-content-links-section-item">{item.label}</p>
                </Link>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}