import { PageShell, PageHeader } from '@/components/page-shell'
import { CalendarDays } from 'lucide-react'

export const metadata = {
  title: 'News & Events — The NewinCo, Inc.',
  description: 'News and upcoming events from The NewinCo, Inc.',
}

export default function NewsPage() {
  return (
    <PageShell>
      <PageHeader eyebrow="Stay Informed" title="News & Events" />

      <div className="nc-surface flex flex-col items-center justify-center px-8 py-20 text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-md border border-border text-muted-foreground">
          <CalendarDays className="size-6" />
        </span>
        <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          Please check back for news about our upcoming events!
        </p>
      </div>
    </PageShell>
  )
}
