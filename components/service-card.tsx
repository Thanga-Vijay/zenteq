import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  ctaText?: string
  ctaHref?: string
  technologies?: string[]
}

export function ServiceCard({ icon: Icon, title, description, features, ctaText = "Learn More", ctaHref = "/services", technologies = [] }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-accent-green/10 rounded-lg">
            <Icon className="h-6 w-6 text-accent-green" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="list-disc list-inside space-y-2 mb-6 text-sm text-gray-600">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Button asChild variant="primary" className="w-full">
          <Link href={ctaHref}>{ctaText}</Link>
        </Button>
        {technologies.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-navy mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
