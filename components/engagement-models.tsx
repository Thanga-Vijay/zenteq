import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Users, Clock, Shield, Zap } from 'lucide-react'

const engagementModels = [
  {
    title: 'Fixed Project',
    description: 'Clear scope, timeline, and deliverables for well-defined projects.',
    icon: Clock,
    features: [
      'Defined scope and timeline',
      'Fixed pricing structure',
      'Clear deliverables',
      'Project milestone tracking'
    ],
    cta: 'Get Project Quote'
  },
  {
    title: 'Dedicated Team',
    description: 'Your developers work like an extended team, integrated into your workflow.',
    icon: Users,
    features: [
      'Dedicated developers',
      'Agile development process',
      'Direct communication',
      'Flexible team scaling'
    ],
    cta: 'Start Team Discussion'
  },
  {
    title: 'Retainer Support',
    description: 'Ongoing DevOps, maintenance, and support for your infrastructure.',
    icon: Shield,
    features: [
      '24/7 infrastructure monitoring',
      'Regular security updates',
      'Performance optimization',
      'Emergency support'
    ],
    cta: 'Discuss Support Plan'
  }
]

export function EngagementModels() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Flexible Solutions for Every Stage of Your Startup
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're validating your idea or scaling to thousands of users, we'll design a plan that fits your needs.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {engagementModels.map((model) => (
            <Card key={model.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-green/10 rounded-lg">
                    <model.icon className="h-6 w-6 text-accent-green" />
                  </div>
                  <CardTitle className="text-xl">{model.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {model.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 mb-6">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant="primary">
                  <Link href="/contact">{model.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-light-gray rounded-lg p-8">
            <div className="mx-auto max-w-2xl">
              <Zap className="h-12 w-12 text-accent-green mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Let's discuss your requirements and find the perfect engagement model for your startup's growth.
              </p>
              <Button asChild size="lg" variant="primary" className="text-lg px-8 py-3">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
