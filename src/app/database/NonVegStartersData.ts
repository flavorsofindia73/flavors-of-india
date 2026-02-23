import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- NON-VEG STARTER ---
export const nonVegStarters: MenuItem[] = [
  { id: 136, name: "CHICKEN PAKODA", description: "Lumps of boneless chicken battered in gram powder & deep fried spiced", price: 5.00, category: "Non-Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771837563/CHICKEN_PAKODA_ghcnq9.webp"), vegetarian: false, spicy: true },
  { id: 137, name: "CHICKEN SAMOSA (4PCS)", description: "Crispy crust stuffed with minced chicken & onion", price: 4.75, category: "Non-Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771837563/CHICKEN_SAMOSA_4PCS_fjnrvo.webp"), vegetarian: false },
  { id: 138, name: "MUTTON SAMOSA (4PCS)", description: "Crispy crust stuffed with minced mutton & onion", price: 6.00, category: "Non-Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771837563/MUTTON_SAMOSA_4PCS_pfa5t3.webp"), vegetarian: false },
  { id: 139, name: "CHICKEN TIKKA ROLL", description: "Roasted chicken spiced & rolled in Indian bread", price: 5.50, category: "Non-Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771837563/CHICKEN_TIKKA_ROLL_ek5qaq.webp"), vegetarian: false, spicy: true, popular: true },
  { id: 140, name: "TALI MACHILI / FISH FRIED", description: "Marinated sea bass pan fried with green sauce", price: 6.50, category: "Non-Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771837564/TALI_MACHILI_FISH_FRIED_xbbmr4.webp"), vegetarian: false },
  { id: 141, name: "BOMBAY CHICKEN SALAD", description: "Shreds of chicken served with green pepper, spring onion in white sauce", price: 5.00, category: "Non-Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771837563/BOMBAY_CHICKEN_SALAD_mfnqzt.webp"), vegetarian: false }
];