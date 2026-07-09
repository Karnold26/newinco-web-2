import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export const metadata = {
  title: 'About Us — The NewinCo, Inc.',
  description:
    'The NewinCo, Inc. provides search and recruitment counseling and placement services solely to attorneys, law firms and corporations.',
}

export default function AboutPage() {
  return (
    <PageShell>

      {/* Centered intro — no split photo here, the photo lives at the bottom instead */}
      <div className="mx-auto max-w-2xl text-center mb-8">
        <p className="nc-eyebrow">Who We Are</p>
        <h1 className="nc-display mt-3 text-4xl sm:text-5xl lg:text-6xl">
          Insiders with
          <br />
          <span className="text-muted-foreground">inside information.</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-foreground/70 sm:text-lg">
          Established in Washington, DC, The NewinCo, Inc. provides search and recruitment counseling and placement services solely to attorneys, law firms and corporations.
        </p>
        <Link
          href="/contact"
          className="group mt-4 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:text-primary transition-colors"
        >
          Get in Touch
          <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Lead statement */}
      <div className="border-l-2 border-primary pl-6 py-1 max-w-2xl mx-auto mb-6">
        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          Our staff have over thirty years of collective experience in the field on five continents. We regard our clients as our primary assets — and our goal is always the creation of long-term personal relationships.
        </p>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto space-y-3 text-sm leading-relaxed text-foreground/80 sm:text-base mb-10">
        <p>
          Established in 2002 in Washington, DC, NewinCo has placed partners, associates, counsel and general counsel in law firms and corporations around the world. In our many years of professional experience we have shepherded law firm mergers, strategized law firm expansions, recruited teams to launch new offices and counseled countless clients to achieve their professional objectives.
        </p>
        <p>
          The members of our firm have seen the legal world from all sides — as practitioners, support staff, in-house recruiters, and marketing professionals. We are Beltway insiders with powerful legal market connections at both the private and public sector levels. We provide as much support as is needed to ensure success — and we stick around long after the placement is made.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-y-6 border-y border-border py-6 sm:grid-cols-4 mb-16">
        {[
          { value: '45+', label: 'Years of Excellence' },
          { value: '2,500+', label: 'Placements Completed' },
          { value: '150+', label: 'Am Law 200 Firms Served' },
          { value: 'Worldwide', label: 'Reach & Connections' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-2xl font-extrabold text-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Closing photo — full bleed, breaks out of the shell's max-width container */}
      <div className="relative -mx-4 sm:-mx-6 lg:left-1/2 lg:right-1/2 lg:-ml-[50vw] lg:-mr-[50vw] lg:w-screen aspect-[16/9] sm:aspect-[21/9] mb-20">
        <img
          src="https://images.unsplash.com/photo-1664737403725-928fe37f61f1?w=2000&q=80"
          alt="U.S. Capitol building, Washington, DC"
          className="h-full w-full object-cover"
        />
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