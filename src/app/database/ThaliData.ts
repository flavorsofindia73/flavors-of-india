import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- Thali / Full Indian Meal ---
export const thaliData: MenuItem[] = [
  { 
    id: 159, name: "THALI VEGETARIAN", description: "Set meal containing roti or naan, daal, vegetables, rice, pickles, salad & mix raita", price: 6.50, category: "Thali", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840934/THALI_VEGETARIAN_ddvoq8.png"), vegetarian: true 
  },

  { 
    id: 160, name: "THALI NON VEGETARIAN", description: "Set meal containing roti or naan, daal, chicken curry, rice, pickle and mix raita", price: 7.50, category: "Thali", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840932/THALI_NON_VEGETARIAN_bohg4y.png"), vegetarian: false },

  { 
    id: 161, name: "THALI CLASSICAL (MUTTON OR FISH)", description: "Set meal containing roti or naan, daal, mutton or fish curry, rice, pickle, salad and mix raita", price: 8.50, category: "Thali", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840931/THALI_CLASSICAL_MUTTON_OR_FISH_dwwh9k.png"), vegetarian: false 
  }
];