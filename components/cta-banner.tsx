import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTABannerProps {
  title?: string
  description?: string
  ctaText?: string
  ctaHref?: string
}

export function CTABanner({ 
  title = "Ready to accelerate your roadmap?",
  description = "Book a free 15‑minute consultation. Get timelines, costs, and a clear plan.",
  ctaText = "Book a Free Consultation",
  ctaHref = "/contact"
}: CTABannerProps) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild variant="primary" size="lg">
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
