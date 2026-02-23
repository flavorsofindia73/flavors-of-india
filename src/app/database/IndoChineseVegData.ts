import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- Indo-Chinese Fusion (Veg) ---
export const indoChineseVegData: MenuItem[] = [
  { id: 107, name: "VEGETABLE FRIED RICE", description: "Rice fried with cabbage carrot green beans in soy sauce", price: 4.50, category: "Indo-Chinese Fusion", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771600404/VEGETABLE_FRIED_RICE_av2zju.webp"), vegetarian: true },
  { id: 108, name: "VEGETABLE SPRING ROLLS", description: "Pan fried vegetable rolls served with chutney", price: 4.50, category: "Indo-Chinese Fusion", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771600398/VEGETABLE_SPRING_ROLLS_tibui6.webp"), vegetarian: true },
  { id: 109, name: "VEGETABLE CHOWMEIN", description: "Noodles stir fried with al dante vegetables in soy sauce", price: 4.50, category: "Indo-Chinese Fusion", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771600401/VEGETABLE_CHOWMEIN_ubgk4t.webp"), vegetarian: true },
  { id: 110, name: "CHILLI PANEER", description: "Battered cottage cheese sauteed with capsicum, onion in soy sauce", price: 6.50, category: "Indo-Chinese Fusion", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771600398/CHILLI_PANEER_tuosw3.webp"), vegetarian: true, spicy: true },
  { id: 111, name: "GOBI MANCHURIAN", description: "Cauliflower and onions fried with chinese sauce (served dry/curried)", price: 6.00, category: "Indo-Chinese Fusion", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771600400/GOBI_MANCHURIAN_qpi5cu.webp"), vegetarian: true },
  { id: 112, name: "VEGETABLE MANCHURIAN", description: "Deep fried vegetable balls cooked with light corn flour (served dry/curried)", price: 6.00, category: "Indo-Chinese Fusion", image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771600398/VEGETABLE_MANCHURIAN_glfuva.webp"), vegetarian: true }
];