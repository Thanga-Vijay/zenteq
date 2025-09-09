'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setVisible(y > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed) return null

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-40 px-4 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="mx-auto max-w-3xl rounded-xl border bg-white/95 backdrop-blur p-4 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-gray-700">
            Ready to ship faster? Book a free 15‑min consultation.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-accent-green px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-accent-green/90 transition-colors"
            >
              Book Now
            </Link>
            <button
              aria-label="Dismiss"
              onClick={() => setDismissed(true)}
              className="rounded-md border px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


