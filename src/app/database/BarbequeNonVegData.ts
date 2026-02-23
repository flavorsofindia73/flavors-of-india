import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

export const barbequeNonVeg: MenuItem[] = [
  { 
    id: 21, 
    name: "MUTTON SHEIKH KEBAB", 
    description: "Minted Lamb marinated in herbs & spices roasted over skewers", 
    price: 9.00, 
    category: "Barbeque", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526095/MUTTON_SHEIKH_KEBAB_aib1az.webp"), 
    vegetarian: false, 
    spicy: true 
  },
  { 
    id: 23, 
    name: "MURGH AFGANI (8PCS)", 
    description: "Spring Chicken marinated with Yoghurt, Cream, Cashew nuts and spices cooked to Perfection in Tandoor.", 
    price: 6.75, 
    category: "Barbeque", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526094/MURGH_AFGANI_bkw6pu.webp"), 
    vegetarian: false 
  },
  { 
    id: 24, 
    name: "FISH TIKKA (8PCS)", 
    description: "Barbequed pcs of tender fish marinated in spices and sour cream.", 
    price: 6.50, 
    category: "Barbeque", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526094/FISH_TIKKA_kp4889.webp"), 
    vegetarian: false 
  },
  { 
    id: 25, 
    name: "FLAVORS TIKKA PLATTER", 
    description: "Chicken leg, Mutton, Fish, Prawn, cheese, onion, marinated and barbequed and served with salad.", 
    price: 15.00, 
    category: "Barbeque", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771526095/TIKKA_PLATTER_lxc5lw.webp"), 
    vegetarian: false, 
    popular: true 
  }
];
