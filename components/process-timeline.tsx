import { CheckCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Discover',
    description: 'Align on goals, scope, and success metrics. Clear plan and estimates upfront.',
    details: [
      'Workshops to clarify objectives',
      'Timeline, scope, and budget agreement',
      'Risk and architecture outline',
      'NDA and kickoff'
    ]
  },
  {
    id: 2,
    title: 'Build',
    description: 'Agile sprints with weekly demos. Code reviews and CI/CD from day one.',
    details: [
      'Design → Implement → Review (sprint loops)',
      'Automated testing and CI/CD pipelines',
      'Weekly demos and feedback incorporation',
      'Transparent progress tracking'
    ]
  },
  {
    id: 3,
    title: 'Launch & Grow',
    description: 'Production rollout, monitoring, and ongoing optimization with a success plan.',
    details: [
      'Release checklist and go‑live support',
      'Observability (logs, metrics, alerts)',
      '30‑day warranty and handover docs',
      'Retainer or AMC for continuous growth'
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
