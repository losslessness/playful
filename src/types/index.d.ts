declare type FooterLink = {
  label: string;
  route: string;
}

declare interface CategoryProps {
  icon: string;
  title: string;
}

declare interface ProductProps {
  sale?: boolean;
  image: StaticImageData;
  brand: string;
  model: string;
  pricing: number;
  discount?: number;
}

declare interface FooterListProps {
  title: string;
  links: FooterLink[];
}