'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Scalable Web, Mobile & DevOps Solutions.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We help startups and SMEs ship modern, reliable products—faster. From MVP to scale, Zenteq delivers clean code, resilient infra, and measurable results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button asChild variant="navy" size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
