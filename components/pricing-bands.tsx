import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const pricingBands = [
  {
    service: 'Web App Development',
    range: '₹1,50,000 – ₹8,00,000',
    description: 'React, Angular, and Next.js applications with modern UI, accessibility, and performance baked in.',
    features: ['Responsive design', 'SEO optimization', 'Performance optimization', 'Accessibility compliance']
  },
  {
    service: 'Mobile App Development',
    range: '₹2,00,000 – ₹12,00,000',
    description: 'Cross-platform apps using Flutter and React Native for a polished, consistent experience.',
    features: ['Cross-platform development', 'Native performance', 'App store deployment', 'Push notifications']
  },
  {
    service: 'Backend & APIs',
    range: '₹1,00,000 – ₹5,00,000',
    description: 'Node.js, Django, Spring Boot, FastAPI—secure APIs, clean architecture, and robust data layers.',
    features: ['RESTful APIs', 'Database design', 'Authentication & authorization', 'API documentation']
  },
  {
    service: 'DevOps Setup',
    range: '₹75,000 – ₹4,00,000',
    description: 'AWS, Docker, Kubernetes, CI/CD, Terraform, Ansible—automated, observable, and cost-efficient.',
    features: ['Infrastructure as Code', 'CI/CD pipelines', 'Monitoring & logging', 'Security best practices']
  },
  {
    service: 'DevOps Retainer',
    range: '₹60,000 – ₹2,50,000 / month',
    description: 'Ongoing DevOps support and maintenance for your infrastructure and deployment processes.',
    features: ['24/7 monitoring', 'Regular updates', 'Security patches', 'Performance optimization']
  }
]

export function PricingBands() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            All pricing is custom based on scope, complexity, and team composition. Ranges shown are indicative.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {pricingBands.map((band) => (
            <Card key={band.service} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-navy">{band.service}</CardTitle>
                <CardDescription className="text-base">{band.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <p className="text-2xl font-bold text-accent-green">{band.range}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {band.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="primary" className="w-full">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
