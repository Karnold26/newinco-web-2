import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

const team = [
  { name: 'Marcia B. Newell' },
  { name: 'Lacey S. Wingard' },
  { name: 'Jackie Emma' },
  { name: 'Betty Leach Hawkins' },
  { name: 'Michael Inman' },
  { name: 'Kennon Arnold', href: '/team/kennon-arnold' },
]

export const metadata = {
  title: 'About Us — The NewinCo, Inc.',
  description:
    'The NewinCo provides search and recruitment counseling and placement services solely to attorneys, law firms and corporations.',
}

export default function AboutPage() {
  return (
    <PageShell>

      {/* Hero split */}
      <div className="grid gap-0 lg:grid-cols-2 mb-20">
        <div className="flex flex-col justify-center gap-8 pr-0 lg:pr-16">
          <p className="nc-eyebrow">Who We Are</p>
          <h1 className="nc-display text-5xl sm:text-6xl lg:text-7xl">
            Insiders with
            <br />
            <span className="text-muted-foreground">inside information.</span>
          </h1>
          <p className="text-lg leading-relaxed text-foreground/70 max-w-md">
            Established in Washington, DC, The NewinCo provides search and recruitment counseling and placement services solely to attorneys, law firms and corporations.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 self-start font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:text-primary transition-colors"
          >
            Get in Touch
            <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden mt-10 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=900&q=80"
            alt="Washington DC"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Lead statement */}
      <div className="border-l-2 border-primary pl-8 py-2 max-w-2xl mb-16">
        <p className="text-xl leading-relaxed text-foreground/80">
          Our staff have over thirty years of collective experience in the field on five continents. We regard our clients as our primary assets — and our goal is always the creation of long-term personal relationships.
        </p>
      </div>

      {/* Two col text */}
      <div className="grid gap-16 lg:grid-cols-2 mb-20">
        <div className="space-y-4 text-base leading-relaxed text-foreground/80">
          <p className="nc-eyebrow mb-6">Our History</p>
          <p>
            Established in 2002 in Washington, DC, The NewinCo has placed partners, associates, counsel and general counsel in law firms and corporations around the world.
          </p>
          <p>
            In our many years of professional experience we have shepherded law firm mergers, strategized law firm expansions, recruited teams to launch new offices and counseled countless clients to achieve their professional objectives.
          </p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-foreground/80">
          <p className="nc-eyebrow mb-6">Our Approach</p>
          <p>
            The members of our firm have seen the legal world from all sides — as practitioners, support staff, in-house recruiters, and marketing professionals.
          </p>
          <p>
            We are Beltway insiders with powerful legal market connections at both the private and public sector levels. We provide as much support as is needed to ensure success — and we stick around long after the placement is made.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="border-t border-border pt-16 mb-20">
        <p className="nc-eyebrow mb-8">Our Team</p>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-background p-8 flex items-center gap-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center border border-border font-heading text-xs text-muted-foreground">
                {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
              </span>
              {member.href ? (
                <Link
                  href={member.href}
                  className="font-heading text-sm font-extrabold uppercase tracking-tight text-foreground hover:text-primary transition-colors"
                >
                  {member.name}
                </Link>
              ) : (
                <span className="font-heading text-sm font-extrabold uppercase tracking-tight text-foreground">
                  {member.name}
                </span>
              )}
            </div>
          ))}
        </div>
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