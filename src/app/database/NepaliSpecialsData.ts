import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- NEPALI SPECIALS ---
export const nepaliSpecials: MenuItem[] = [
  {
    id: 132,
    name: "CHICKEN JHOL MO:MO (10PCS)",
    description: "Nepali chicken dumplings served in a traditional spicy tomato-based broth (Jhol).",
    price: 6.50,
    category: "Nepali Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771770958/CHICKEN_JHOL_MOMO_10PCS_czuykq.webp"),
    vegetarian: false,
    spicy: true
  },
  {
    id: 133,
    name: "CHICKEN MO:MO (10PCS)",
    description: "Steamed chicken dumplings served with a spicy dipping sauce.",
    price: 6.00,
    category: "Nepali Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771770958/CHICKEN_MOMO_10PCS_ew7hko.webp"),
    vegetarian: false
  },
  {
    id: 134,
    name: "AALOO VADA",
    description: "Spiced potato patties deep-fried and served with chutneys.",
    price: 5.00,
    category: "Nepali Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771770958/AALOO_VADA_id9ysv.webp"),
    vegetarian: true
  },
  {
    id: 135,
    name: "VEGETABLE MO:MO (10PCS)",
    description: "Steamed dumplings filled with finely chopped seasonal vegetables.",
    price: 5.00,
    category: "Nepali Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771770958/VEGETABLE_MOMO_10PCS_vxismk.webp"),
    vegetarian: true
  }
];