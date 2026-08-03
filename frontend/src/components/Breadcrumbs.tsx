import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({links}: {links: Link[]}) {
  return(
    <nav className="breadcrumbs">
      <ol className="breadcrumbs-list">
        {
          links?.map((link, index) => (
            <li className="breadcrumbs-item" key={index}>
              <a
                className="breadcrumbs-item-link"
                href={link?.route}
              >
                {link?.label}
              </a>
              {
                (links?.length - 1) !== index && (
                  <ChevronRight />
                )
              }
            </li>
          ))

        }
      </ol>
    </nav>
  );
}