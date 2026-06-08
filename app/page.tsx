import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Compass, Scale, Handshake, Globe } from 'lucide-react'
import { AnimatedBackground } from '@/components/animated-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

const highlights = [
  {
    icon: Scale,
    title: 'American Lawyer Top 200',
    body: 'Matching the best firms with the best practitioners, in all practice areas and at all levels.',
  },
  {
    icon: Handshake,
    title: 'Discretion & Professionalism',
    body: 'We conduct our business with the utmost discretion, because that is how our clients conduct theirs.',
  },
  {
    icon: Globe,
    title: 'Washington & Worldwide',
    body: 'Beltway insiders with powerful connections, working with firms and corporations around the globe.',
  },
]

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Worldwide Attorney Search &amp; Acquisition
              </p>
              <h1 className="text-balance font-heading text-4xl font-normal leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
                Your Navigator In The Search For Legal Excellence
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                The NewinCo is a boutique firm specializing in the placement of
                top legal talent in Washington and around the world. We have
                been matching the best firms with the best practitioners
                through market gyrations dating back to the 1970s.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  nativeButton={false}
                  render={
                    <Link href="/lawyers">
                      For Lawyers
                      <ArrowRight className="size-4" />
                    </Link>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  nativeButton={false}
                  render={<Link href="/law-firms">For Law Firms</Link>}
                />
              </div>
            </div>

            <div className="nc-surface p-8">
              <Image
                src="/newinco-logo.jpg"
                alt="The NewinCo logo"
                width={194}
                height={86}
                priority
                className="h-auto w-40"
              />
              <p className="mt-6 font-heading text-lg text-foreground">
                Matching the best firms with the best practitioners.
              </p>
              <div className="mt-6 space-y-1 text-sm text-muted-foreground">
                <p>1455 Pennsylvania Avenue, NW</p>
                <p>Suite 1180</p>
                <p>Washington, DC 20004</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="nc-surface grid gap-8 p-8 sm:p-10 lg:grid-cols-2">
            <p className="text-pretty leading-relaxed text-foreground/85">
              Whether you are in search of a new professional home, or expanded
              expertise for your firm, we have the background, experience and
              market information to guide you. We have moved individuals and
              practice groups, led law firm mergers, and placed corporate
              counsel. We conduct our business with the utmost discretion and
              professionalism, because that is how our clients conduct their
              business.
            </p>
            <p className="text-pretty leading-relaxed text-foreground/85">
              The members of our firm have seen the legal world from all
              sides&mdash;as practitioners, support staff, in-house recruiters,
              and marketing professionals within law firms. We are insiders with
              inside information, and our contacts are wide and deep. Though the
              marketplace looks daunting and newly challenging, we have seen it
              all before, and we can navigate these waters.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="nc-surface p-6 transition-colors hover:border-foreground/15"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground">
                  <item.icon className="size-4" />
                </span>
                <h3 className="mt-4 font-heading text-base text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-6 rounded-lg bg-primary px-8 py-14 text-center text-primary-foreground">
            <Compass className="size-7 opacity-80" />
            <h2 className="text-balance font-heading text-2xl font-normal sm:text-3xl">
              Let us navigate these waters with you.
            </h2>
            <p className="max-w-2xl text-pretty text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              We listen. We research. We analyze. We advise. We facilitate. We
              place. Reach out to begin a confidential conversation.
            </p>
            <Button
              size="lg"
              variant="secondary"
              nativeButton={false}
              render={
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
