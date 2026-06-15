import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export const metadata = {
  title: 'Our Team — The NewinCo, Inc.',
  description: 'Meet the team behind The NewinCo.',
}

const team = [
  {
    name: 'Marcia B. Newell',
    title: 'Founder & Managing Director',
    email: 'mbnewell@newinco.com',
    direct: '202-973-1310',
    mobile: '202-600-1320',
    slug: 'marcia-newell',
  },
  {
    name: 'Michael Inman',
    title: 'Recruiter',
    email: 'minman@newinco.com',
    direct: '202-973-1327',
    mobile: '917-509-8434',
    slug: 'michael-inman',
  },
  {
    name: 'Betty Leach Hawkins',
    title: 'Recruiter',
    email: 'bhawkins@newinco.com',
    direct: '202-973-1345',
    mobile: '202-997-1511',
    slug: 'betty-hawkins',
  },
  {
    name: 'Kennon Arnold',
    title: 'Recruiter',
    email: 'karnold@newinco.com',
    direct: '202-973-1353',
    mobile: '202-909-3347',
    slug: 'kennon-arnold',
  },
  {
    name: 'Sarah Moriarty',
    title: 'Recruiter',
    email: 'smoriarty@newinco.com',
    direct: '202-973-1360',
    mobile: '202-555-0192',
    slug: 'sarah-moriarty',
  },
]

export default function TeamPage() {
  return (
    <PageShell>
      {/* Header */}
      <div className="border-b border-border pb-16 mb-16">
        <p className="nc-eyebrow mb-6">The People</p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="nc-display text-5xl sm:text-6xl lg:text-7xl">
              The team
              <br />
              <span className="text-muted-foreground">behind the firm.</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-foreground/70 max-w-md">
              Our recruiters have seen the legal world from all sides — as practitioners, in-house counsel, and marketing professionals. We are Beltway insiders with connections that run deep.
            </p>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=1200&q=80"
              alt="Avenue of the Americas"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Team grid */}
      <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mb-24">
        {team.map((member) => (
          <div key={member.name} className="group">

            {/* Photo */}
            <Link href={`/team/${member.slug}`} className="block mb-5">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-6xl font-extrabold text-muted-foreground/20">
                    {member.name.split(' ').map((n) => n[0] ?? '').join('').slice(0, 2)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
            </Link>

            {/* Name & title */}
            <Link href={`/team/${member.slug}`} className="block mb-4">
              <p className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                {member.name}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {member.title}
              </p>
            </Link>

            {/* Contact */}
            <div className="border-t border-border pt-4 space-y-1.5">
              <Link
                href={`mailto:${member.email}`}
                className="block font-mono text-xs text-primary hover:underline"
              >
                {member.email}
              </Link>
              <Link
                href={`tel:${member.direct}`}
                className="block font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {member.direct} direct
              </Link>
              <Link
                href={`tel:${member.mobile}`}
                className="block font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {member.mobile} mobile
              </Link>
            </div>

          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-border pt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="nc-eyebrow mb-4">Ready to Begin?</p>
          <h2 className="nc-display text-4xl sm:text-5xl">
            Let&apos;s talk —<br />
            <span className="text-muted-foreground">in confidence.</span>
          </h2>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 self-start font-mono text-sm uppercase tracking-[0.18em] text-foreground sm:self-end"
        >
          Start a Conversation
          <ArrowUpRight className="size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </PageShell>
  )
}