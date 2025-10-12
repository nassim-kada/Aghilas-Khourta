import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next";
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "Ghiles Khourta - Professional Video Editor & Content Creator | Transform Your Content",
  description: "Professional video editing services by Ghiles Khourta.Transform your raw footage into captivating stories with premium editing packages . Content creator,motivator,and video editor specializing in cinematic edits",
  keywords:[
    "ghiles khourta",
    "content creator",
    "video editing services",
    "cinematic editing",
    "motivational content",
    "social media editor",
    "premium video editing",
    "Ghiles Khourta",
    "content creation",
    "video production"
  ].join(", "),
  //OPEN GRAPH METADATA
  openGraph:{
    title:"Ghiles Khourta - Professional Video Editor & content creator",
    description:"Transform your raw footage into captivating stories with professsional video editing services .Premium packages for creators and busimesses.",
    url:"https://ghiles-kourtha.netlify.app/",
    siteName:"Ghiles Khourta - Video editor",
    images:[
      {
        url:"/img1.jpg",
        width:3080,
        height:2363,
        alt:"Ghiles Khourta - Professional video editor & content creator",
      },
    ],
    locale:"en_US",
    type:"website",
  },
  robots:{
    index:true,
    follow:true,
    googleBot:{
      index:true,
      follow:true,
      "max-video-preview":-1,
      "max-image-preview":"large",
      "max-snippet":-1
    },
  },
  alternates:{
    canonical:""
  },
  authors:[{name:"Ghiles Khourta"}],
  creator:"Ghiles Khourta",
  publisher:"Ghiles Khourta",
  category:"video editing services",
  classification:"video production , content creation ,video editing",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd={
    '@context':'https://schema.org',
    '@type':'Person',
    'name':'Ghiles Khourta',
    'jobTitle':'Professional Video Editor & Content Creatoion',
    'description':'Professional video editing services and content creation ',
    'url':'https://ghiles-kourtha.netlify.app/',
    'sameAs':[
      'https://www.instagram.com/unleashyourtiger/',
      'https://www.tiktok.com/@badsiker'
    ],
    'knowsAbout':[
      'Video Editing',
      'Content Creation',
      'Video Production',
      'Cinematic Editing',
      'Social Media Content'
    ]
  }
  const ServiceJsonLD={
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Video Editing Services',
    'provider':{
      '@type':'Person',
      'name':'Ghiles Khourta'
    },
    'description':'Professional video editing services including cinematic editis,social media content and motivaional videos',
    'areaServed':'Algeria & Dubai',
    'hasOfferCatalog':{
      '@type':'OfferCatalog',
      'name':'Video editing Packages',
      'itemListElement':[
        {
          '@type':'Offer',
          'itemOffered':{
            '@type': 'Service',
            'name': 'Simple Video Editing Package',
            'description': 'Perfect for quick, engaging content with basic editing features'
          }
        },
        {
          '@type':'Offer',
          'itemOffered':{
            '@type':'Service',
            'name':'Diamond Video editing package',
            'descriptoon':'Cinematic masterpiece creation with professional editing',
          }
        }
      ]
    }
  }
   return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceJsonLD) }}
        />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Aghilas Khourta" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
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