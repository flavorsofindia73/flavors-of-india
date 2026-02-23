import { MenuItem } from "../types/types";
import { optimizeCloudinaryUrl } from "../lib/optimizeCloudinaryUrl";

export const specialMealsMenu: MenuItem[] = [
  {
    id: 156,
    name: "TEAM MEAL (NON VEGETARIAN)",
    description: "Full course meal including Starters (2pcs Veg Samosa, 2pcs Chicken Samosa), Main Course (Half Tandoori Chicken, Daal Makhani, Butter Chicken, Navaratna Korma, Vegetable Biriyani), Breads (1 Plain Naan, 1 Garlic Naan), Raita Salad, and Dessert of the Day.",
    price: 33.00,
    category: "Special Set Meals",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840461/TEAM_MEAL_NON_VEGETARIAN_a7ykse.webp"),
    vegetarian: false,
    popular: true
  },
  {
    id: 157,
    name: "TEAM MEAL (VEGETARIAN)",
    description: "Full course vegetarian meal including Starters (3pcs Veg Samosa, 3pcs Veg Cutlet), Main Course (Aloo Gobhi, Daal Makhani, Palak Paneer, Vegetable Biriyani), Breads (1 Plain Naan, 1 Garlic Naan), Raita Salad, and Dessert of the Day.",
    price: 30.00,
    category: "Special Set Meals",
    image: optimizeCloudinaryUrl("https://res.cloudinary.com/dweqejpfk/image/upload/v1771840461/TEAM_MEAL_VEGETARIAN_kcefrl.webp"),
    vegetarian: true
  }
];