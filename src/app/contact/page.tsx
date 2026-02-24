import type { Metadata } from "next";
import ContactPage from '../components/sections/ContactSection';

const siteUrl = "https://flavorsofindia.org";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Flavors of India. Find our locations in Phnom Penh and Battambang, Cambodia. Call us or send a message. Open daily 10:30 AM - 11:00 PM.",
  openGraph: {
    title: "Contact Us - Flavors of India",
    description: "Contact Flavors of India. Find our locations in Phnom Penh and Battambang, Cambodia. Call us or send a message.",
    url: `${siteUrl}/contact`,
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function Contact() {
  return <ContactPage />
}
