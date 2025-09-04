import { CheckCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Pre-Sales',
    description: 'Requirements, proposal (timeline + cost + deliverables), NDA, 20–30% advance.',
    details: [
      'Requirements gathering and analysis',
      'Detailed proposal with timeline and cost',
      'Non-disclosure agreement',
      'Project kickoff with advance payment'
    ]
  },
  {
    id: 2,
    title: 'Development',
    description: 'Trello for tasks, Zoho Cliq updates, GitHub PR reviews, weekly demos.',
    details: [
      'Agile development with Trello task management',
      'Regular updates via Zoho Cliq',
      'Code review through GitHub PRs',
      'Weekly demo sessions for feedback'
    ]
  },
  {
    id: 3,
    title: 'Delivery & Support',
    description: 'Deploy, docs handover, 30 days free support, AMC/retainer.',
    details: [
      'Production deployment and testing',
      'Documentation and knowledge transfer',
      '30 days free support period',
      'Annual maintenance contract options'
    ]
  }
]

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Our Development Process
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From concept to deployment, we follow a proven 3-phase process that ensures quality, transparency, and successful delivery.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 lg:left-1/2 lg:transform lg:-translate-x-1/2" />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative flex items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-8 flex h-16 w-16 items-center justify-center rounded-full bg-accent-green text-white lg:left-1/2 lg:transform lg:-translate-x-1/2">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-24 lg:ml-0 lg:mr-12 lg:text-right">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <h3 className="text-xl font-semibold text-navy">{step.title}</h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                      <ul className="mt-4 space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-accent-green rounded-full mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
