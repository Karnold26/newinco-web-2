import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { teamMembers } from '@/lib/team-members'

export const metadata = {
  title: 'Our Team — The NewinCo, Inc.',
  description: 'Meet the team behind NewinCo.',
}

export default function TeamPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="sticky top-0 z-50 bg-background">
        <SiteHeader />
      </div>

      {/* Hero — full-bleed, sits above the padded main on purpose */}
      <section className="relative overflow-hidden border-b border-border min-h-[55vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1685454578722-a0cc29a302c7?w=1800&q=80"
          alt="New York City skyline with One World Trade Center"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full py-16">
          <p className="nc-eyebrow mb-6 !text-white/70">The People</p>
          <h1 className="nc-display text-5xl text-white sm:text-6xl lg:text-7xl">
            The Team
            <br />
            <span className="text-primary">Behind the Firm</span>
          </h1>
          <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-white/80">
            Our recruiters have seen the legal world from all sides — as practitioners, in-house counsel, and marketing professionals. We are Beltway insiders with connections that run deep.
          </p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">

        {/* Roster — everyone, one list */}
        <div className="mb-24">
          <p className="nc-eyebrow mb-8">The Team</p>
          <div className="divide-y divide-border border-t border-border">
            {teamMembers.map((member) => (
              <Link
                key={member.name}
                href={`/team/${member.slug}`}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div>
                  <p className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {member.name}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {member.title}
                  </p>
                </div>
                <p className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground sm:text-right">
                  {member.email} · {member.direct}
                </p>
              </Link>
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
      </main>

      <SiteFooter />
    </>
  )
}