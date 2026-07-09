import Link from 'next/link'
import { PageShell, PageHeader } from '@/components/page-shell'
import { Phone, Smartphone, Mail, MapPin } from 'lucide-react'
import { teamMembers } from '@/lib/team-members'

export const metadata = {
  title: 'Contact Us — The NewinCo, Inc.',
  description:
    'Contact The NewinCo, Inc. — 1455 Pennsylvania Avenue, NW, Suite 1180, Washington, DC 20004.',
}

type Contact = {
  name: string
  direct?: string
  mobile?: string
  email: string
  bioHref?: string
}

const contacts: Contact[] = [
  ...teamMembers.map((member) => ({
    name: member.name,
    direct: member.direct,
    mobile: member.mobile,
    email: member.email,
    bioHref: `/team/${member.slug}`,
  })),
  {
    name: 'Charles Xu',
    direct: '202-973-1348',
    email: 'cxu@newinco.com',
  },
]

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        intro="We conduct our business with the utmost discretion. Reach out to begin a confidential conversation."
      />

      <div className="mb-10 rounded-lg bg-primary p-8 text-primary-foreground">
        <h2 className="flex items-center gap-2 font-heading text-xl">
          <MapPin className="size-5" />
          Mailing Address
        </h2>
        <address className="mt-3 not-italic leading-relaxed text-primary-foreground/85">
          1455 Pennsylvania Avenue, NW
          <br />
          Suite 1180
          <br />
          Washington, DC 20004
        </address>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) => (
          <div
            key={c.name}
            className="nc-surface p-6 transition-colors hover:border-foreground/15"
          >
            <h3 className="font-heading text-base text-foreground">
              {c.bioHref ? (
                <Link
                  href={c.bioHref}
                  className="transition-colors hover:text-muted-foreground"
                >
                  {c.name}
                </Link>
              ) : (
                c.name
              )}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.direct && (
                <li className="flex items-center gap-2.5 text-muted-foreground">
                  <Phone className="size-4 shrink-0 text-muted-foreground" />
                  <a href={`tel:${c.direct.replace(/-/g, '')}`} className="hover:text-foreground">
                    {c.direct}
                  </a>
                  <span className="text-xs uppercase tracking-wide">direct</span>
                </li>
              )}
              {c.mobile && (
                <li className="flex items-center gap-2.5 text-muted-foreground">
                  <Smartphone className="size-4 shrink-0 text-muted-foreground" />
                  <a href={`tel:${c.mobile.replace(/-/g, '')}`} className="hover:text-foreground">
                    {c.mobile}
                  </a>
                  <span className="text-xs uppercase tracking-wide">mobile</span>
                </li>
              )}
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="size-4 shrink-0 text-muted-foreground" />
                <a href={`mailto:${c.email}`} className="break-all hover:text-foreground">
                  {c.email}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
