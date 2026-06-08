import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const stats = [
  { value: '45+', label: 'Years of Excellence' },
  { value: '2,500+', label: 'Placements Completed' },
  { value: '150+', label: 'Am Law 200 Firms Served' },
  { value: 'Worldwide', label: 'Reach & Connections' },
]

const services = [
  {
    title: 'Placements',
    body: 'Precisely the right person for the right position. We place partners and associates at every level of the Am Law 200 and beyond, matching talent with culture, ambition, and opportunity.',
  },
  {
    title: 'Searches',
    body: 'Strategic talent acquisition for firms seeking to expand their capabilities. We identify candidates whose expertise, reputation, and vision align with your firm\u2019s trajectory.',
  },
  {
    title: 'Acquisitions',
    body: 'Facilitating practice group mergers and full firm combinations. We navigate the complexities of cultural integration, compensation structures, and strategic alignment.',
  },
  {
    title: 'Placement',
    body: 'Opening doors to new business opportunities for lawyers and law firms. Leveraging our deep DC connections and global network to drive growth wherever you operate.',
  },
]

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
            <p className="mb-12 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              X: 38.8972&deg; &mdash; Y: -77.0369&deg;
            </p>
            <p className="nc-eyebrow mb-8">Est. 1970s &mdash; Washington, DC</p>

            <h1 className="nc-display max-w-4xl text-6xl text-foreground sm:text-7xl lg:text-[7.5rem]">
              Your Navigator
              <br />
              <span className="text-primary">In Law</span>
            </h1>

            <div className="mt-12 grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
              <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                Pinpoint legal recruitment for the world&apos;s most demanding
                firms. We listen. We research. We analyze. We place &mdash;
                precisely.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 bg-primary px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore Services
                <ArrowDownRight className="size-4" />
              </Link>
              <Link
                href="/about"
                className="font-mono text-xs uppercase tracking-[0.18em] text-foreground underline-offset-8 hover:underline"
              >
                About the Firm
              </Link>
            </div>
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

        {/* Service Matrix */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
            <p className="nc-eyebrow mb-8">Capabilities</p>
            <h2 className="nc-display text-5xl sm:text-6xl lg:text-7xl">
              The Service
              <br />
              <span className="text-muted-foreground">Matrix</span>
            </h2>

            <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <div key={service.title} className="bg-background p-7">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 font-heading text-xl font-extrabold uppercase tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
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
