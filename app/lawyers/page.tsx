import { PageShell, PageHeader } from '@/components/page-shell'

export const metadata = {
  title: 'Lawyers — The NewinCo, Inc.',
  description:
    'Individual attorney placement. We match you with the best possible opportunity, based upon complete information about the legal market.',
}

const steps = [
  'We will conduct a market survey of firms that meet your stated goals, gathering information in a way that fully protects your confidential information and does not betray your identity;',
  'We will present you with the firms that meet your goals, providing background information about each firm and its practice;',
  'We will ask your permission to approach these firms on your behalf;',
  'With that permission, we will identify and present your candidacy and its benefits to the potential acquiring firm;',
  'Upon your authorization, we will schedule interviews;',
  'We will prepare you for each meeting, providing background information about the individuals you will meet;',
  'We will debrief you and obtain feedback after each meeting;',
  'We will work toward a deal that meets the needs of all parties;',
  'We will analyze each offer and present the terms;',
  'We will ensure that the terms of the offer are met;',
  'We will provide you with the tools and methodology to disengage from your current firm in accordance with the Canons of Ethics;',
  'We will provide any and all support, at any hour of the day or night, to enable you to move through this process successfully.',
]

export default function LawyersPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="For Lawyers"
        title="Individual Attorney Placement"
        intro="If you are taking a peek over the wall to see whether greener pastures lie beyond your garden, let us guide you."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="nc-surface p-7 leading-relaxed text-foreground/85">
          <p>
            It is never our goal to slot you into a position, or to fill a job
            order. It is our goal to match you with the best possible
            opportunity, based upon complete information about the legal market.
            With that information, you will be well-armed to make the best
            decision for your future.
          </p>
        </div>
        <div className="nc-surface p-7 leading-relaxed text-foreground/85">
          <p>
            When you work with our firm, we will ask that you meet with us, in
            complete confidence, to discuss your goals and objectives, your
            needs and wants, and to get to know you. We will then, with your
            permission at every step and maintaining maximum discretion
            throughout, recommend the following course of action.
          </p>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-heading text-xl text-foreground">Our Course of Action</h2>
        <ol className="relative mt-8 ml-1">
          <span
            aria-hidden="true"
            className="absolute left-[17px] top-2 bottom-2 w-px bg-border"
          />
          {steps.map((step, i) => (
            <li key={i} className="relative flex gap-6 pb-8 last:pb-0">
              <span className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background font-mono text-xs text-muted-foreground">
                {i + 1}
              </span>
              <p className="pt-1 leading-relaxed text-foreground/90">{step}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  )
}
