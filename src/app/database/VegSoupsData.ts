import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

export const vegSoups: MenuItem[] = [
  {
    id: 156,
    name: "LENTIL SOUP",
    description: "Delicately simmered yellow (moong) lentils served with herbs",
    price: 2.25,
    category: "Shorba / Soups (Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857972/LENTIL_SOUP_vjl5re.webp"),
    vegetarian: true
  },
  {
    id: 157,
    name: "VEGETABLE SOUP",
    description: "Cabbage and green peas minted and served with herbs",
    price: 2.50,
    category: "Shorba / Soups (Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857972/VEGETABLE_SOUP_jygqtb.webp"),
    vegetarian: true
  },
  {
    id: 158,
    name: "VEGETABLE HOT & SOUR SOUP",
    description: "Freshly boiled vegetable shreds prepared with deep fried ginger garlic, served in pepper spices and herbs",
    price: 3.25,
    category: "Shorba / Soups (Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857974/SOUR_SOUP_vmdgmb.webp"),
    vegetarian: true,
    spicy: true
  },
  {
    id: 159,
    name: "TOMATO SOUP",
    description: "Fresh thick tomato soup spiced or buttered",
    price: 2.75,
    category: "Shorba / Soups (Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857975/TOMATO_SOUP_rz1ijg.webp"),
    vegetarian: true
  },
  {
    id: 160,
    name: "PALAK SOUP",
    description: "Smooth spinach cooked with cream and Indian spiced",
    price: 2.25,
    category: "Shorba / Soups (Veg)",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857973/PALAK_SOUP_mfmmwo.webp"),
    vegetarian: true
  }
];