import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

export const desserts: MenuItem[] = [
  {
    id: 180,
    name: "GULAB JAMUN",
    description: "Traditional Indian sweet dumplings soaked in rose-flavored sugar syrup, served warm",
    price: 3.50,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597045/GULAB_JAMUN_iasdbl.webp"),
    vegetarian: true,
    popular: true
  },
  {
    id: 181,
    name: "RASMALAI",
    description: "Soft cottage cheese patties soaked in sweetened, thickened milk with cardamom and pistachios",
    price: 4.00,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597066/RASMALAI_cedyrh.webp"),
    vegetarian: true
  },
  {
    id: 182,
    name: "KHEER (RICE PUDDING)",
    description: "Creamy rice pudding slow-cooked with milk, sugar, cardamom and garnished with nuts",
    price: 3.50,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597061/KHEER_RICE_PUDDING_yosayl.webp  "),
    vegetarian: true
  },
  {
    id: 183,
    name: "GAJAR KA HALWA",
    description: "Traditional carrot pudding cooked with milk, sugar, ghee and topped with dry fruits",
    price: 4.00,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597045/GAJAR_KA_HALWA_vzmrqv.webp"),
    vegetarian: true
  },
  {
    id: 184,
    name: "KULFI (INDIAN ICE CREAM)",
    description: "Traditional frozen dairy dessert flavored with cardamom, pistachios and saffron",
    price: 3.00,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597061/KULFI_INDIAN_ICE_CREAM_wcee59.webp"),
    vegetarian: true
  },
  {
    id: 185,
    name: "MANGO KULFI",
    description: "Creamy Indian ice cream infused with sweet mango pulp and pistachios",
    price: 3.50,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597063/MANGO_KULFI_xwynhv.webp"),
    vegetarian: true,
    popular: true
  },
  {
    id: 186,
    name: "CHOCOLATE KULFI",
    description: "Rich chocolate-flavored kulfi with a creamy texture and nutty garnish",
    price: 3.50,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597044/CHOCOLATE_KULFI_vo4bao.webp"),
    vegetarian: true
  },
  {
    id: 187,
    name: "RASGULLA",
    description: "Spongy cottage cheese balls soaked in light sugar syrup",
    price: 3.50,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597065/RASGULLA_ayqjz3.webp"),
    vegetarian: true
  },
  {
    id: 188,
    name: "JALEBI",
    description: "Crispy, coiled sweet made by deep-frying batter soaked in sugar syrup",
    price: 3.00,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597049/JALEBI_sf75gm.webp"),
    vegetarian: true
  },
  {
    id: 189,
    name: "MIXED DESSERT PLATTER",
    description: "Assortment of traditional Indian sweets including gulab jamun, rasgulla, and barfi",
    price: 6.00,
    category: "Desserts",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771597064/MIXED_DESSERT_PLATTER_f40ywp.webp"),
    vegetarian: true,
    popular: true
  }
];
