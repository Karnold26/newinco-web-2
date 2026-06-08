import { PageShell, PageHeader } from '@/components/page-shell'
import { Phone, Smartphone, Mail, MapPin } from 'lucide-react'

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
}

const contacts: Contact[] = [
  {
    name: 'Marcia B. Newell',
    direct: '202-973-1310',
    mobile: '202-600-1320',
    email: 'mbnewell@newinco.com',
  },
  {
    name: 'Lacey S. Wingard',
    email: 'lwingard@newinco.com',
  },
  {
    name: 'Jackie Emma',
    mobile: '202-251-3249',
    email: 'jreed@newinco.com',
  },
  {
    name: 'Betty L. Hawkins',
    direct: '202-973-1345',
    mobile: '202-997-1511',
    email: 'bhawkins@newinco.com',
  },
  {
    name: 'Michael Inman',
    direct: '202-973-1327',
    mobile: '917-509-8434',
    email: 'minman@newinco.com',
  },
  {
    name: 'Laura Kappock',
    direct: '202-973-1323',
    email: 'lkappock@newinco.com',
  },
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

      <div className="mb-10 rounded-2xl border border-border/70 bg-primary p-8 text-primary-foreground">
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
            className="rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-heading text-lg text-primary">{c.name}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.direct && (
                <li className="flex items-center gap-2.5 text-muted-foreground">
                  <Phone className="size-4 shrink-0 text-ring" />
                  <a href={`tel:${c.direct.replace(/-/g, '')}`} className="hover:text-foreground">
                    {c.direct}
                  </a>
                  <span className="text-xs uppercase tracking-wide">direct</span>
                </li>
              )}
              {c.mobile && (
                <li className="flex items-center gap-2.5 text-muted-foreground">
                  <Smartphone className="size-4 shrink-0 text-ring" />
                  <a href={`tel:${c.mobile.replace(/-/g, '')}`} className="hover:text-foreground">
                    {c.mobile}
                  </a>
                  <span className="text-xs uppercase tracking-wide">mobile</span>
                </li>
              )}
              <li className="flex items-center gap-2.5 text-muted-foreground">
                <Mail className="size-4 shrink-0 text-ring" />
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
