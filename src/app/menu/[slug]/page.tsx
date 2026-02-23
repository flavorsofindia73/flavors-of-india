'use client';
import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';
import Link from 'next/link';
import CategoryMenu from './CategoryMenu';
import { notFound, useParams } from 'next/navigation';
import { alcoholMenu } from '@/app/database/AlcoholData';
import { barbequeItems } from '@/app/database/BarbequeData';
import { barbequeNonVeg } from '@/app/database/BarbequeNonVegData';
import { barbequeVeg } from '@/app/database/BarbequeVegData';
import { biryani } from '@/app/database/BiryaniData';
import { chefSpecialsMenu } from '@/app/database/ChefSpecialData';
import { ChickenDelights } from '@/app/database/ChickenData';
import { cottageCheeseMenu } from '@/app/database/CottageCheeseData';
import { desserts } from '@/app/database/DessertsData';
import { drinks } from '@/app/database/DrinksData';
import { indianBreadsData } from '@/app/database/IndianBreadsData';
import { indoChineseNonVegData } from '@/app/database/IndoChineseNonVegData';
import { indoChineseVegData } from '@/app/database/IndoChineseVegData';
import { lentilsMenu } from '@/app/database/LentilsData';
import { muttonDelights } from '@/app/database/MuttonDelightsData';
import { nepaliSpecials } from '@/app/database/NepaliSpecialsData';
import { nonVegSoups } from '@/app/database/NonVegSoupsData';
import { nonVegStarters } from '@/app/database/NonVegStartersData';
import { raitaMenu } from '@/app/database/RaitaData';
import { riceMenu } from '@/app/database/RiceData';
import { seaFoodsMenu } from '@/app/database/SeaFoodsData';
import { specialMealsMenu } from '@/app/database/SpecialMealsData';
import { thaliData } from '@/app/database/ThaliData';
import { vegetarianDelights } from '@/app/database/VegetarianDelightsData';
import { vegSoups } from '@/app/database/VegSoupsData';
import { vegStarters } from '@/app/database/VegStartersData';

const categoryDataMap: Record<string, {
  title: string;
  description: string;
  data: unknown[]
}> = {
  alcohol: {
    title: 'Alcohol',
    description: 'Selection of beers, wines, whiskies, and spirits',
    data: alcoholMenu
  },
  barbeque: {
    title: 'Barbeque',
    description: 'Tandoori specialties and clay-oven grilled delicacies',
    data: barbequeItems
  },
  'barbeque-non-veg': {
    title: 'Barbeque (Non-Veg)',
    description: 'Tandoori grilled non-vegetarian delicacies',
    data: barbequeNonVeg
  },
  'barbeque-veg': {
    title: 'Barbeque (Veg)',
    description: 'Tandoori grilled vegetarian specialties',
    data: barbequeVeg
  },
  biryani: {
    title: 'Biryani',
    description: 'Aromatic basmati rice cooked with spices and your choice of protein',
    data: biryani
  },
  'chef-specials': {
    title: 'Chef Specials',
    description: 'Signature dishes crafted by our expert chefs',
    data: chefSpecialsMenu
  },
  'chicken-delights': {
    title: 'Chicken Delights',
    description: 'Tender chicken cooked in aromatic gravies and spices',
    data: ChickenDelights
  },
  'cottage-cheese': {
    title: 'Cottage Cheese',
    description: 'Fresh paneer dishes in rich and creamy gravies',
    data: cottageCheeseMenu
  },
  desserts: {
    title: 'Desserts',
    description: 'Traditional Indian sweets and frozen delights',
    data: desserts
  },
  drinks: {
    title: 'Drinks',
    description: 'Traditional Indian beverages, lassis, and refreshing drinks',
    data: drinks
  },
  'indian-breads': {
    title: 'Indian Breads',
    description: 'Freshly baked rotis, naans, and parathas from the tandoor',
    data: indianBreadsData
  },
  'indo-chinese-non-veg': {
    title: 'Indo-Chinese (Non-Veg)',
    description: 'Fusion of Indian spices with Chinese cooking styles',
    data: indoChineseNonVegData
  },
  'indo-chinese-veg': {
    title: 'Indo-Chinese (Veg)',
    description: 'Vegetarian fusion dishes blending Indian and Chinese flavors',
    data: indoChineseVegData
  },
  lentils: {
    title: 'Lentils',
    description: 'Traditional daal preparations slow-cooked to perfection',
    data: lentilsMenu
  },
  'mutton-delights': {
    title: 'Mutton Delights',
    description: 'Tender lamb cooked in rich traditional gravies',
    data: muttonDelights
  },
  'nepali-specials': {
    title: 'Nepali Specials',
    description: 'Authentic Nepali dishes including momos and traditional specialties',
    data: nepaliSpecials
  },
  'non-veg-soups': {
    title: 'Soups (Non-Veg)',
    description: 'Hearty chicken and traditional non-vegetarian soups',
    data: nonVegSoups
  },
  'non-veg-starters': {
    title: 'Non-Veg Starters',
    description: 'Appetizing non-vegetarian starters to begin your meal',
    data: nonVegStarters
  },
  raita: {
    title: 'Raita',
    description: 'Cooling yogurt-based side dishes with various ingredients',
    data: raitaMenu
  },
  rice: {
    title: 'Rice',
    description: 'Flavored rice preparations and pulao varieties',
    data: riceMenu
  },
  'sea-foods': {
    title: 'Sea Foods',
    description: 'Fresh fish and prawn dishes in aromatic curries',
    data: seaFoodsMenu
  },
  'special-meals': {
    title: 'Special Set Meals',
    description: 'Complete meal platters perfect for sharing',
    data: specialMealsMenu
  },
  thali: {
    title: 'Thali',
    description: 'Complete traditional Indian meal platters with multiple dishes',
    data: thaliData
  },
  'vegetarian-delights': {
    title: 'Vegetarian Delights',
    description: 'Delicious vegetable preparations in various styles',
    data: vegetarianDelights
  },
  'veg-soups': {
    title: 'Soups (Veg)',
    description: 'Light and flavorful vegetarian soups',
    data: vegSoups
  },
  'veg-starters': {
    title: 'Veg Starters',
    description: 'Delicious vegetarian appetizers to start your meal',
    data: vegStarters
  }
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = categoryDataMap[slug];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />

      <main className="w-full max-w-[1280px] mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/menu"
            className="inline-flex items-center text-[var(--primary-green)]
              font-medium hover:text-[var(--primary-red)] transition-colors mb-6"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Menu
          </Link>
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              {category.title}
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              {category.description}
            </p>
            <div className="w-20 h-1 bg-[var(--primary-green)] mx-auto mt-6"></div>
          </div>
        </div>
        <CategoryMenu items={category.data} />
      </main>
      <Footer />
    </div>
  );
}
