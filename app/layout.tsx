import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Zenteq Pvt. Ltd. - Scalable Web, Mobile & DevOps Solutions',
    template: '%s | Zenteq Pvt. Ltd.'
  },
  description: 'We help startups and SMEs build modern web and mobile apps with rock-solid DevOps. From MVP to scale, we deliver fast, secure, and reliable solutions.',
  keywords: ['web development', 'mobile development', 'devops', 'startup', 'SME', 'React', 'Node.js', 'AWS', 'Kubernetes'],
  authors: [{ name: 'Zenteq Pvt. Ltd.' }],
  creator: 'Zenteq Pvt. Ltd.',
  publisher: 'Zenteq Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zenteq.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zenteq.in',
    title: 'Zenteq Pvt. Ltd. - Scalable Web, Mobile & DevOps Solutions',
    description: 'We help startups and SMEs build modern web and mobile apps with rock-solid DevOps. From MVP to scale, we deliver fast, secure, and reliable solutions.',
    siteName: 'Zenteq Pvt. Ltd.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zenteq Pvt. Ltd. - Web, Mobile & DevOps Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenteq Pvt. Ltd. - Scalable Web, Mobile & DevOps Solutions',
    description: 'We help startups and SMEs build modern web and mobile apps with rock-solid DevOps. From MVP to scale, we deliver fast, secure, and reliable solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zenteq Pvt. Ltd.',
  url: 'https://zenteq.in',
  logo: 'https://zenteq.in/Logo2_Icon_Z.png',
  description: 'We help startups and SMEs build modern web and mobile apps with rock-solid DevOps. From MVP to scale, we deliver fast, secure, and reliable solutions.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@zenteq.in'
  },
  sameAs: [
    'https://instagram.com/zenteq',
    'https://twitter.com/zenteq'
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'Worldwide'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web App Development',
          description: 'React, Angular, and Next.js applications with modern UI, accessibility, and performance baked in.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Cross-platform apps using Flutter and React Native for a polished, consistent experience.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Backend & APIs',
          description: 'Node.js, Django, Spring Boot, FastAPI—secure APIs, clean architecture, and robust data layers.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'DevOps Architecture & Support',
          description: 'AWS, Docker, Kubernetes, CI/CD, Terraform, Ansible—automated, observable, and cost-efficient.'
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/Logo2_Icon_Z.png" />
        <link rel="apple-touch-icon" href="/Logo2_Icon_Z.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
