declare namespace React {
  function useCallback<T extends (...args: unknown[]) => unknown> (
    callback: T,
    deps: readonly unknown[]
  ): T;
}

declare interface Logo {
  image: StaticImageData;
  title: string;
  slogan: string;
}

declare interface Link {
  label: string;
  route: string;
}

declare interface LinkListProps {
  title: string;
  links: Link[];
}

declare interface Category {
  id: number;
  icon: StaticImageData;
  label: string;
  code: string;
  route: string;
}

declare interface CategoryCardProps {
  icon: string;
  label: string;
}

declare interface Color {
  label: string;
  code: string;
}

declare interface Product {
  id: number;
  category: number;
  image: StaticImageData[];
  brand: string;
  model: string;
  color: string;
  price: number;
  sale: boolean;
  discount: number;
}

declare interface ProductCardProps {
  image: StaticImageData;
  brand: string;
  model: string;
  price: number;
  sale?: boolean;
  discount?: number;
}