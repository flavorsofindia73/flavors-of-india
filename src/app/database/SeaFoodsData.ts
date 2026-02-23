import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- SEA FOODS ---
export const seaFoodsMenu: MenuItem[] = [
  { id: 152, name: "FISH CURRY", description: "Fish cooked in specially prepared spicy curry", price: 6.00, category: "Sea Foods", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840142/FISH_CURRY_gdisqv.webp"), vegetarian: false, spicy: true },

  { id: 153, name: "FISH TIKKA MASALA", description: "Pcs of roasted fish fillet cooked in spicy gravy", price: 6.75, category: "Sea Foods", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840139/FISH_TIKKA_MASALA_hss3jf.webp"), vegetarian: false, spicy: true },

  { id: 154, name: "PRAWN CURRY", description: "Fresh prawns cooked in tomato curry", price: 6.50, category: "Sea Foods", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840140/PRAWN_CURRY_wgotti.webp"), vegetarian: false },

  { id: 155, name: "PRAWN MASALA", description: "Fresh water prawns cooked with tomatoes, onions & spices", price: 7.50, category: "Sea Foods", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840140/PRAWN_MASALA_mtmi0v.webp"), vegetarian: false, popular: true }

];