  import { MenuItem } from "../types/types";
  import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

  // --- BARBEQUE VEG ---
  export const barbequeVeg: MenuItem[] = [
    {
      id: 26,
      name: "PANEER TIKKA PUDINA / PANEER TIKKA",
      description: "In house specially crafted cottage cheese and mint kabab",
      price: 6.00,
      category: "Barbeque Veg",
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771525715/PANEER_TIKKA_PUDINA_wtt4fd.webp"),
      vegetarian: true
    },
    { 
      id: 27, 
      name: "MUSHROOM TIKKA", 
      description: "Button Mushroom cooked with selected spices in authentic punjabi style", 
      price: 5.00, 
      category: "Barbeque Veg", 
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771525715/MUSHROOM_TIKKA_gcnsj0.webp"), 
      vegetarian: true 
    },
    { 
      id: 28, 
      name: "VEG. SEIKH KEBAB", 
      description: "Curried assorted vegetables, gram flour and cottage cheese seasoned with selected spices skewered & cooked in Tandoori", 
      price: 4.50, 
      category: "Barbeque Veg", 
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771525716/VEG._SEIKH_KEBAB_e3sobc.webp"), 
      vegetarian: true 
    },
    { 
      id: 29, 
      name: "PANEER ACHARI", 
      description: "Paneer cooked with vegetables in authentic achari spices", 
      price: 6.50, 
      category: "Barbeque Veg", 
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771525715/PANEER_ACHARI_yq5iri.webp"), 
      vegetarian: true 
    },
    { 
      id: 30, 
      name: "PANEER MALAI TIKKA", 
      description: "Thread the onion, capsicum and paneer cubes on bamboo skewers.", 
      price: 7.00, 
      category: "Barbeque Veg", 
      image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771525715/PANEER_MALAI_TIKKA_u2e6aw.webp"), 
      vegetarian: true 
    }
  ];
