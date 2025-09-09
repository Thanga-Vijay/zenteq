'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* subtle decorative gradient */}
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" style={{background:"radial-gradient(800px 400px at 10% 10%, rgba(255,255,255,0.2), transparent), radial-gradient(600px 300px at 90% 20%, rgba(16,185,129,0.25), transparent)"}} />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Scalable Web, Mobile & DevOps Solutions.
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-200">
              Helping startups ship scalable digital products faster, safer, and cost‑effectively—end to end.
            </p>
            {/* Center the primary CTA exactly in the middle with a gentle float animation */}
            <div className="mt-10 flex justify-center">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact" className="transition-transform will-change-transform hover:-translate-y-0.5">
                  Get a Free Consultation
                </Link>
              </Button>
            </div>
            {/* Secondary action displayed below, still centered */}
            <div className="mt-4 flex justify-center">
              <Button asChild variant="navy" size="lg">
                <Link href="/services" className="transition-transform will-change-transform hover:translate-x-0.5">
                  Start Your Project
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
