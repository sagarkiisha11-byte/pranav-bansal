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
  metadataBase: new URL("https://pranav-bansal.netlify.app"),
  title: {
    default: "Pranav Bansal | Luxury Real Estate Consultant - Buy | Sell | Invest",
    template: "%s | Pranav Bansal",
  },
  description: `${siteContent.consultant.name}, premier Real Estate Consultant. Expert advisory for luxury residential properties, commercial spaces, freehold land & plots, and high-yield real estate investments. Call ${siteContent.consultant.phoneDisplay}.`,
  keywords: [
    "Pranav Bansal",
    "Real Estate Consultant Chandigarh",
    "Luxury Residential Properties",
    "Commercial Spaces",
    "SCO Plots Tricity",
    "Pre Leased Commercial",
    "Real Estate Investment Consultancy",
    "Buy Sell Invest Properties",
    "High Yield Real Estate India",
  ],
  authors: [{ name: "Pranav Bansal" }],
  creator: "Pranav Bansal",
  publisher: "Pranav Bansal",
  alternates: {
    canonical: "https://pranav-bansal.netlify.app",
  },
  openGraph: {
    title: "Pranav Bansal | Luxury Real Estate Consultant - Buy | Sell | Invest",
    description: `Good People Build Great Places. Properties Today | Prosperity Tomorrow. Connect with ${siteContent.consultant.name} for prime residential, commercial, and investment advisory.`,
    url: "https://pranav-bansal.netlify.app",
    siteName: "Pranav Bansal",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranav Bansal - Real Estate Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Bansal | Luxury Real Estate Consultant - Buy | Sell | Invest",
    description: `Buy | Sell | Invest. Luxury Real Estate & Investment Advisory by ${siteContent.consultant.name}.`,
    images: ["/og-image.png"],
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
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteContent.consultant.name,
  alternateName: "Pranav Bansal Real Estate Advisory",
  url: "https://pranav-bansal.netlify.app",
  logo: "https://pranav-bansal.netlify.app/assets/logo.png",
  image: siteContent.consultant.portraitImage,
  description: `${siteContent.consultant.name} provides premier real estate consultancy. Services include luxury residential, commercial SCOs and office towers, freehold land & plots, and high-yield real estate investments.`,
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
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                background-color: #07080B;
              }
              body.is-loading {
                overflow: hidden !important;
                touch-action: none;
              }
              body.is-loading #site-content {
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
              }
              #site-content {
                opacity: 1;
                visibility: visible;
                transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
              }
              #site-splash {
                position: fixed;
                inset: 0;
                width: 100vw;
                width: 100%;
                height: 100vh;
                height: 100dvh;
                background-color: #07080B;
                z-index: 99999;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`is-loading ${playfair.variable} ${plusJakarta.variable} font-sans bg-[#07080B] text-[#EDE8DF] antialiased selection:bg-gold-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
