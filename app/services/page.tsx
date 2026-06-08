import { PageShell, PageHeader } from '@/components/page-shell'
import { Search, Users, Building2, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Individual Attorney Placements',
    body: 'For partners and associates seeking the best possible opportunity.',
  },
  {
    icon: Search,
    title: 'Attorney Searches',
    body: 'Targeted searches conducted on behalf of law firms.',
  },
  {
    icon: Building2,
    title: 'Mergers & Acquisitions',
    body: 'Of practice groups or entire law firms.',
  },
  {
    icon: Briefcase,
    title: 'Business Placement',
    body: 'For lawyers and law firms expanding their reach.',
  },
]

export const metadata = {
  title: 'Services — The NewinCo, Inc.',
  description:
    'We Listen. We Research. We Analyze. We Advise. We Facilitate. We Place.',
}

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="What Do We Do?"
        title="We Listen. We Research. We Analyze. We Advise. We Facilitate. We Place."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="nc-surface space-y-5 p-8 leading-relaxed text-foreground/85">
          <p>There are two kinds of legal recruiters.</p>
          <p>
            There are those who will place anyone anywhere as long as there&apos;s
            a fee attached at day&apos;s end.
          </p>
          <p>
            Fortunately, there are also those who are in this business for the
            long haul. At The NewinCo, we know that to grow our business we must
            focus exclusively on pinpoint recruitment. Precisely the right
            person for the right job. Precisely the right firms negotiating
            mergers for all the right reasons.
          </p>
          <p>
            Fortunately, the record shows that only recruiting firms that
            deliver commitment, integrity, and confidentiality survive the long
            haul.
          </p>
        </div>

        <div className="nc-surface space-y-5 p-8 leading-relaxed text-foreground/85">
          <p>
            Our services do not end when a placement is made. We provide as much
            follow-up counseling and support as is needed to ensure success. In
            other words, we stick around.
          </p>
          <p>
            The NewinCo is officed in Washington, DC. We are indeed Beltway
            insiders with powerful legal market connections at both the private
            and public sector levels. Major law firms just moving into this
            tough neighborhood rely on us to open closed doors and unlock hidden
            opportunity.
          </p>
          <p>
            But our services are also borderless. We work with law firms and
            corporations around the globe to help them achieve their
            professional goals anywhere in the world.
          </p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="font-heading text-xl text-foreground">
          Four major areas of search and acquisition
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="nc-surface p-6 transition-colors hover:border-foreground/15"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex size-9 items-center justify-center rounded-md border border-border text-foreground">
                  <service.icon className="size-4" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-base text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
