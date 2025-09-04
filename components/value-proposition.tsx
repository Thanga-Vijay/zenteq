import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Rocket, DollarSign, Shield, Users, Zap, TrendingUp } from 'lucide-react'

const valueProps = [
  {
    title: 'Faster MVP Launch',
    description: 'Get to market quicker with our streamlined development process.',
    icon: Rocket,
    benefit: 'Launch 40% faster than industry average'
  },
  {
    title: 'Cost Efficiency',
    description: 'Optimized infrastructure reduces operational expenses.',
    icon: DollarSign,
    benefit: 'Reduce cloud costs by up to 30%'
  },
  {
    title: 'Scalable & Secure',
    description: 'Build once, scale infinitely without rebuild headaches.',
    icon: Shield,
    benefit: 'OWASP compliant security by default'
  },
  {
    title: 'Partnership Approach',
    description: 'We\'re not just a vendor, but part of your growth journey.',
    icon: Users,
    benefit: 'Dedicated success manager'
  },
  {
    title: 'Performance Optimized',
    description: 'Lightning-fast applications that keep users engaged.',
    icon: Zap,
    benefit: '95+ Lighthouse performance scores'
  },
  {
    title: 'Growth-Ready',
    description: 'Architecture that grows with your business needs.',
    icon: TrendingUp,
    benefit: 'Auto-scaling infrastructure'
  }
]

export function ValueProposition() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Why Startups Choose Zenteq
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine technical expertise with business understanding to deliver solutions that drive real results.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {valueProps.map((prop) => (
            <Card key={prop.title} className="bg-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent-green/10 rounded-lg">
                    <prop.icon className="h-6 w-6 text-accent-green" />
                  </div>
                  <CardTitle className="text-lg">{prop.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {prop.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-accent-green/5 rounded-lg p-3">
                  <p className="text-sm font-medium text-accent-green">
                    {prop.benefit}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's discuss your project and turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="primary" className="text-lg px-8 py-3">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="navy" className="text-lg px-8 py-3">
                <Link href="/services">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
