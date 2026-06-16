import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import { ArrowLeft, Mail, Phone } from 'lucide-react'

export const metadata = {
  title: 'Kennon Arnold — The NewinCo, Inc.',
  description:
    'Kennon Arnold is a recruiting professional focused on attorney recruiting and lateral partner movement at The NewinCo.',
}

export default function KennonArnoldPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            'radial-gradient(hsl(var(--muted-foreground)) 0.6px, transparent 0.6px)',
          backgroundSize: '18px 18px',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, hsl(var(--background) / 0.7), hsl(var(--background) / 0.96))',
        }}
      />

      <div className="relative">
        <PageShell>
          <Link
            href="/about"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Our Team
          </Link>

          <main className="mx-auto max-w-5xl">
            <section className="grid gap-10 border-b border-border/70 pb-12 lg:grid-cols-[1fr_300px] lg:items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  The NewinCo, Inc.
                </p>

                <h1 className="mt-4 font-heading text-5xl leading-tight text-foreground sm:text-6xl">
                  Kennon Arnold
                </h1>

                <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                  Recruiting professional focused on attorney recruiting and
                  lateral partner movement.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur">
                <h2 className="font-heading text-base text-foreground">
                  Contact
                </h2>

                <div className="mt-5 space-y-3 text-sm">
                  <a
                    href="tel:2029731323"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    <span>202-973-1323</span>
                  </a>

                  <a
                    href="mailto:karnold@newinco.com"
                    className="flex items-center gap-3 break-all text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden="true" />
                    <span>karnold@newinco.com</span>
                  </a>
                </div>
              </div>
            </section>

            <section className="grid gap-10 py-12 lg:grid-cols-[220px_1fr]">
              <div>
                <h2 className="font-heading text-2xl text-foreground">
                  About
                </h2>
              </div>

              <div className="max-w-3xl space-y-6 text-lg leading-8 text-foreground/80">
                <p>
                  Kennon Arnold is a recruiting professional focused on attorney
                  recruiting and lateral partner movement. He brings a
                  research-driven approach to recruiting, using market
                  intelligence alongside a genuine effort to understand each
                  attorney&apos;s practice and goals in order to help attorneys
                  make informed career decisions. Prior to joining NewinCo,
                  Kennon worked on the analytics side of another search firm,
                  supporting partner recruitment from initial market research
                  through deal execution, providing analysis and intelligence
                  throughout the whole process.
                </p>

                <p>
                  Kennon is known for being responsive and easy to work with. He
                  approaches each conversation with curiosity and care, asking
                  thoughtful questions to understand what matters most. His
                  practical style helps attorneys and firms feel informed,
                  comfortable, and confident throughout a search.
                </p>
              </div>
            </section>
          </main>
        </PageShell>
      </div>
    </div>
  )
}