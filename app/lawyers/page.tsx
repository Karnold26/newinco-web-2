import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export const metadata = {
  title: 'Lawyers — The NewinCo, Inc.',
  description:
    'Individual attorney placement conducted with complete discretion. Your identity stays protected throughout.',
}

const steps = [
  {
    number: '01',
    title: 'We Do the Research First.',
    body: 'Before your name is mentioned anywhere, we conduct a full market survey — identifying firms that genuinely fit your goals, culture, and trajectory. Dead ends are eliminated before they start.',
  },
  {
    number: '02',
    title: 'You Choose Who We Approach.',
    body: 'We present you with a shortlist of firms we believe are the right fit. You review. You decide. Only the firms you approve ever hear your name.',
  },
  {
    number: '03',
    title: 'Your Identity Is Protected.',
    body: 'We do not reveal who you are until the receiving firm has demonstrated serious, credible interest. Your current position is never put at risk.',
  },
  {
    number: '04',
    title: 'Fewer Conversations. Better Outcomes.',
    body: 'Because our market intelligence is deep and our relationships are longstanding, we move precisely — not broadly. Your candidacy reaches fewer desks, but the right ones.',
  },
  {
    number: '05',
    title: 'Full Preparation at Every Step.',
    body: 'Before every meeting we brief you on the firm, the people, and what to expect. After every meeting we debrief, gather feedback, and adjust.',
  },
  {
    number: '06',
    title: 'We Work the Deal.',
    body: 'We analyze every offer, present the terms clearly, and work toward an outcome that meets your goals — not just any offer, but the right one.',
  },
  {
    number: '07',
    title: 'An Ethical Exit.',
    body: 'We provide the tools and methodology to disengage from your current firm in full accordance with the Canons of Ethics — professionally and cleanly.',
  },
  {
    number: '08',
    title: 'Support Until You Are Settled.',
    body: 'Our commitment does not end at the offer. We are available at any hour to support you through every stage of the transition.',
  },
]

export default function LawyersPage() {
  return (
    <PageShell>

      {/* Hero split */}
      <div className="grid gap-0 lg:grid-cols-2 mb-20">
        <div className="flex flex-col justify-center gap-8 pr-0 lg:pr-16">
          <p className="nc-eyebrow">For Lawyers</p>
          <h1 className="nc-display text-5xl sm:text-6xl lg:text-7xl">
            Your name reaches
            <br />
            <span className="text-muted-foreground">fewer people.</span>
          </h1>
          <p className="text-lg leading-relaxed text-foreground/70 max-w-md">
            Because we know the market better than anyone else, we do not need to cast a wide net. Your candidacy goes exactly where it should — and nowhere it shouldn't.
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
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
            alt="Professional attorney"
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
          Other recruiters send your name to dozens of firms and wait to see what sticks. We do not work that way. Our experience, connections, and market intelligence mean we already know which firms are the right fit — before your name is ever mentioned.
        </p>
      </div>

      {/* Our Course of Action */}
      <div className="mb-20">
        <p className="nc-eyebrow mb-8">Our Course of Action</p>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.number} className="bg-background p-8 space-y-4">
              <span className="font-mono text-xs text-primary">{s.number}</span>
              <h3 className="font-heading text-base font-extrabold uppercase tracking-tight text-foreground">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/70">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How we work */}
      <div className="grid gap-16 lg:grid-cols-2 items-center mb-20">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900&q=80"
            alt="Professional meeting"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <p className="nc-eyebrow">Why It Works</p>
          <div className="space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Most recruiters work by volume. We work by precision. Our contact base, built over decades at the highest levels of the Washington legal market, means we already know who is open, which firms are growing, and where the right opportunities exist — before a single call is made.
            </p>
            <p>
              That intelligence is what keeps your name off unnecessary desks. We approach only the firms we are confident about, only after you have approved them, and only when the timing is right.
            </p>
            <p>
              The result: a faster, cleaner process — with fewer people knowing you are looking, and a better outcome at the end of it.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-border pt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="nc-eyebrow mb-4">Ready to Explore?</p>
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