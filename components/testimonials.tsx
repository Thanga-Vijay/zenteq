'use client'

import { motion } from 'framer-motion'

type Testimonial = {
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Zenteq delivered our MVP in weeks, not months. Clear communication and solid engineering throughout.',
    author: 'S. Kumar',
    role: 'Founder, RetailTech'
  },
  {
    quote:
      'Their DevOps automation cut our deployment time by 60% and improved reliability immediately.',
    author: 'A. Verma',
    role: 'CTO, FinServe'
  },
  {
    quote:
      'Quality-first mindset. Strong TypeScript practices and scalable architectures we can build on.',
    author: 'R. Iyer',
    role: 'Head of Engineering, HealthOps'
  }
]

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">What clients say</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Brief words from teams we helped ship and scale.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg bg-white p-6 shadow-sm border"
            >
              <p className="text-gray-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-gray-500">
                <span className="font-medium text-gray-700">{t.author}</span> · {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}


