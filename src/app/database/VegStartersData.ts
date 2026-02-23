import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- Veg Starters ---
export const vegStarters: MenuItem[] = [
  { id: 176, name: "MASALA PAPAD", description: "Papad lightly roasted & served with onions & tomatoes", price: 2.50, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857312/MASALA_PAPAD_jcj41y.webp"), vegetarian: true },

  { id: 177, name: "VEGGIE ROLL", description: "Cottage cheese & veggies spiced and rolled in Indian bread", price: 4.75, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857301/VEGGIE_ROLL_girpzl.webp"), vegetarian: true, spicy: true },

  { id: 178, name: "MIX BHAJIYAS ( PAKODA)", description: "Deep fried cauliflower & potatoes battered in thick chick pea flour", price: 5.00, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857313/MIX_BHAJIYAS_PAKODA_hgyk6c.webp"), vegetarian: true },
  { id: 179, name: "ONION PAKODA", description: "Chopped onions battered in thick gram powder & deep fried", price: 4.75, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857309/ONION_PAKODA_j5xrkh.webp"), vegetarian: true },

  { id: 180, name: "PANEER PAKODA", description: "Homemade cottage cheese battered in gram powder & deep fried spiced", price: 5.75, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857313/PANEER_PAKODA_lwuspo.webp"), vegetarian: true, spicy: true },

  { id: 181, name: "VEG CUTLETS", description: "Mashed potatoes & vegetable cutlet shallow fried", price: 5.75, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857301/VEG_CUTLETS_gonil6.webp"), vegetarian: true },

  { id: 182, name: "ALOO CHAT", description: "A mouth watering dish of fried crisps topped with boiled potatoes & tamarind sauce", price: 4.25, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857302/ALOO_CHAT_jyuvq4.webp"), vegetarian: true, popular: true },

  { id: 183, name: "PAPRI CHAT", description: "A mouth watering dish of fried crisps topped with boiled chickpeas, yoghurt & tamarind sauce", price: 5.00, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857300/PAPRI_CHAT_qtkyfu.webp"), vegetarian: true, popular: true },

  { id: 184, name: "FRENCH FRIED", description: "Deep fried potato very thin, Salted slice of potato crinkle, curly with Indian spices.", price: 4.00, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857302/FRENCH_FRIED_ul5iqy.webp"), vegetarian: true },

  { id: 185, name: "VEGETABLE SAMOSA (4PCS)", description: "Crispy crust stuffed with spiced seasoned potatoes & peas", price: 4.00, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857301/VEGETABLE_SAMOSA_4PCS_isj7qz.webp"), vegetarian: true, popular: true },

  { id: 186, name: "PANI PURE", description: "Crispy hollow puri filled with spiced water and potatoes", price: 3.00, category: "Veg Starter", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771857315/PANI_PURE_kouock.webp"), vegetarian: true, popular: true }
];
