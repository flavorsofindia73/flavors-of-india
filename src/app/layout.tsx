import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const siteUrl = "https://flavorsofindia.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Flavors of India - Authentic Indian & Nepali Cuisine in Phnom Penh",
    template: "%s | Flavors of India"
  },
  description: "Experience authentic Indian and Nepali cuisine at Flavors of India. Serving traditional recipes with fresh ingredients since 2001. Multiple locations in Phnom Penh and Battambang, Cambodia.",
  keywords: ["Indian restaurant", "Nepali cuisine", "Phnom Penh restaurant", "authentic Indian food", "curry", "tandoori", "Cambodia dining", "Flavors of India"],
  authors: [{ name: "Flavors of India" }],
  creator: "Flavors of India",
  publisher: "Flavors of India",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Flavors of India",
    title: "Flavors of India - Authentic Indian & Nepali Cuisine",
    description: "Experience authentic Indian and Nepali cuisine at Flavors of India. Serving traditional recipes with fresh ingredients since 2001.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flavors of India Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavors of India - Authentic Indian & Nepali Cuisine",
    description: "Experience authentic Indian and Nepali cuisine at Flavors of India. Serving traditional recipes with fresh ingredients since 2001.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Flavors of India",
    "description": "Authentic Indian and Nepali cuisine restaurant serving traditional recipes with fresh ingredients since 2001.",
    "url": siteUrl,
    "telephone": "+855-23-990-455",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "BKK1 #158, St.63",
      "addressLocality": "Phnom Penh",
      "addressCountry": "KH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.5556,
      "longitude": 104.9207
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:30",
        "closes": "23:00"
      }
    ],
    "priceRange": "$$",
    "servesCuisine": ["Indian", "Nepali"],
    "hasMenu": `${siteUrl}/menu`,
    "image": `${siteUrl}/logo.png`,
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100068232918971",
      "https://www.instagram.com/flavorsofi/",
      "https://www.tiktok.com/@flavorsindia92"
    ]
  };

  return (
    <html lang="en"
      className={`light ${poppins.variable}`} suppressHydrationWarning>
      <head>
      <link rel="icon" href="/logo.ico" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.className} antialiased bg-background text-foreground`}>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
