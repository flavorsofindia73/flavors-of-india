import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- RICE ---
export const riceMenu: MenuItem[] = [
  { id: 147, name: "STEAMED RICE", description: "Fine quality long grain rice", price: 1.00, category: "Rice", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838761/STEAMED_RICE_toci5l.webp"), vegetarian: true },

  { id: 148, name: "JEERA RICE", description: "Rice fried with flavored cumin seeds", price: 2.25, category: "Rice", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838761/JEERA_RICE_pa8lky.webp"), vegetarian: true },

  { id: 149, name: "YELLOW RICE", description: "Rice fried with turmeric powder", price: 2.75, category: "Rice", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838762/YELLOW_RICE_f9sr91.webp"), vegetarian: true },

  { id: 150, name: "PEAS PULAO", description: "Rice and green peas flavored with mild spices", price: 2.75, category: "Rice", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838761/PEAS_PULAO_uwg7r2.webp"), vegetarian: true },

  { id: 151, name: "KASHMIRI PULAO", description: "Long grain rice colorfully fried with nuts and dry fruits", price: 3.25, category: "Rice", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838890/KASHMIRI_PULAO_qt1dfn.webp"), vegetarian: true }

];
