import { MenuItem } from "../types/types";
import { alcoholMenu } from "./AlcoholData";
import { barbequeNonVeg } from "./BarbequeNonVegData";
import { barbequeVeg } from "./BarbequeVegData";
import { biryani } from "./BiryaniData";
import { chefSpecialsMenu } from "./ChefSpecialData";
import { ChickenDelights } from "./ChickenData";
import { cottageCheeseMenu } from "./CottageCheeseData";
import { drinks } from "./DrinksData";
import { indianBreadsData } from "./IndianBreadsData";
import { indoChineseNonVegData } from "./IndoChineseNonVegData";
import { indoChineseVegData } from "./IndoChineseVegData";
import { lentilsMenu } from "./LentilsData";
import { muttonDelights } from "./MuttonDelightsData";
import { nepaliSpecials } from "./NepaliSpecialsData";
import { nonVegStarters } from "./NonVegStartersData";
import { raitaMenu } from "./RaitaData";
import { riceMenu } from "./RiceData";
import { seaFoodsMenu } from "./SeaFoodsData";
import { specialMealsMenu } from "./SpecialMealsData";
import { thaliData } from "./ThaliData";
import { vegStarters } from "./VegStartersData";
import { vegetarianDelights } from "./VegetarianDelightsData";
import { vegSoups } from "./VegSoupsData";
import { nonVegSoups } from "./NonVegSoupsData";
import { barbequeItems } from "./BarbequeData";
import { CategoryCard } from "../types/types";

export const allMenuData: MenuItem[] = [
    ...alcoholMenu,
    ...barbequeItems,
    ...barbequeNonVeg,
    ...barbequeVeg,
    ...biryani,
    ...chefSpecialsMenu,
    ...ChickenDelights,
    ...cottageCheeseMenu,
    ...drinks,
    ...indianBreadsData,
    ...indoChineseNonVegData,
    ...indoChineseVegData,
    ...lentilsMenu,
    ...muttonDelights,
    ...nepaliSpecials,
    ...nonVegStarters,
    ...raitaMenu,
    ...riceMenu,
    ...seaFoodsMenu,
    ...specialMealsMenu,
    ...thaliData,
    ...vegStarters,
    ...vegetarianDelights,
    ...vegSoups,
    ...nonVegSoups
]


export const categories: CategoryCard[] = [
  {
    name: 'Drinks',
    slug: 'drinks',
    description: 'Traditional Indian beverages, lassis, and refreshing drinks',
    itemCount: 24
  },
  {
    name: 'Barbeque',
    slug: 'barbeque',
    description: 'Tandoori specialties and clay-oven grilled delicacies',
    itemCount: 9
  },
  {
    name: 'Barbeque (Veg)',
    slug: 'barbeque-veg',
    description: 'Vegetarian tandoori grilled specialties',
    itemCount: 5
  },
  {
    name: 'Barbeque (Non-Veg)',
    slug: 'barbeque-non-veg',
    description: 'Non-vegetarian tandoori grilled delicacies',
    itemCount: 4
  },
  {
    name: 'Biryani',
    slug: 'biryani',
    description: 'Aromatic basmati rice cooked with spices and protein',
    itemCount: 6
  },
  {
    name: 'Chef Specials',
    slug: 'chef-specials',
    description: 'Signature dishes crafted by our expert chefs',
    itemCount: 6
  },
  {
    name: 'Chicken Delights',
    slug: 'chicken-delights',
    description: 'Tender chicken cooked in aromatic gravies',
    itemCount: 15
  },
  {
    name: 'Cottage Cheese',
    slug: 'cottage-cheese',
    description: 'Fresh paneer dishes in rich and creamy gravies',
    itemCount: 7
  },
  {
    name: 'Desserts',
    slug: 'desserts',
    description: 'Traditional Indian sweets and frozen delights',
    itemCount: 10
  },
  {
    name: 'Indian Breads',
    slug: 'indian-breads',
    description: 'Freshly baked rotis, naans, and parathas',
    itemCount: 13
  },
  {
    name: 'Indo-Chinese (Veg)',
    slug: 'indo-chinese-veg',
    description: 'Vegetarian fusion of Indian and Chinese flavors',
    itemCount: 6
  },
  {
    name: 'Indo-Chinese (Non-Veg)',
    slug: 'indo-chinese-non-veg',
    description: 'Non-veg fusion of Indian and Chinese flavors',
    itemCount: 4
  },
  {
    name: 'Lentils',
    slug: 'lentils',
    description: 'Traditional daal preparations slow-cooked to perfection',
    itemCount: 6
  },
  {
    name: 'Mutton Delights',
    slug: 'mutton-delights',
    description: 'Tender lamb cooked in rich traditional gravies',
    itemCount: 13
  },
  {
    name: 'Nepali Specials',
    slug: 'nepali-specials',
    description: 'Authentic Nepali dishes including momos',
    itemCount: 4
  },
  {
    name: 'Non-Veg Starters',
    slug: 'non-veg-starters',
    description: 'Appetizing non-vegetarian starters',
    itemCount: 6
  },
  {
    name: 'Non-Veg Soups',
    slug: 'non-veg-soups',
    description: 'Hearty chicken and non-vegetarian soups',
    itemCount: 6
  },
  {
    name: 'Raita',
    slug: 'raita',
    description: 'Cooling yogurt-based side dishes',
    itemCount: 5
  },
  {
    name: 'Rice',
    slug: 'rice',
    description: 'Flavored rice preparations and pulao varieties',
    itemCount: 5
  },
  {
    name: 'Sea Foods',
    slug: 'sea-foods',
    description: 'Fresh fish and prawn dishes in aromatic curries',
    itemCount: 4
  },
  {
    name: 'Special Set Meals',
    slug: 'special-meals',
    description: 'Complete meal platters perfect for sharing',
    itemCount: 2
  },
  {
    name: 'Thali',
    slug: 'thali',
    description: 'Complete traditional Indian meal platters',
    itemCount: 3
  },
  {
    name: 'Vegetarian Delights',
    slug: 'vegetarian-delights',
    description: 'Delicious vegetable preparations in various styles',
    itemCount: 14
  },
  {
    name: 'Veg Starters',
    slug: 'veg-starters',
    description: 'Delicious vegetarian appetizers',
    itemCount: 11
  },
  {
    name: 'Veg Soups',
    slug: 'veg-soups',
    description: 'Light and flavorful vegetarian soups',
    itemCount: 5
  },
  {
    name: 'Alcohol',
    slug: 'alcohol',
    description: 'Selection of beers, wines, whiskies, and spirits',
    itemCount: 20
  }
];