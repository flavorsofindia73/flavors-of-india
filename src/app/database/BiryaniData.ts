import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";


// Helper function to add Cloudinary optimizations to image URLs
const optimizeImage = (url: string): string => {
  if (!url.startsWith('http')) return url; // Local file, return as-is
  if (url.includes('f_auto,q_auto')) return url; // Already optimized
  
  return url.replace('/upload/', '/upload/f_auto,q_auto/');
};

// --- BIRYANI ---
export const biryani: MenuItem[] = [
  { id: 31, name: "VEGETABLE BIRYANI", description: "Fried vegetable cooked with rice and served with mix raita", price: 5.50, category: "Biryani", image: optimizeImage(optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526971/VEGETABLE_BIRYANI_r7nx2d.webp")), vegetarian: true },
  { id: 32, name: "CHICKEN BIRIYANI", description: "Aromatic spices and chicken pcs cooked in rice and served with mix raita", price: 6.50, category: "Biryani", image: optimizeImage(optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526971/CHICKEN_BIRIYANI_dejqak.webp")), vegetarian: false, popular: true },
  { id: 33, name: "MUTTON BIRIYANI", description: "Very delicious preparation: mutton cooked with rice and served with mix raita", price: 8.00, category: "Biryani", image: optimizeImage(optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526986/CHICKEN_DUM_BIRYANI_lzy6wj.webp")), vegetarian: false, popular: true },
  {
    id: 34,
    name: "MUTTON DUM BIRYANI",
    description: "Slow-cooked aromatic basmati rice and tender mutton pieces layered with spices.",
    price: 10.00,
    category: "Biryani",
    image: optimizeImage(optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526968/MUTTON_BIRIYANI_sqppz3.webp")),
    vegetarian: false,
    popular: true
  },
  {
    id: 35,
    name: "CHICKEN DUM BIRYANI",
    description: "Authentic Hydrabadi style chicken and rice cooked under pressure (dum).",
    price: 8.00,
    category: "Biryani",
    image: optimizeImage(optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526986/CHICKEN_DUM_BIRYANI_lzy6wj.webp")),
    vegetarian: false
  },
  {
    id: 36,
    name: "FISH BIRYANI",
    description: "Flavorful biryani prepared with spiced fish fillets.",
    price: 8.00,
    category: "Biryani",
    image: "https://res.cloudinary.com/dweqejpfk/image/upload/v1771526987/FISH_BIRYANI_qdgbtg.webp",
    vegetarian: false
  }
];
