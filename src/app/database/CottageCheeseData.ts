import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

export const cottageCheeseMenu: MenuItem[] = [
  { 
    id: 58, 
    name: "MALAI KOFTA", 
    description: "Cheese and vegetables corquettes cooked in tangy tomato & cream sauce", 
    price: 6.00, 
    category: "Cottage Cheese", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771595975/MALAI_KOFTA_b2k1kr.webp"), 
    vegetarian: true 
  },
  { 
    id: 59, 
    name: "PALAK PANEER", 
    description: "Spinach cooked with cubes of cottage cheese", 
    price: 6.00, 
    category: "Cottage Cheese", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771596043/PALAK_PANEER_c2iith.webp"), 
    vegetarian: true 
  },
  { 
    id: 60, 
    name: "MATAR PANEER", 
    description: "Garden peas cooked with cottage cheese gravy & topped with cream", 
    price: 6.00, 
    category: "Cottage Cheese", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771596043/MATAR_PANEER_kbh21o.webp"), 
    vegetarian: true 
  },
  { 
    id: 61, 
    name: "PANEER MAKHANI", 
    description: "Fresh homemade cheese cooked in tomato & cream sauce", 
    price: 6.50, 
    category: "Cottage Cheese", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771595942/PANEER_MAKHANI_eydng4.webp"), 
    vegetarian: true 
  },
  { 
    id: 62, 
    name: "PANEER TIKKA MASALA", 
    description: "Marinated cottage cheese, onion, tomato, green capsicum roasted in clay oven tandoor and served in a spiced rich gravy", 
    price: 6.75, 
    category: "Cottage Cheese", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771595943/PANEER_TIKKA_MASALA_i0cm8u.webp"), 
    vegetarian: true, 
    spicy: true 
  },
  { 
    id: 63, 
    name: "KADAI PANEER", 
    description: "Homemade cheese cooked with bell peppers, onions, tomato & spicesly grounded spices in an authentic karahi work",
    price: 6.50, 
    category: "Cottage Cheese", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771595944/KADAI_PANEER_u9e6ua.webp"), 
    vegetarian: true 
  },
  { 
    id: 64, 
    name: "PANEER BUTTER MASALA", 
    description: "Traditional Punjabi dish of cottage cheese cooked in rich creamy butter and tomato gravy", 
    price: 6.50, 
    category: "Cottage Cheese", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771595940/PANEER_BUTTER_MASALA_fbd6pm.webp"), 
    vegetarian: true, popular: true 
  }
];