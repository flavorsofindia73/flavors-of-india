import type { Metadata } from "next";
import AboutSection from '../components/sections/AboutSection';

const siteUrl = "https://flavorsofindia.org";

export const metadata: Metadata = {
  title: "About Us - Our Story & Heritage",
  description: "Learn about Flavors of India, founded in 2001 by Mr. Lal Singh Khadka. Discover our journey of bringing authentic Indian and Nepali cuisine to Cambodia with 20+ years of excellence.",
  openGraph: {
    title: "About Us - Flavors of India",
    description: "Learn about Flavors of India, founded in 2001 by Mr. Lal Singh Khadka. Discover our journey of bringing authentic Indian and Nepali cuisine to Cambodia.",
    url: `${siteUrl}/about`,
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function About() {
  return <AboutSection />;
}
