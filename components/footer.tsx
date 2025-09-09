import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
  social: [
    { name: 'Twitter (X)', href: 'https://twitter.com/zenteq', icon: Twitter },
    { name: 'Instagram', href: 'https://instagram.com/zenteq', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zenteq', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/zenteq', icon: Github },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy">
      {/* top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-accent-green/60 via-white/40 to-accent-green/60" />
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* link columns */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">Services</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/services#web-app" className="text-xs text-gray-300 hover:text-white transition-colors">Web Apps</Link></li>
              <li><Link href="/services#mobile-app" className="text-xs text-gray-300 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services#backend" className="text-xs text-gray-300 hover:text-white transition-colors">Backend & APIs</Link></li>
              <li><Link href="/services#devops" className="text-xs text-gray-300 hover:text-white transition-colors">DevOps</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">Company</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/about" className="text-xs text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-xs text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">Resources</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/privacy" className="text-xs text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-xs text-gray-300 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">Connect</h3>
            <div className="mt-3 flex items-center gap-3">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition-colors">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-gray-300">contact@zenteq.in · India</p>
          </div>
        </div>
        {/* bottom bar */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <p className="text-[11px] text-gray-400">&copy; {currentYear} Zenteq Pvt. Ltd.</p>
          <nav className="hidden sm:flex gap-4" aria-label="Footer small">
            {navigation.main.slice(0,4).map((item) => (
              <Link key={item.name} href={item.href} className="text-[11px] text-gray-300 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
