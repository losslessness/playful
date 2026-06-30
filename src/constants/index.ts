import Logo from "@/assets/logos/playful-logo.svg";
import Keyboard from "@/assets/icons/keyboard.svg";
import Mouse from "@/assets/icons/mouse.svg";
import Mousepad from "@/assets/icons/mousepad.svg";
import Gamepad from "@/assets/icons/gamepad.svg";
import G915XLightspeedBlackImageFront from "@/assets/images/g915-x-lightspeed-black-image-front.webp";
import G915XLightspeedBlackImageBack from "@/assets/images/g915-x-lightspeed-black-image-back.webp";
import G915XLightspeedWhiteImageFront from "@/assets/images/g915-x-lightspeed-white-image-front.webp";
import G915XLightspeedWhiteImageBack from "@/assets/images/g915-x-lightspeed-white-image-back.webp";
import ProX2SuperstrikeImageTop from "@/assets/images/pro-x2-superstrike-image-top.webp";
import ProX2SuperstrikeImageSide from "@/assets/images/pro-x2-superstrike-image-side.webp";
import ProX2SuperstrikeImageComponents from "@/assets/images/pro-x2-superstrike-image-components.webp";
import G305XSuperlightBlackImageTop from "@/assets/images/g305-x-superlight-black-image-top.webp";
import G305XSuperlightBlackImageSide from "@/assets/images/g305-x-superlight-black-image-side.webp";
import G305XSuperlightWhiteImageTop from "@/assets/images/g305-x-superlight-white-image-top.webp";
import G305XSuperlightWhiteImageSide from "@/assets/images/g305-x-superlight-white-image-side.webp";
import G640ImageFront from "@/assets/images/g640-image-front.webp";

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
    route: "/"
  },
  {
    id: 2,
    icon: Mouse,
    label: "Mouse",
    code: "Mouse",
    route: "/"
  },
  {
    id: 3,
    icon: Mousepad,
    label: "Mousepad",
    code: "MOUSEPAD",
    route: "/"
  },
  {
    id: 4,
    icon: Gamepad,
    label: "Gamepad",
    code: "GAMEPAD",
    route: "/"
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
    category: 1,
    image: [G915XLightspeedBlackImageFront, G915XLightspeedBlackImageBack],
    brand: "Logitech",
    model: "G915 X Lightspeed",
    description: "Logitech G915 X LIGHTSPEED TKL delivers iconic speed, accuracy, and customization with a sleek, tenkeyless design. This wireless gaming keyboard features tri-mode connectivity, KEYCONTROL, GL mechanical switches, and LIGHTSYNC RGB.",
    color: "Black",
    options: ["Black", "White"],
    rating: 3.4,
    price: 179.99,
    sale: true,
    discount: 30
  },
  {
    id: 2,
    category: 1,
    image: [G915XLightspeedWhiteImageFront, G915XLightspeedWhiteImageBack],
    brand: "Logitech",
    model: "G915 X Lightspeed",
    description: "Logitech G915 X LIGHTSPEED TKL delivers iconic speed, accuracy, and customization with a sleek, tenkeyless design. This wireless gaming keyboard features tri-mode connectivity, KEYCONTROL, GL mechanical switches, and LIGHTSYNC RGB.",
    color: "White",
    options: ["Black", "White"],
    rating: 3.4,
    price: 179.99,
    sale: true,
    discount: 30
  },
  {
    id: 3,
    category: 2,
    image: [ProX2SuperstrikeImageTop, ProX2SuperstrikeImageSide, ProX2SuperstrikeImageComponents],
    brand: "Logitech",
    model: "Pro X2 Superstrike",
    description: "PRO X2 SUPERSTRIKE is a breakthrough in ultra-low click-latency technology. The revolutionary Haptic Inductive Trigger System (HITS) accelerates click speed with tunable actuation and rapid trigger reset points for both main mouse keys.",
    color: "White",
    options: ["White"],
    rating: 4,
    price: 179.99,
    sale: true,
    discount: 20
  },
  {
    id: 4,
    category: 2,
    image: [G305XSuperlightBlackImageTop, G305XSuperlightBlackImageSide],
    brand: "Logitech",
    model: "G305 X Superlight",
    description: "The classic G305 shape is supercharged with an updated HERO 44K sensor and fused with an agile ~60 g design to deliver the SUPERLIGHT performance promise.",
    color: "Black",
    options: ["Black", "White"],
    rating: 4.5,
    price: 79.99,
    sale: false,
    discount: 0
  },
  {
    id: 5,
    category: 2,
    image: [G305XSuperlightWhiteImageTop, G305XSuperlightWhiteImageSide],
    brand: "Logitech",
    model: "G305 X Superlight",
    description: "The classic G305 shape is supercharged with an updated HERO 44K sensor and fused with an agile ~60 g design to deliver the SUPERLIGHT performance promise.",
    color: "White",
    options: ["Black", "White"],
    rating: 4.5,
    price: 79.99,
    sale: false,
    discount: 0
  },
  {
    id: 6,
    category: 3,
    image: [G640ImageFront],
    brand: "Logitech",
    model: "G640",
    description: "Large size, 400 x 460 mm, for more space and mouse movement. Rubber base stays in place for intense gaming. Surface texture is optimized for Logitech G mice and peak gaming performance.",
    color: "Black",
    options: ["Black"],
    rating: 4.2,
    price: 29.99,
    sale: false,
    discount: 0
  }];

  export const saleLabel = "SALE";

