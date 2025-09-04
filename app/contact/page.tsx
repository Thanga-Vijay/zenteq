import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
import { Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Tell us about your project and we\'ll get back within one business day. Contact Zenteq for web, mobile, and DevOps solutions.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Tell us about your project and we'll get back within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">Send us a message</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Ready to start your project? We're here to help you bring your vision to life. 
                    Get in touch with us and let's discuss how we can help your business grow.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">Email</h3>
                      <p className="text-gray-600">contact@zenteq.in</p>
                      <p className="text-sm text-gray-500">We'll respond within one business day</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">Location</h3>
                      <p className="text-gray-600">India</p>
                      <p className="text-sm text-gray-500">Serving clients globally</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-sm text-gray-500">Weekend support available for urgent projects</p>
                    </div>
                  </div>
                </div>

                <div className="bg-light-gray rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-navy mb-4">What to expect</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                      <span>Response within one business day</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                      <span>Free consultation call to discuss your project</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                      <span>Detailed proposal with timeline and cost</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                      <span>Transparent communication throughout the process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
