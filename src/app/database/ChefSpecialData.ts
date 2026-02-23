import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

export const chefSpecialsMenu: MenuItem[] = [
  {
    id: 1,
    name: "FLAVORS SPECIAL CURRY",
    description: "Chef's special curry with tender chicken in rich creamy tomato gravy",
    price: 8.50,
    category: "Chef Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771527422/FLAVORS_SPECIAL_CURRY_r9rqic.webp"),
    vegetarian: false,
    popular: true
  },
  {
    id: 2,
    name: "CHICKEN CHETTINAD",
    description: "South Indian spicy chicken curry with aromatic spices and coconut",
    price: 7.50,
    category: "Chef Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771527421/CHICKEN_CHETTINAD_jlpdcn.webp"),
    vegetarian: false
  },
  {
    id: 3,
    name: "PRAWEN MALAI CURRY",
    description: "Fresh prawns cooked in creamy coconut gravy",
    price: 9.00,
    category: "Chef Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771527425/PRAWEN_MALAI_CURRY_u0zulf.webp"),
    vegetarian: false
  },
  {
    id: 4,
    name: "MUTTON ROGAN JOSH",
    description: "Kashmiri style mutton curry with aromatic spices",
    price: 10.00,
    category: "Chef Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771527424/MUTTON_ROGAN_JOSH_bwtzka.webp"),
    vegetarian: false,
    popular: true
  },
  {
    id: 5,
    name: "FISH HOLIYAT",
    description: "Goan style fish curry with coconut and tamarind",
    price: 9.50,
    category: "Chef Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771527422/FISH_HOLIYAT_snewlo.webp"),
    vegetarian: false
  },
  {
    id: 6,
    name: "LAMB VINDALOO",
    description: "Goan spicy lamb curry with potatoes in tangy gravy",
    price: 9.50,
    category: "Chef Specials",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771527423/LAMB_VINDALOO_d0epvi.webp"),
    vegetarian: false,
    spicy: true
  }
];
