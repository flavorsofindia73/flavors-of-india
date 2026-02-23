import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- Indo-Chinese Fusion (Non-Veg) ---
export const indoChineseNonVegData: MenuItem[] = [
  {
    id: 103,
    name: "CHICKEN / EGG FRIED RICE",
    description: "Rice fried with vegetables and chicken/eggs in soy sauce",
    price: 5.00,
    category: "Indo-Chinese Fusion",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771612000/CHICKEN_EGG_FRIED_RICE_animkh.webp"),
    vegetarian: false
  },
  {
    id: 104,
    name: "CHICKEN SPRING ROLLS",
    description: "Pan fried rolls with minced / fried chicken inside",
    price: 5.50,
    category: "Indo-Chinese Fusion",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771612000/CHICKEN_SPRING_ROLLS_auypws.webp"),
    vegetarian: false
  },
  {
    id: 105,
    name: "CHICKEN CHOWMEIN",
    description: "Stir fried noodles with al dante vegetables & chicken in soy sauce",
    price: 5.50,
    category: "Indo-Chinese Fusion",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771612000/CHICKEN_CHOWMEIN_jfjbnh.webp"),
    vegetarian: false
  },
  {
    id: 106,
    name: "CHILLI CHICKEN",
    description: "Chunks of battered chicken stir fried with al dante vegetables in ginger thick sauce",
    price: 6.50,
    category: "Indo-Chinese Fusion",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771612000/CHILLI_CHICKEN_rj7ce8.webp"),
    vegetarian: false,
    spicy: true
  }
];