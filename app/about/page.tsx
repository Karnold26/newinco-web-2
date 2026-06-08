import Link from 'next/link'
import { PageShell, PageHeader } from '@/components/page-shell'

const team = [
  { name: 'Marcia B. Newell' },
  { name: 'Lacey S. Wingard' },
  { name: 'Jackie Emma' },
  { name: 'Betty Leach Hawkins' },
  { name: 'Michael Inman' },
  { name: 'Kennon Arnold', href: '/team/kennon-arnold' },
]

export const metadata = {
  title: 'About Us — The NewinCo, Inc.',
  description:
    'The NewinCo provides search and recruitment counseling and placement services solely to attorneys, law firms and corporations.',
}

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Who We Are"
        title="About Us"
        intro="The NewinCo provides search and recruitment counseling and placement services solely to attorneys, law firms and corporations."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur-sm">
          <p className="leading-relaxed text-foreground/90">
            Established in 2002, in Washington, DC, The NewinCo&apos;s staff have
            over thirty years of collective experience in the field on five
            continents. Our goal is the creation of long-term personal
            relationships, and we regard our clients as our primary assets.
          </p>
        </div>
        <div className="rounded-2xl border border-border/70 bg-card/60 p-8 backdrop-blur-sm">
          <p className="leading-relaxed text-foreground/90">
            As The NewinCo, we have placed partners, associates, counsel and
            general counsel in law firms and corporations around the world. In
            our many years of professional experience we have shepherded law
            firm mergers, strategized law firm expansions, recruited teams to
            launch new offices and counseled countless clients to achieve their
            professional objectives.
          </p>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="font-heading text-2xl text-primary">Our Team</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex items-center gap-4 rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur-sm"
            >
              <span
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary font-heading text-sm text-secondary-foreground"
                aria-hidden="true"
              >
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </span>
              {member.href ? (
                <Link
                  href={member.href}
                  className="font-medium text-foreground transition-colors hover:text-primary"
                >
                  {member.name}
                </Link>
              ) : (
                <span className="font-medium text-foreground">{member.name}</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
