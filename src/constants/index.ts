import Logo from "@/assets/logos/playful-logo.svg";
import Keyboard from "@/assets/icons/keyboard.svg";
import Mice from "@/assets/icons/mice.svg";
import Mousepad from "@/assets/icons/mousepad.svg";
import Gamepad from "@/assets/icons/gamepad.svg";
import ProductImage from "@/assets/images/product-image.webp";

export const logo = {
  image: Logo,
  title: "playful",
  slogan: "For those aiming for the top."
};
export const saleLabel = "SALE";

/* Navigation */

export const navigationLinks = [{
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

export const mobileLinks = [{
  label: "Shop",
  route: "/shop",
  active: true
},
{
  label: "Discover",
  route: "/discover",
  active: false
},
{
  label: "Deals",
  route: "/deals",
  active: false
},
{
  label: "Support",
  route: "/support",
  active: false
}];

/* Hero */

export const heroLabels = {
  subtitle: "Pro X2",
  title: "SUPERSTRIKE",
  button: "Shop"
}

/* Categories */

export const categoriesTitle = "Top Categories";
export const categoryLinks = [{
  icon: Keyboard,
  title: "Keyboard"
},
{
  icon: Mice,
  title: "Mouse"
},
{
  icon: Mousepad,
  title: "Mousepad"
},
{
  icon: Gamepad,
  title: "Gamepad"
}];

/* Products */

export const productsTitle = "Best Sellers";
export const productLinks = [{
    sale: true,
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike 1",
    pricing: 179.99,
    discount: 20
  },
  {
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike 2",
    pricing: 179.99
  },
  {
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike 3",
    pricing: 179.99
  },
  {
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike 4",
    pricing: 179.99
  },
  {
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike 5",
    pricing: 179.99
  },
  {
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike 6",
    pricing: 179.99
  },
  {
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike 7",
    pricing: 179.99
  },
  {
    image: ProductImage,
    brand: "Logitech",
    model: "Pro X2 Superstrike 8",
    pricing: 179.99,
}];

/* Footer */

export const playfulTitle = "Playful";
export const playfulLinks = [
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
export const informationLinks = [
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
export const supportLinks = [
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