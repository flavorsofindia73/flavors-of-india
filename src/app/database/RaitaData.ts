import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- RAITA / YOGHURT ---
export const raitaMenu: MenuItem[] = [
  { id: 142, name: "MIX RAITA", description: "Fresh cucumber potatoes & onion chopped in fresh creamy yoghurt", price: 2.75, category: "Raita", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838444/MIX_RAITA_xfuknl.webp"), vegetarian: true },

  { id: 143, name: "CUCUMBER RAITA", description: "Fresh cucumber chopped in yoghurt and spiced", price: 2.50, category: "Raita", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838444/CUCUMBER_RAITA_paiov9.webp"), vegetarian: true },

  { id: 144, name: "ALOO RAITA", description: "Boiled potatoes chopped and spiced with yoghurt", price: 2.50, category: "Raita", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838443/ALOO_RAITA_lyul4l.webp"), vegetarian: true },

  { id: 145, name: "BOONDI RAITA", description: "Tiny balls of crisps in fresh yoghurt", price: 3.00, category: "Raita", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838444/BOONDI_RAITA_dkhdsq.webp"), vegetarian: true },

  { id: 146, name: "PLAIN YOGHURT", description: "Fresh plain yoghurt in clay pots", price: 2.50, category: "Raita", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771838445/PLAIN_YOGHURT_whcrzv.webp"), vegetarian: true }
];