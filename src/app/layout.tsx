import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#07080B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gauravestates.com"),
  title: {
    default: `${siteContent.consultant.name} | ${siteContent.brand.name} - ${siteContent.brand.tagline}`,
    template: `%s | ${siteContent.brand.name}`,
  },
  description: `${siteContent.consultant.name}, premier Real Estate Consultant at ${siteContent.brand.name}. Expert advisory for luxury residential properties, commercial spaces, freehold land & plots, and high-yield real estate investments. Call ${siteContent.consultant.phoneDisplay}.`,
  keywords: [
    "Pranav Bansal",
    "Gaurav Estates",
    "Real Estate Consultant Chandigarh",
    "Luxury Residential Properties",
    "Commercial Spaces",
    "SCO Plots Tricity",
    "Pre Leased Commercial",
    "Real Estate Investment Consultancy",
    "Buy Sell Invest Properties",
    "High Yield Real Estate India",
  ],
  authors: [{ name: "Pranav Bansal" }, { name: "Gaurav Estates" }],
  creator: "Pranav Bansal",
  publisher: "Gaurav Estates",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteContent.consultant.name} | ${siteContent.brand.name} - Luxury Real Estate Consultant`,
    description: `Good People Build Great Places. Properties Today | Prosperity Tomorrow. Connect with ${siteContent.consultant.name} for prime residential, commercial, and investment advisory.`,
    url: "https://gauravestates.com",
    siteName: siteContent.brand.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Gaurav Estates - Luxury Real Estate Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.consultant.name} | ${siteContent.brand.name}`,
    description: `Buy | Sell | Invest. Luxury Real Estate & Investment Advisory by ${siteContent.consultant.name}.`,
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"],
  },
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
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteContent.brand.name,
  alternateName: "Gaurav Estates Real Estate Consultancy",
  url: "https://gauravestates.com",
  logo: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
  image: siteContent.consultant.portraitImage,
  description: `${siteContent.consultant.name} provides premier real estate consultancy under ${siteContent.brand.name}. Services include luxury residential, commercial SCOs and office towers, freehold land & plots, and high-yield real estate investments.`,
  telephone: siteContent.consultant.phoneDisplay,
  email: siteContent.consultant.email,
  priceRange: "₹₹₹₹",
  currenciesAccepted: "INR",
  slogan: siteContent.brand.slogans.primary,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteContent.consultant.address.street,
    addressLocality: siteContent.consultant.address.city,
    addressRegion: siteContent.consultant.address.state,
    postalCode: siteContent.consultant.address.pincode,
    addressCountry: "IN",
  },
  employee: {
    "@type": "Person",
    name: siteContent.consultant.name,
    jobTitle: siteContent.consultant.title,
    telephone: siteContent.consultant.phoneDisplay,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:30",
      closes: "19:30",
    },
  ],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Chandigarh Tricity, Punjab & Haryana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${plusJakarta.variable} font-sans bg-[#07080B] text-[#EDE8DF] antialiased selection:bg-gold-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
