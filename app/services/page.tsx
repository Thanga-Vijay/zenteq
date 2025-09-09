import type { Metadata } from 'next'
import { ServiceCard } from '@/components/service-card'
import { CTABanner } from '@/components/cta-banner'
import { 
  Globe, 
  Smartphone, 
  Server, 
  Cloud,
  Code,
  Database,
  Shield,
  Zap,
  Monitor,
  GitBranch
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Web, Mobile & DevOps Development',
  description: 'Comprehensive web app development, mobile app development, backend APIs, and DevOps services. From React to Kubernetes, we build scalable solutions.',
}

const services = [
  {
    id: 'web-app',
    icon: Globe,
    title: 'Web App Development',
    description: 'React, Angular, and Next.js applications with modern UI, accessibility, and performance baked in.',
    features: [
      'React.js, Angular, Next.js',
      'Modern UI/UX design',
      'Responsive and mobile-first',
      'Accessibility compliance (WCAG)',
      'Performance optimization',
      'SEO-friendly architecture'
    ],
    technologies: ['React', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    ctaHref: '/contact'
  },
  {
    id: 'mobile-app',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform apps using Flutter and React Native for a polished, consistent experience.',
    features: [
      'Flutter, React Native',
      'Cross-platform development',
      'Native performance',
      'App store deployment',
      'Push notifications',
      'Offline functionality'
    ],
    technologies: ['Flutter', 'React Native', 'Dart', 'JavaScript', 'Firebase', 'App Store Connect'],
    ctaHref: '/contact'
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend & APIs',
    description: 'Node.js, Django, Spring Boot, FastAPI—secure APIs, clean architecture, and robust data layers.',
    features: [
      'Node.js, Django, Spring Boot',
      'RESTful and GraphQL APIs',
      'Database design & optimization',
      'Authentication & authorization',
      'API documentation',
      'Microservices architecture'
    ],
    technologies: ['Node.js', 'Django', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
    ctaHref: '/contact'
  },
  {
    id: 'devops',
    icon: Cloud,
    title: 'DevOps Architecture & Support',
    description: 'AWS, Docker, Kubernetes, CI/CD, Terraform, Ansible—automated, observable, and cost-efficient.',
    features: [
      'AWS, Docker, Kubernetes',
      'CI/CD pipelines',
      'Infrastructure as Code',
      'Monitoring & logging',
      'Security best practices',
      'Cost optimization'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'Prometheus'],
    ctaHref: '/contact'
  }
]

const additionalServices = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Modern UI/UX, responsive, accessibility-first',
    features: ['Component libraries', 'State management', 'Testing', 'Performance']
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimized database architecture and management',
    features: ['Schema design', 'Query optimization', 'Data migration', 'Backup strategies']
  },
  {
    icon: Shield,
    title: 'Security Implementation',
    description: 'OWASP compliance and security best practices',
    features: ['Authentication', 'Authorization', 'Data encryption', 'Security audits']
  },
  {
    icon: Monitor,
    title: 'Performance Optimization',
    description: 'Speed, efficiency, and scalability optimization',
    features: ['Load testing', 'Caching strategies', 'CDN setup', 'Performance monitoring']
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              From web applications to mobile apps, backend APIs to DevOps infrastructure—we provide comprehensive development services to help your business scale.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Core Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our expertise spans the full development stack, from frontend to backend to infrastructure.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  ctaHref={service.ctaHref}
                  technologies={service.technologies}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-light-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Additional Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specialized services to enhance your development process and product quality.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {additionalServices.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-accent-green/10 rounded-lg">
                    <service.icon className="h-6 w-6 text-accent-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Ready to start your project?"
        description="Let's discuss your requirements and create a custom solution for your business."
        ctaText="Get Started"
      />
    </>
  )
}
