import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ghiles-kourtha.netlify.app"),
  title: {
    default: "Ghiles Khourta - Professional Video Editor & Content Creator | Transform Your Content",
    template: "%s | Ghiles Khourta - Video Editor"
  },
  description: "Professional video editing services by Ghiles Khourta. Transform your raw footage into captivating cinematic stories with premium editing packages. Content creator, motivator, and video editor specializing in cinematic edits for social media, YouTube, and businesses in Dubai and Algeria.",
  keywords: [
    "khourta ghiles",
    "ghiles khourta",
    "video editor dubai",
    "video editor algeria",
    "professional video editing",
    "content creator",
    "video editing services",
    "cinematic editing",
    "motivational content",
    "social media editor",
    "premium video editing",
    "content creation",
    "video production",
    "youtube video editor",
    "instagram reels editor",
    "tiktok video editor",
    "color grading services",
    "sound design",
    "video post production",
    "freelance video editor",
    "cinematic storytelling"
  ].join(", "),
  authors: [{ name: "Ghiles Khourta", url: "https://ghiles-kourtha.netlify.app" }],
  creator: "Ghiles Khourta",
  publisher: "Ghiles Khourta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: "Ghiles Khourta - Professional Video Editor & Content Creator",
    description: "Transform your raw footage into captivating stories with professional video editing services. Premium packages for creators and businesses in Dubai and Algeria.",
    url: "https://ghiles-kourtha.netlify.app",
    siteName: "Ghiles Khourta - Professional Video Editor",
    images: [
      {
        url: "/img1.jpg",
        width: 3080,
        height: 2363,
        alt: "Ghiles Khourta - Professional video editor & content creator workspace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter/X Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Ghiles Khourta - Professional Video Editor & Content Creator",
    description: "Transform your raw footage into captivating cinematic stories. Premium video editing services for creators and businesses.",
    images: ["/img1.jpg"],
    creator: "@unleashyourtiger",
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://ghiles-kourtha.netlify.app",
  },
  
  // Category and classification
  category: "Professional Services",
  classification: "Video Production, Content Creation, Video Editing Services",
  
  // Additional metadata
  other: {
    "revisit-after": "7 days",
    "rating": "general",
    "distribution": "global",
    "target": "all",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Enhanced Person Schema
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ghiles-kourtha.netlify.app/#person",
    "name": "Ghiles Khourta",
    "alternateName": "Aghilas Khourta",
    "jobTitle": "Professional Video Editor & Content Creator",
    "description": "Professional video editor and content creator specializing in cinematic editing, motivational content, and social media videos. Serving clients in Dubai and Algeria.",
    "url": "https://ghiles-kourtha.netlify.app",
    "image": "https://ghiles-kourtha.netlify.app/img1.jpg",
    "sameAs": [
      "https://www.instagram.com/unleashyourtiger/",
      "https://www.tiktok.com/@badsiker"
    ],
    "knowsAbout": [
      "Video Editing",
      "Content Creation",
      "Video Production",
      "Cinematic Editing",
      "Social Media Content",
      "Color Grading",
      "Sound Design",
      "Motion Graphics",
      "Story Telling"
    ],
    "knowsLanguage": ["English", "French", "Arabic"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Video Editor",
      "occupationLocation": {
        "@type": "City",
        "name": "Dubai"
      }
    }
  }
  
  // Enhanced Service Schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://ghiles-kourtha.netlify.app/#service",
    "name": "Professional Video Editing Services",
    "serviceType": "Video Editing and Content Creation",
    "provider": {
      "@id": "https://ghiles-kourtha.netlify.app/#person"
    },
    "description": "Professional video editing services including cinematic edits, social media content, motivational videos, color grading, and sound design. Offering three comprehensive packages to suit different needs and budgets.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Algeria"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Dubai"
      }
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://ghiles-kourtha.netlify.app/services",
      "servicePhone": "+213792520572",
      "email": "khourtaghiles@gmail.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Video Editing Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "price": "299",
          "priceCurrency": "AED",
          "itemOffered": {
            "@type": "Service",
            "name": "Simple Video Editing Package",
            "description": "Perfect for quick, engaging content with basic editing features. Includes video editing up to 1 minute, basic color correction, simple transitions & effects, and background music."
          }
        },
        {
          "@type": "Offer",
          "price": "999",
          "priceCurrency": "AED",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Video Editing Package",
            "description": "Advanced editing for impactful stories. Includes video editing up to 3 minutes, advanced color grading, cinematic video, dynamic transitions & effects, and sound design & mixing."
          }
        },
        {
          "@type": "Offer",
          "price": "1499",
          "priceCurrency": "AED",
          "itemOffered": {
            "@type": "Service",
            "name": "Diamond Video Editing Package",
            "description": "Cinematic masterpiece creation with professional editing. Includes video editing up to 5 minutes, professional color grading, cinematic transitions & effects, professional sound design, unlimited revisions, subtitles/captions in multiple languages, and thumbnail design."
          }
        }
      ]
    },
    "termsOfService": "https://ghiles-kourtha.netlify.app/services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  }
  
  // Website Schema
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://ghiles-kourtha.netlify.app/#website",
    "url": "https://ghiles-kourtha.netlify.app",
    "name": "Ghiles Khourta - Professional Video Editor",
    "description": "Professional video editing and content creation services",
    "publisher": {
      "@id": "https://ghiles-kourtha.netlify.app/#person"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ghiles-kourtha.netlify.app/services?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  }
  
  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ghiles-kourtha.netlify.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://ghiles-kourtha.netlify.app/services"
      }
    ]
  }

  return (
    <html lang="en" className="dark">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        
        {/* Theme and mobile optimization */}
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Ghiles Khourta" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Additional SEO tags */}
        {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.tiktok.com" />
      </head>
      <body className={`font-sans ${orbitron.variable} ${rajdhani.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}