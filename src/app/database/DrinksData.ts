import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

export const drinks: MenuItem[] = [
  {
    id: 65,
    name: "LASSI ( PLAIN / SWEET / SALTED )",
    description: "Traditional yogurt-based drink available in plain, sweet, or salted flavors.",
    price: 2.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771513372/Lassi-Plain-Sweet-Salty-Mint_hqlixn.webp"),
    vegetarian: true
  },
  {
    id: 66,
    name: "CHHASS (BUTTER MILK)",
    description: "Refreshing traditional buttermilk.",
    price: 2.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510669/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_14_l0ryxf_kl7plu.webp"),
    vegetarian: true
  },
  {
    id: 67,
    name: "HONEY LASSI",
    description: "Sweet lassi flavored with honey.",
    price: 2.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510669/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_17_sn7xiw_qyxpm3.webp"),
    vegetarian: true
  },
  {
    id: 68,
    name: "BANANA LASSI",
    description: "Yogurt drink blended with fresh bananas.",
    price: 2.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510669/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_19_bupwm7_n2du1s.webp"),
    vegetarian: true
  },
  {
    id: 69,
    name: "MANGO LASSI",
    description: "Popular yogurt drink blended with mango.",
    price: 2.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510668/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_20_niltmn_zgxprs.webp"),
    vegetarian: true,
    popular: true
  },
  {
    id: 70,
    name: "MIX FRUIT LASSI",
    description: "Yogurt drink with a blend of seasonal fruits.",
    price: 2.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510668/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_21_bsuomo_oti64m.webp"),
    vegetarian: true
  },
  {
    id: 71,
    name: "BANANA SHAKE",
    description: "Fresh milk blended with bananas.",
    price: 2.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510670/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_22_o5zyum_isapvl.webp"),
    vegetarian: true
  },
  {
    id: 72,
    name: "MANGO JUICE",
    description: "Sweet and refreshing mango juice.",
    price: 3.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510668/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_23_wf3nhc_j4oxp4.webp"),
    vegetarian: true
  },
  {
    id: 73,
    name: "MIX FRUIT JUICE",
    description: "A blend of various fresh fruit juices.",
    price: 3.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510668/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_24_baolij_p8arj3.webp"),
    vegetarian: true
  },
  {
    id: 74,
    name: "CARROT JUICE",
    description: "Freshly squeezed carrot juice.",
    price: 3.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510666/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_25_prwldu_v4zjpb.webp"),
    vegetarian: true
  },
  {
    id: 75,
    name: "BEET ROOT JUICE",
    description: "Freshly squeezed beetroot juice.",
    price: 3.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510666/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_27_fgkdzv_ikeqgc.webp"),
    vegetarian: true
  },
  {
    id: 76,
    name: "NIMBU PANI (FRESH LEMON JUICE)",
    description: "Traditional fresh lemonade.",
    price: 1.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510667/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_28_izz07p_glbgm9.webp"),
    vegetarian: true
  },
  {
    id: 77,
    name: "FRESH COCONUT JUICE",
    description: "Natural and cooling fresh coconut water.",
    price: 3.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510667/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_29_o2vfoh_znwfcp.webp"),
    vegetarian: true
  },
  {
    id: 78,
    name: "INDIAN CHAY TEA",
    description: "Traditional Indian milk tea.",
    price: 1.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510666/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_bohyrz_ree2yh.webp"),
    vegetarian: true
  },
  {
    id: 79,
    name: "MASALA TEA",
    description: "Aromatic tea brewed with Indian spices.",
    price: 2.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510670/MASALA-TEA_zpgdej_glspyz.jpg"),
    vegetarian: true
  },
  {
    id: 80,
    name: "HOT LEMON TEA",
    description: "Warm tea served with lemon.",
    price: 1.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510667/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_1_ysxroq_vit7ac.webp"),
    vegetarian: true
  },
  {
    id: 81,
    name: "ICE LEMON TEA",
    description: "Chilled lemon tea served over ice.",
    price: 1.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510667/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_2_diofb5_sd4dkq.webp"),
    vegetarian: true
  },
  {
    id: 82,
    name: "COFFEE BLACK",
    description: "Strong brewed black coffee.",
    price: 1.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510667/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_4_yrzcvi_fbta2c.webp"),
    vegetarian: true
  },
  {
    id: 83,
    name: "COFFEE WITH MILK",
    description: "Brewed coffee with milk.",
    price: 1.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510667/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_6_mib2tv_rrlcmi.webp"),
    vegetarian: true
  },
  {
    id: 84,
    name: "COKE / PEPSI / FANTA / SPRITE",
    description: "Assorted carbonated soft drinks.",
    price: 1.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510666/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_7_xds3s2_jhdygu.webp"),
    vegetarian: true
  },
  {
    id: 85,
    name: "SODA / TONIC / DIET COKE",
    description: "Selection of mixers and diet beverages.",
    price: 1.75,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510666/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_8_loug46_uo5fzl.webp"),
    vegetarian: true
  },
  {
    id: 86,
    name: "MINERAL WATER (100CL)",
    description: "Large bottle of mineral water.",
    price: 1.00,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510666/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_9_qi1qma_uwmtmq.webp"),
    vegetarian: true
  },
  {
    id: 87,
    name: "MINERAL WATER (SMALL)",
    description: "Small bottle of mineral water.",
    price: 0.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510669/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_10_xq9etz_gxnmme.webp"),
    vegetarian: true
  },
  {
    id: 88,
    name: "GINGER ALE",
    description: "Refreshing ginger-flavored soda.",
    price: 1.50,
    category: "Drinks",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771510669/Orange_and_Green_Modern_Bold_Butter_Chicken_Indian_Food_Marketing_Instagram_Post_11_bmb4c1_lww7qd.webp"),
    vegetarian: true
  }
];