import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageShell, PageHeader } from '@/components/page-shell'

export const metadata = {
  title: 'Lawyers — The NewinCo, Inc.',
  description:
    'Individual attorney placement conducted with complete discretion. Your identity stays protected throughout.',
}

const steps = [
  {
    number: '01',
    title: 'Market Survey.',
    body: 'We conduct a survey of firms that meet your stated goals, gathering information in a way that fully protects your identity and does not betray your confidentiality.',
  },
  {
    number: '02',
    title: 'Firm Presentation.',
    body: 'We present you with firms that meet your goals, providing detailed background information about each firm and its practice — so you can make an informed decision.',
  },
  {
    number: '03',
    title: 'Your Permission, Always.',
    body: 'We ask your permission before approaching any firm on your behalf. Nothing moves forward without your explicit authorization at every step.',
  },
  {
    number: '04',
    title: 'Controlled Introduction.',
    body: 'With your approval, we identify and present your candidacy and its benefits to the potential acquiring firm — carefully and deliberately.',
  },
  {
    number: '05',
    title: 'Interview Preparation.',
    body: 'We schedule interviews upon your authorization and prepare you for each meeting, providing background on the individuals you will meet.',
  },
  {
    number: '06',
    title: 'Debrief & Feedback.',
    body: 'After each meeting we debrief you, obtain feedback, and adjust our approach to work toward a deal that meets the needs of all parties.',
  },
  {
    number: '07',
    title: 'Offer Analysis.',
    body: 'We analyze each offer and present the terms clearly, ensuring you understand exactly what is on the table before making any decisions.',
  },
  {
    number: '08',
    title: 'Through to the End.',
    body: 'We ensure the terms of the offer are met, provide tools to disengage from your current firm ethically, and offer support at any hour to move you through this process successfully.',
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
            Your next move,
            <br />
            <span className="text-muted-foreground">on your terms.</span>
          </h1>
          <p className="text-lg leading-relaxed text-foreground/70 max-w-md">
            If you are taking a peek over the wall to see whether greener pastures lie beyond your garden, let us guide you — with complete discretion at every step.
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
          It is never our goal to slot you into a position or fill a job order. It is our goal to match you with the best possible opportunity — based on complete information, and with your identity protected throughout.
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
          <p className="nc-eyebrow">How We Work</p>
          <div className="space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              When you work with our firm, we will ask that you meet with us in complete confidence to discuss your goals and objectives, your needs and wants, and to get to know you.
            </p>
            <p>
              We will then, with your permission at every step and maintaining maximum discretion throughout, conduct our search. Your identity is never revealed until you authorize it — and no firm is approached without your explicit consent.
            </p>
            <p>
              We provide as much support as is needed, at any hour, to ensure your transition is successful from first conversation to final offer.
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