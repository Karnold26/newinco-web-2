import Link from 'next/link'
import { PageShell, PageHeader } from '@/components/page-shell'
import { Phone, Smartphone, Mail } from 'lucide-react'
import { teamMembers } from '@/lib/team-members'

export const metadata = {
  title: 'Contact Us — The NewinCo, Inc.',
  description:
    'Contact The NewinCo, Inc. to begin a confidential conversation.',
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

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) => (
          <div
            key={c.name}
            className="rounded-sm border border-border bg-card p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.16)]"
          >
            <h3 className="font-heading text-lg text-foreground">
              {c.bioHref ? (
                <Link
                  href={c.bioHref}
                  className="transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              ) : (
                c.name
              )}
            </h3>

            <div className="mt-6 space-y-4 text-sm">
              {c.direct && (
                <a
                  href={`tel:${c.direct.replace(/-/g, '')}`}
                  className="flex items-center gap-3 text-primary transition-colors hover:text-primary/80"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <span>{c.direct}</span>
                </a>
              )}

              {c.mobile && (
                <a
                  href={`tel:${c.mobile.replace(/-/g, '')}`}
                  className="flex items-center gap-3 text-primary transition-colors hover:text-primary/80"
                >
                  <Smartphone className="size-4 shrink-0" aria-hidden="true" />
                  <span>{c.mobile}</span>
                </a>
              )}

              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-3 break-all text-primary transition-colors hover:text-primary/80"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                <span>{c.email}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
