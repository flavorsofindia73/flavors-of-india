import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

// --- LENTILS ---
export const lentilsMenu: MenuItem[] = [
  { 
    id: 113, 
    name: "DAAL FRIED", 
    description: "Yellow lentils (moong) simmered on low heat garnished with white butter", 
    price: 4.25, 
    category: "Lentils", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771612597/DAAL_FRIED_befcnh.webp"), 
    vegetarian: true 

  },
  { 
    id: 114, 
    name: "DAAL TADAKA", 
    description: "Mildly spiced yellow lentils (toor) with condiments fried in clarified butter", 
    price: 4.50, 
    category: "Lentils", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771612597/DAAL_TADAKA_kdbbft.webp"), 
    vegetarian: true 

  },
  { 
    id: 115, 
    name: "DAAL MAKHANI", 
    description: "Whole black lentils & kidney beans simmered on slow fire & tempered with spices", 
    price: 5.50, 
    category: "Lentils", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771612597/DAAL_MAKHANI_pyfidb.webp"), 
    vegetarian: true, 
    popular: true 

  },
  { 
    id: 116, 
    name: "DAAL BUKHARA", 
    description: "Slow cooked black lentils in milk & spices - a special from Afghanistan", 
    price: 5.00, 
    category: "Lentils", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771612597/DAAL_BUKHARA_vesouh.webp"), 
    vegetarian: true 

  },
  { 
    id: 117, 
    name: "CHOLE BHATURE", 
    description: "Punjabi spicy curried chickpeas simmered in tomato gravy, Indian spiced and served with puffy fried white-flour bread.", 
    price: 6.50, 
    category: "Lentils", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771870734/CHOLE_BHATURE_hmmamz.webp"), 
    vegetarian: true, 
    spicy: true 

  },
  { 
    id: 118, 
    name: "PINDI CHOLE MASALA / CHANA MASALA", 
    description: "Delicious Chickpeas cooked in onion tomato gravy.", 
    price: 5.50, 
    category: "Lentils", 
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771870734/PINDI_CHOLE_MASALA_rc3adl.webp"), 
    vegetarian: true 

  }
];