import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { ServiceCard } from '@/components/service-card'
import { ProcessTimeline } from '@/components/process-timeline'
import { EngagementModels } from '@/components/engagement-models'
import { ValueProposition } from '@/components/value-proposition'
import { CTABanner } from '@/components/cta-banner'
import { Testimonials } from '@/components/testimonials'
import { StickyCTA } from '@/components/sticky-cta'
import { 
  Globe, 
  Smartphone, 
  Server, 
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  HeadphonesIcon
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Zenteq Pvt. Ltd. - Scalable Web, Mobile & DevOps Solutions',
  description: 'We help startups and SMEs build modern web and mobile apps with rock-solid DevOps. From MVP to scale, we deliver fast, secure, and reliable solutions.',
}

const services = [
  {
    icon: Globe,
    title: 'Web App Development',
    description: 'Build lightning-fast, SEO-friendly web apps with React, Angular, or Next.js.',
    features: ['React.js, Angular, Next.js', 'Modern UI/UX', 'Responsive design', 'Accessibility-first'],
    ctaHref: '/services#web-app'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Launch polished cross-platform apps using Flutter or React Native—native feel, faster delivery.',
    features: ['Flutter, React Native', 'Cross-platform development', 'Native performance', 'App store deployment'],
    ctaHref: '/services#mobile-app'
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    description: 'Secure APIs and clean architectures with Node.js, Django, Spring Boot, or FastAPI.',
    features: ['Node.js, Django, Spring Boot', 'Secure APIs', 'Clean architecture', 'Robust data layers'],
    ctaHref: '/services#backend'
  },
  {
    icon: Cloud,
    title: 'DevOps Architecture & Support',
    description: 'Automated AWS/Kubernetes infrastructure with CI/CD, Terraform, and observability built-in.',
    features: ['AWS, Docker, Kubernetes', 'CI/CD pipelines', 'Terraform, Ansible', 'Monitoring & logging'],
    ctaHref: '/services#devops'
  }
]

const trustPoints = [
  {
    icon: Shield,
    title: 'Secure by Design',
    description: 'OWASP compliance, least privilege, Infrastructure as Code'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile development, weekly demos, rapid iterations'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Infrastructure',
    description: 'AWS/K8s architecture, auto-scaling, cost optimization'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Transparent communication, regular updates, ongoing maintenance'
  }
]

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Services that move your product forward
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From MVP to scale, we deliver fast, secure, and reliable solutions across web, mobile, backend, and DevOps.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                ctaHref={service.ctaHref}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Zenteq Section */}
      <section className="py-24 bg-light-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Why Choose Zenteq?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine technical expertise with business understanding to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/10">
                  <point.icon className="h-8 w-8 text-accent-green" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-navy">{point.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <ValueProposition />
      <EngagementModels />
      <Testimonials />
      <CTABanner />
      <StickyCTA />
    </>
  )
}
