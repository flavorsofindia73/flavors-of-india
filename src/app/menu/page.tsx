import type { Metadata } from "next";
import MenuPage from "../components/sections/MenuSection";

const siteUrl = "https://flavorsofindia.org";

export const metadata: Metadata = {
  title: "Menu - Authentic Indian & Nepali Dishes",
  description: "Explore our authentic Indian and Nepali menu featuring curries, tandoori specialties, momos, biryanis, and traditional dishes. Fresh ingredients, traditional recipes.",
  openGraph: {
    title: "Menu - Flavors of India",
    description: "Explore our authentic Indian and Nepali menu featuring curries, tandoori specialties, momos, biryanis, and traditional dishes.",
    url: `${siteUrl}/menu`,
  },
  alternates: {
    canonical: `${siteUrl}/menu`,
  },
};

export default function Menu() {
  return <MenuPage/>
}
