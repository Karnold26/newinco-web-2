import Link from 'next/link'
import { PageShell, PageHeader } from '@/components/page-shell'
import { ArrowLeft, Mail, Phone } from 'lucide-react'

export const metadata = {
  title: 'Kennon Arnold — The NewinCo, Inc.',
  description:
    'Kennon Arnold is a recruiting professional focused on attorney recruiting and lateral partner movement at The NewinCo.',
}

export default function KennonArnoldPage() {
  return (
    <PageShell>
      <Link
        href="/about"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to Our Team
      </Link>

      <PageHeader
        eyebrow="Our Team"
        title="Kennon Arnold"
        intro="Recruiting professional focused on attorney recruiting and lateral partner movement."
      />

      <div className="max-w-3xl space-y-6 rounded-2xl border border-border/70 bg-card/60 p-8 leading-relaxed text-foreground/90 backdrop-blur-sm">
        <p>
          Kennon Arnold is a recruiting professional focused on attorney
          recruiting and lateral partner movement. He brings a research-driven
          approach to recruiting, using market intelligence alongside a genuine
          effort to understand each attorney&apos;s practice and goals in order
          to help attorneys make informed career decisions. Prior to joining
          NewinCo, Kennon worked on the analytics side of another search firm,
          supporting partner recruitment from initial market research through
          deal execution, providing analysis and intelligence throughout the
          whole process.
        </p>
        <p>
          Kennon is known for being responsive and easy to work with. He
          approaches each conversation with curiosity and care, asking thoughtful
          questions to understand what matters most. His practical style helps
          attorneys and firms feel informed, comfortable, and confident throughout
          a search.
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-sm">
        <h2 className="font-heading text-lg text-primary">Contact</h2>
        <ul className="mt-4 space-y-2.5 text-sm">
          <li className="flex items-center gap-2.5 text-muted-foreground">
            <Phone className="size-4 shrink-0 text-ring" aria-hidden="true" />
            <a
              href="tel:2029731323"
              className="hover:text-foreground"
            >
              202-973-1323
            </a>
            <span className="text-xs uppercase tracking-wide">direct</span>
          </li>
          <li className="flex items-center gap-2.5 text-muted-foreground">
            <Mail className="size-4 shrink-0 text-ring" aria-hidden="true" />
            <a
              href="mailto:lkappock@newinco.com"
              className="break-all hover:text-foreground"
            >
              lkappock@newinco.com
            </a>
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
