import { PageShell, PageHeader } from '@/components/page-shell'
import { FileText } from 'lucide-react'

export const metadata = {
  title: 'Resources — The NewinCo, Inc.',
  description: 'Helpful resources from The NewinCo, Inc.',
}

export default function ResourcesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Helpful Reading"
        title="Resources"
        intro="A collection of resources to support your professional journey."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <article className="group rounded-2xl border border-border/70 bg-card/60 p-7 backdrop-blur-sm transition-shadow hover:shadow-md">
          <span className="inline-flex size-11 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
            <FileText className="size-5" />
          </span>
          <h2 className="mt-4 font-heading text-xl text-primary">
            Bev&apos;s Tips for A Better Work Life
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Practical guidance for navigating the demands of the legal
            profession with balance and intention.
          </p>
        </article>
      </div>
    </PageShell>
  )
}
