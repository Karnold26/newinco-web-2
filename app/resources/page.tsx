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
        <article className="nc-surface group p-7 transition-colors hover:border-foreground/15">
          <span className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground">
            <FileText className="size-4" />
          </span>
          <h2 className="mt-4 font-heading text-lg text-foreground">
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
