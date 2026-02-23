import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

export const barbequeItems: MenuItem[] = [
  {
    id: 28,
    name: "TANDOORI CHICKEN (FULL)",
    description: "Whole chicken marinated in yoghurt & spices, barbequed in clay oven till perfection",
    price: 12.00,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524995/TANDOORI_CHICKEN_yvrr60.webp"),
    vegetarian: false,
    popular: true
  },
  {
    id: 29,
    name: "TANDOORI CHICKEN (HALF)",
    description: "Half chicken marinated in yoghurt & spices, barbequed in clay oven till perfection",
    price: 6.50,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524995/TANDOORI_CHICKEN_yvrr60.webp"),
    vegetarian: false
  },
  {
    id: 30,
    name: "CHICKEN PAHADI KEBAB (8PCS)",
    description: "Tender boneless chicken marinated with ginger-garlic paste, cashew nut and cream, roasted in clay oven final test in mints",
    price: 6.50,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524994/CHICKEN_PAHADI_KEBAB_mnmwr8.webp"),
    vegetarian: false
  },
  {
    id: 31,
    name: "RESHAMI KEBAB",
    description: "Boneless pieces of chicken marinated in eggs, cashew nuts sauce & barbequed",
    price: 7.50,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524994/RESHAMI_KEBAB_pvblhc.webp"),
    vegetarian: false
  },
  {
    id: 32,
    name: "CHICKEN TIKKA (8PCS)",
    description: "Tender boneless chunks of chicken toasted in clay oven",
    price: 6.00,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524994/CHICKEN_TIKKA_oqwyh9.webp"),
    vegetarian: false,
    popular: true
  },
  {
    id: 33,
    name: "ACHARI MURGA TIKKA (8PCS)",
    description: "Tender pieces of chicken marinated with yoghurt flavoured with Achar, cooked in Tandoori",
    price: 6.25,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524994/ACHARI_MURGA_TIKKA_qumnrp.webp"),
    vegetarian: false,
    spicy: true
  },
  {
    id: 34,
    name: "LASUNI MURGH TIKKA (8PCS)",
    description: "Tender pieces of chicken marinated with garlic & cooked in Tandoori",
    price: 6.00,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524994/LASUNI_MURGH_TIKKA_wflmvh.webp"),
    vegetarian: false
  },
  {
    id: 35,
    name: "TANGDI KEBAB (4PCS)",
    description: "Chicken legs marinated in yoghurt garlic herbs and barbequed in tandoor",
    price: 7.50,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524994/TANGDI_KEBAB_q9fopc.webp"),
    vegetarian: false
  },
  {
    id: 36,
    name: "CHICKEN SHEIKH KEBAB",
    description: "Minted chicken barbequed over skewers along with herbs and spices",
    price: 7.50,
    category: "Barbeque",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771524994/CHICKEN_SHEIKH_KEBAB_ebbceq.webp"),
    vegetarian: false,
    spicy: true
  }
];
