import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Zenteq Pvt. Ltd.',
  description: 'Terms of service for Zenteq Pvt. Ltd. Learn about our service terms, conditions, and policies.',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Terms and conditions governing our services and website usage.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the services of Zenteq Pvt. Ltd. ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2>Services Description</h2>
            <p>Zenteq Pvt. Ltd. provides the following services:</p>
            <ul>
              <li>Web application development</li>
              <li>Mobile application development</li>
              <li>Backend and API development</li>
              <li>DevOps architecture and support</li>
              <li>Consulting and technical advisory services</li>
            </ul>

            <h2>Project Terms</h2>
            <h3>Project Initiation</h3>
            <ul>
              <li>Projects begin after receipt of advance payment (20-30% of total project cost)</li>
              <li>Detailed project requirements and specifications must be provided</li>
              <li>Non-disclosure agreements (NDA) may be required</li>
            </ul>

            <h3>Development Process</h3>
            <ul>
              <li>We use agile development methodologies</li>
              <li>Weekly demos and progress updates are provided</li>
              <li>Project management through Trello and communication via Zoho Cliq</li>
              <li>Code reviews and quality assurance throughout development</li>
            </ul>

            <h3>Delivery and Support</h3>
            <ul>
              <li>Projects are delivered upon completion and testing</li>
              <li>Documentation and knowledge transfer included</li>
              <li>30 days free support period after delivery</li>
              <li>Ongoing support available through maintenance contracts</li>
            </ul>

            <h2>Payment Terms</h2>
            <ul>
              <li>Advance payment of 20-30% required to start projects</li>
              <li>Remaining balance due upon project completion</li>
              <li>Monthly retainers billed in advance</li>
              <li>All payments are non-refundable unless otherwise specified</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>Upon full payment:</p>
            <ul>
              <li>Client owns all rights to the delivered code and assets</li>
              <li>We retain rights to reusable components and libraries</li>
              <li>Source code and documentation provided to client</li>
              <li>Client may use delivered work for intended purposes</li>
            </ul>

            <h2>Confidentiality</h2>
            <p>We maintain strict confidentiality regarding:</p>
            <ul>
              <li>Client business information and trade secrets</li>
              <li>Project requirements and specifications</li>
              <li>Proprietary code and algorithms</li>
              <li>Any information marked as confidential</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>Our liability is limited to:</p>
            <ul>
              <li>The amount paid for the specific service</li>
              <li>Direct damages only</li>
              <li>Exclusion of indirect, consequential, or punitive damages</li>
            </ul>

            <h2>Warranty</h2>
            <p>We warrant that:</p>
            <ul>
              <li>Services will be performed with reasonable care and skill</li>
              <li>Delivered software will function as specified</li>
              <li>We will fix any defects within the warranty period</li>
            </ul>

            <h2>Termination</h2>
            <p>Either party may terminate services with written notice:</p>
            <ul>
              <li>Client: 30 days written notice</li>
              <li>Company: 30 days written notice for non-payment or breach</li>
              <li>Immediate termination for material breach</li>
            </ul>

            <h2>Force Majeure</h2>
            <p>Neither party is liable for delays or failures due to circumstances beyond reasonable control, including but not limited to natural disasters, government actions, or technical failures.</p>

            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes will be resolved through arbitration or mediation.</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of services constitutes acceptance of modified terms.</p>

            <h2>Contact Information</h2>
            <p>For questions about these terms, contact us at:</p>
            <p>
              <strong>Email:</strong> contact@zenteq.in<br />
              <strong>Address:</strong> India
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
