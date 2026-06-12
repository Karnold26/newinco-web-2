import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell, PageHeader } from '@/components/page-shell'

export const metadata = {
  title: 'Law Firms — The NewinCo, Inc.',
  description:
    'Pinpoint recruitment conducted with total discretion. Your goals stay between us.',
}

const pillars = [
  {
    number: '01',
    title: 'Deep Market Intelligence.',
    body: 'The best candidates are often not on the market. With decades of relationships across the legal industry, we know who may be open to the right opportunity before anyone else does.',
  },
  {
    number: '02',
    title: 'Fewer Calls. Less Exposure.',
    body: 'We do not cast a wide net. Every outreach is deliberate and targeted, reducing market noise and keeping your strategic goals confidential.',
  },
  {
    number: '03',
    title: 'Controlled Disclosure.',
    body: "We do not reveal your firm's identity too early in the process. Details are shared only when the timing is right and the candidate is credible, helping protect the confidentiality of your search.",
  },
  {
    number: '04',
    title: 'Long-Term Relationships Only.',
    body: 'We will never advise you to pursue a deal that is not in your best interest. Our business is built entirely on trust — and that is not something we trade away for a fee.',
  },
]

export default function LawFirmsPage() {
  return (
    <PageShell>

      {/* Hero split */}
      <div className="grid gap-0 lg:grid-cols-2 mb-20">
        <div className="flex flex-col justify-center gap-8 pr-0 lg:pr-16">
          <p className="nc-eyebrow">For Law Firms</p>
          <h1 className="nc-display text-5xl sm:text-6xl lg:text-7xl">
            Your goals
            <br />
            <span className="text-muted-foreground">stay between us.</span>
          </h1>
          <p className="text-lg leading-relaxed text-foreground/70 max-w-md">
            Pinpoint recruitment conducted with total discretion. We identify precisely the right talent — in as few conversations as possible.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 self-start font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:text-primary transition-colors"
          >
            Start a Conversation
            <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden mt-10 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=900&q=80"
            alt="Washington DC building"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center lg:col-span-2 mt-8 animate-bounce">
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
            className="text-primary"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Lead statement */}
      <div className="border-l-2 border-primary pl-8 py-2 max-w-2xl mb-16">
        <p className="text-xl leading-relaxed text-foreground/80">
          The fewer people who know your firm is searching, the better. We operate on that principle in everything we do — targeted outreach, tight circles, and absolute confidentiality at every step.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid gap-px bg-border sm:grid-cols-2 mb-20">
        {pillars.map((p) => (
          <div key={p.number} className="bg-background p-8 space-y-4">
            <span className="font-mono text-xs text-primary">{p.number}</span>
            <h3 className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      {/* How we work */}
      <div className="grid gap-16 lg:grid-cols-2 items-center mb-20">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
            alt="Professional meeting room"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="nc-eyebrow">How We Work</p>
          <div className="space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Our contact base, grown over decades working with the most successful firms and practitioners, is unparalleled in the Washington market. We know how to identify lawyers who are not looking — but who could be precisely what you need — and how to reach them without exposing your firm's intentions.
            </p>
            <p>
              We ask the tough questions at the outset, run conflict scenarios, and control disclosure of your identity until the timing is right. By the time a candidate reaches you, the hard work is done.
            </p>
            <p>
              Because our business is built entirely on long-term relationships, we will never advise you to pursue a deal that is not in your best interest.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border pt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="nc-eyebrow mb-4">Ready to Begin?</p>
          <h2 className="nc-display text-4xl sm:text-5xl">
            Let&apos;s talk — <br />
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
