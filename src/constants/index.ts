import Logo from "@/assets/logos/playful-logo.svg";
import Keyboard from "@/assets/icons/keyboard.svg";
import Mouse from "@/assets/icons/mouse.svg";
import Mousepad from "@/assets/icons/mousepad.svg";
import Gamepad from "@/assets/icons/gamepad.svg";
import ProductImage from "@/assets/images/product-image.webp";

/* Root */

  /* Logo */

  export const logo: Logo = {
    image: Logo,
    title: "playful",
    slogan: "For those aiming for the top."
  };

  /* Categories */

  export const categories: Category[] = [{
    id: 1,
    icon: Keyboard,
    label: "Keyboard",
    code: "KEYBOARD",
    route: "/keyboard"
  },
  {
    id: 2,
    icon: Mouse,
    label: "Mouse",
    code: "Mouse",
    route: "/mouse"
  },
  {
    id: 3,
    icon: Mousepad,
    label: "Mousepad",
    code: "MOUSEPAD",
    route: "/mousepad"
  },
  {
    id: 4,
    icon: Gamepad,
    label: "Gamepad",
    code: "GAMEPAD",
    route: "/gamepad"
  }];

  /* Color */

  export const colors: Color[] = [
      {
        label: "black",
        code: "oklch(0 0 0)"
      },
      {
        label: "gray",
        code: "oklch(0.5 0 0)"
      },
      {
        label: "white",
        code: "oklch(1 0 0)"
      },
      {
        label: "blue",
        code: "oklch(0.5 0.26 264)"
      },
      {
        label: "purple",
        code: "oklch(0.55 0.25 320)"
      },
      {
        label: "green",
        code: "oklch(0.87 0.23 142)"
      },
      {
        label: "yellow",
        code: "oklch(0.92 0.20 105)"
      },
      {
        label: "orange",
        code: "oklch(0.79 0.19 69)"
      },
      {
        label: "red",
        code: "oklch(0.63 0.25 29.5)"
      },
      {
        label: "pink",
        code: "oklch(0.87 0.07 7)"
  }];

  /* Products */

  export const products: Product[] = [{
    id: 1,
    category: 2,
    image: [ProductImage],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    color: "White",
    price: 179.99,
    sale: true,
    discount: 20
  },
  {
    id: 2,
    category: 2,
    image: [ProductImage],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    color: "White",
    price: 179.99,
    sale: false,
    discount: 0
  },
  {
    id: 3,
    category: 2,
    image: [ProductImage],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    color: "White",
    price: 179.99,
    sale: true,
    discount: 40
  },
  {
    id: 4,
    category: 2,
    image: [ProductImage],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    color: "White",
    price: 179.99,
    sale: false,
    discount: 0
  },
  {
    id: 5,
    category: 2,
    image: [ProductImage],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    color: "White",
    price: 179.99,
    sale: false,
    discount: 0 
  },
  {
    id: 6,
    category: 2,
    image: [ProductImage],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    color: "White",
    price: 179.99,
    sale: true,
    discount: 60 
  },
  {
    id: 7,
    category: 2,
    image: [ProductImage],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    color: "White",
    price: 179.99,
    sale: true,
    discount: 80 
  },
  {
    id: 8,
    category: 2,
    image: [ProductImage],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    color: "White",
    price: 179.99,
    sale: false,
    discount: 0
  }];

  export const saleLabel = "SALE";

/* Header */

  /* Navigation */

  export const navigationLinks: Link[] = [{
        label: "Shop",
        route: "/shop"
      },
      {
        label: "Discover",
        route: "/discover"
      },
      {
        label: "Deals",
        route: "/deals"
      },
      {
        label: "Support",
        route: "/support"
    }];

  export const searchText = "Search...";

  /* Mobile */

  export const mobileLinks: Link[] = [{
    label: "Shop",
    route: "/shop"
  },
  {
    label: "Discover",
    route: "/discover"
  },
  {
    label: "Deals",
    route: "/deals"
  },
  {
    label: "Support",
    route: "/support"
  }];

  /* Footer */

  export const playfulTitle = "Playful";
  export const playfulLinks: Link[] = [
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

  export const informationTitle = "Information";
  export const informationLinks: Link[] = [
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

  export const supportTitle = "Support";
  export const supportLinks: Link[] = [
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

  export const copyrightText = "Playful. No rights reserved";

/* Home */

  /* Hero */

  export const heroLabels = {
    subtitle: "Pro X2",
    title: "SUPERSTRIKE",
    button: "Shop"
  }

  /* Categories */

  export const categoriesTitle: string = "Top Categories";

  /* Products */

  export const productsTitle = "Best Sellers";

/* Filter */

  export const filterTitle = "Filters";

  /* Categories */

  export const filterCategories = "Categories";

  /* Price */

  export const filterPrice = "Price";
  export const filterCurrency = "€";

  /* Colors */

  export const filterColors = "Colors";

  /* Clear */

  export const filterClear = "Clear";