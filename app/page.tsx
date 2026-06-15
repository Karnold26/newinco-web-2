import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const stats = [
  { value: '45+', label: 'Years of Excellence' },
  { value: '2,500+', label: 'Placements Completed' },
  { value: '150+', label: 'Am Law 200 Firms Served' },
  { value: 'Worldwide', label: 'Reach & Connections' },
]

const testimonials = [
  {
    quote:
      'After 22 years at the same firm, I was nervous about making a move. They identified opportunities I never would have found on my own and shepherded the process with total discretion.',
    author: 'Senior Litigation Partner',
    firm: 'Placed at Am Law 30 Firm, Chicago',
    type: 'placement',
  },
  {
    quote:
      'I came to them as a seventh-year associate looking to make partner somewhere I actually fit. Within four months I had an offer that exceeded every expectation.',
    author: 'Corporate Associate',
    firm: 'Placed at Boutique M&A Firm, New York',
    type: 'placement',
  },
  {
    quote:
      'The candidates they sent us were genuinely pre-vetted — not just on paper credentials but on cultural fit. We hired two partners in one search cycle and both have been exceptional.',
    author: 'Hiring Partner',
    firm: 'Am Law 100 Firm, Washington DC',
    type: 'hiring',
  },
  {
    quote:
      'We had been trying to build out our energy practice for two years with no success. NorthCoast delivered three qualified candidates within six weeks. One is now our practice group leader.',
    author: 'Chief Talent Officer',
    firm: 'Global 100 Firm, Houston',
    type: 'hiring',
  },
]

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative border-b border-border overflow-hidden min-h-[92vh] flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=1800&q=80"
            alt="Washington DC"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/50" />

          {/* Main content */}
          <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-16 sm:px-6 sm:pt-28 w-full flex-1 flex flex-col justify-center">
            <p className="mb-12 font-mono text-xs uppercase tracking-[0.25em] text-white/60">
              X: 38.8972&deg; &mdash; Y: -77.0369&deg;
            </p>
            <p className="nc-eyebrow mb-8 !text-white/60">Est. 1970s &mdash; Washington, DC</p>

            <h1 className="nc-display max-w-4xl text-6xl text-white sm:text-7xl lg:text-[7.5rem]">
              Your Navigator
              <br />
              <span className="text-primary">In Law</span>
            </h1>

            <div className="mt-12">
              <p className="max-w-md text-pretty text-base leading-relaxed text-white/80">
                Pinpoint legal recruitment for the world&apos;s most demanding
                firms. We listen. We research. We analyze. We place &mdash;
                precisely.
              </p>
            </div>

            {/* Two CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/law-firms"
                className="inline-flex items-center gap-3 bg-primary px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                For Law Firms
                <ArrowUpRight className="size-4" />
              </Link>
              <Link
                href="/lawyers"
                className="inline-flex items-center gap-3 border border-white/50 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                For Lawyers
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="relative flex justify-center pb-10 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/50"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        {/* Stats ticker */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-4 sm:px-6 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-6 first:pl-0">
                <span className="font-heading text-xl font-extrabold text-primary">
                  {stat.value}
                </span>{' '}
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-b border-border overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
            <p className="nc-eyebrow mb-8">Client Voices</p>
            <h2 className="nc-display text-5xl sm:text-6xl lg:text-7xl">
              The Record
              <br />
              <span className="text-muted-foreground">Speaks</span>
            </h2>
          </div>
          <div className="mt-16 pb-24">
            <div
              className="flex w-max gap-6"
              style={{ animation: 'marquee 35s linear infinite' }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="flex w-80 flex-shrink-0 flex-col justify-between gap-8 border border-border bg-card px-8 py-10"
                >
                  <p className="text-sm leading-relaxed text-foreground/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-primary">
                      {t.type === 'placement' ? '— Placed Lawyer' : '— Hiring Partner'}
                    </p>
                    <p className="mt-2 font-heading text-sm font-extrabold uppercase tracking-tight text-foreground">
                      {t.author}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {t.firm}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.4fr_0.6fr]">
            <p className="nc-eyebrow">The Approach</p>
            <div className="max-w-2xl space-y-6 text-pretty text-lg leading-relaxed text-foreground/80">
              <p>
                Whether you are in search of a new professional home, or
                expanded expertise for your firm, we have the background,
                experience and market information to guide you. We have moved
                individuals and practice groups, led law firm mergers, and
                placed corporate counsel.
              </p>
              <p>
                The members of our firm have seen the legal world from all
                sides &mdash; as practitioners, support staff, in-house
                recruiters, and marketing professionals. We are insiders with
                inside information, and we provide as much support as is needed
                to ensure success.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-accent">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-24 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="nc-eyebrow mb-8">Ready to Begin?</p>
              <h2 className="nc-display text-6xl text-foreground sm:text-7xl lg:text-8xl">
                Let&apos;s
                <br />
                Connect
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 self-start font-mono text-sm uppercase tracking-[0.18em] text-foreground lg:self-end"
            >
              Start a Conversation
              <ArrowUpRight className="size-5 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}