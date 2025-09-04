import type { Metadata } from 'next'
import { CTABanner } from '@/components/cta-banner'
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Shield,
  Zap,
  TrendingUp,
  Phone
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Zenteq Pvt. Ltd.',
  description: 'Learn about Zenteq Pvt. Ltd., our mission to help startups and SMEs build scalable web and mobile applications with modern DevOps practices.',
}

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We prioritize code quality, performance, and user experience in everything we build.'
  },
  {
    icon: Shield,
    title: 'Security by Design',
    description: 'Security is built into our development process from the ground up.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We use agile methodologies to deliver working software quickly and iteratively.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'We build systems that can grow with your business needs.'
  },
  {
    icon: Phone,
    title: 'Client Partnership',
    description: 'We work closely with clients to understand their needs and deliver solutions that exceed expectations.'
  },
  {
    icon: Globe,
    title: 'Modern Technology',
    description: 'We stay current with the latest technologies and best practices in software development.'
  }
]

const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Years Experience', value: '5+' },
  { label: 'Technologies', value: '20+' }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Zenteq
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We help startups and SMEs build modern web and mobile apps with rock-solid DevOps. From MVP to scale, we deliver fast, secure, and reliable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl text-center mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Zenteq Pvt. Ltd. was founded with a simple mission: to help startups and small-to-medium enterprises 
                build world-class digital products without the complexity and cost of traditional enterprise solutions.
              </p>
              <p>
                We believe that great software should be accessible to businesses of all sizes. That's why we focus 
                on delivering scalable, secure, and maintainable solutions using modern technologies and best practices.
              </p>
              <p>
                Our team combines deep technical expertise with business understanding to deliver solutions that not 
                only work well but also drive real business value. We work as an extension of your team, providing 
                transparent communication, regular updates, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-light-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Numbers that reflect our commitment to delivering quality solutions and building lasting partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-accent-green">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The principles that guide our work and relationships with clients.
            </p>
          </div>
          
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-green/10">
                  <value.icon className="h-8 w-8 text-accent-green" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-light-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A dedicated team of experienced developers, designers, and DevOps engineers passionate about building great software.
            </p>
          </div>
          
          <div className="mx-auto max-w-2xl text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-accent-green/10 mb-6">
                <Users className="h-12 w-12 text-accent-green" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">Experienced Professionals</h3>
              <p className="text-gray-600">
                Our team brings together expertise in frontend development, backend architecture, 
                mobile development, and DevOps practices. We're committed to continuous learning 
                and staying current with the latest technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        title="Ready to work with us?"
        description="Let's discuss how we can help bring your vision to life with our expertise and collaborative approach."
        ctaText="Start a Conversation"
      />
    </>
  )
}
