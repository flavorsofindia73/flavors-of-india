import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

 export const nonVegSoups: MenuItem[] = [
  {
    id: 161,
    name: "CHICKEN SWEET CORN SOUP",
    description: "Freshly boiled chicken shreds prepared with herbs",
    price: 2.75,
    category: "Shorba / Soups (Non-Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838044/CHICKEN_SWEET_CORN_SOUP_szxrbf.webp"),
    vegetarian: false
  },
  {
    id: 162,
    name: "MULLIGATAWNY SOUP",
    description: "Chicken, lentil & vegetables soup enriched with spices & cream",
    price: 3.00,
    category: "Shorba / Soups (Non-Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838044/MULLIGATAWNY_SOUP_lqnrg8.webp"),
    vegetarian: false
  },
  {
    id: 163,
    name: "CHICKEN SOUP",
    description: "Freshly boiled chicken shreds prepared with herbs",
    price: 2.50,
    category: "Shorba / Soups (Non-Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838044/CHICKEN_SOUP_ywq8ba.webp"),
    vegetarian: false
  },
  {
    id: 164,
    name: "CHICKEN HOT & SOUR SOUP",
    description: "Freshly boiled chicken shreds prepared with deep fried ginger garlic, served in pepper, spices and herbs",
    price: 3.00,
    category: "Shorba / Soups (Non-Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838044/CHICKEN_HOT_SOUR_SOUP_upf9ex.webp"),
    vegetarian: false,
    spicy: true
  },
  {
    id: 165,
    name: "CHICKEN TALLUMEN SOUR SOUP",
    description: "Freshly boiled chicken, noodles, Egg shreds prepared with pepper spices herbs",
    price: 3.00,
    category: "Shorba / Soups (Non-Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838043/CHICKEN_TALLUMEN_SOUR_SOUP_zkiwnc.webp"),
    vegetarian: false
  },
  {
    id: 166,
    name: "CHICKEN MANCHOW SOUP",
    description: "Spicy and hot chinese soup made up of chopped mixed vegetables served with fried noodles",
    price: 2.75,
    category: "Shorba / Soups (Non-Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838044/CHICKEN_MANCHOW_SOUP_ogjydi.webp"),
    vegetarian: false,
    spicy: true
  }
];