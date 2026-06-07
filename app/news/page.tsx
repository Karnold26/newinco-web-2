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

      <div className="flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-card/60 px-8 py-20 text-center backdrop-blur-sm">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <CalendarDays className="size-7" />
        </span>
        <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          Please check back for news about our upcoming events!
        </p>
      </div>
    </PageShell>
  )
}