/* Header */

  /* Navigation */

  export const navigationLinks: Link[] = [{
        label: "Shop",
        route: "/products"
      },
      {
        label: "Discover",
        route: "#"
      },
      {
        label: "Deals",
        route: "/deals"
      },
      {
        label: "Support",
        route: "#"
    }];

  export const searchText = "Search...";

  /* Mobile */

  export const mobileLinks: Link[] = [{
    label: "Shop",
    route: "/products"
  },
  {
    label: "Discover",
    route: "#"
  },
  {
    label: "Deals",
    route: "/deals"
  },
  {
    label: "Support",
    route: "#"
  }];

  /* Footer */

  export const playfulTitle = "Playful";
  export const playfulLinks: Link[] = [
    {
      label: "About",
      route: "#"
    },
    {
      label: "Careers",
      route: "#"
    },
    {
      label: "Investors",
      route: "#"
    },
    {
      label: "Press",
      route: "#"
    },
    {
      label: "Sustainability",
      route: "#"
    }
  ];

  export const informationTitle = "Information";
  export const informationLinks: Link[] = [
    {
      label: "Terms of Use",
      route: "#"
    },
    {
      label: "Privacy Policy",
      route: "#"
    },
    {
      label: "Cookie Settings",
      route: "#"
    },
    {
      label: "Payment Methods",
      route: "#"
    },
    {
      label: "Shipping Details",
      route: "#"
    }
  ];

  export const supportTitle = "Support";
  export const supportLinks: Link[] = [
    {
      label: "FAQ",
      route: "#"
    },
    {
      label: "Return Policy",
      route: "#"
    },
    {
      label: "Help Center",
      route: "#"
    },
    {
      label: "Suggestions",
      route: "#"
    },
    {
      label: "Contact Us",
      route: "#"
    }
  ];

  export const copyrightText = "Playful. No rights reserved";

/* Home */

  /* Hero Section */

  export const heroSectionLabels = {
    subtitle: "Pro X2",
    title: "SUPERSTRIKE",
    button: "Shop"
  }

  /* Categories List */

  export const categoriesListTitle: string = "Top Categories";

  /* Products Carousel */

  export const productsCarouselTitle = "Best Sellers";

/* List */

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

  /* Products */

  export const productsTitle = "Products";

/* Page */

  /* Pricing */

  export const pageCurrency = "€";
  export const pageDiscount = pageCurrency + " off";

  /* Colors */

  export const pageColors = "Available Colors";

  /* Cart */

  export const pageCart = "Add to Cart";

  /* Description */

  export const pageDescription = "Description";

  /* Suggetions */

  export const pageSuggestions = "Suggestions";