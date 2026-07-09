import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Mail, Phone, Smartphone } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { getTeamMemberBySlug, teamMembers } from '@/lib/team-members'

type TeamMemberPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export async function generateMetadata({ params }: TeamMemberPageProps) {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)

  if (!member) {
    return {
      title: 'Team Member — The NewinCo, Inc.',
    }
  }

  return {
    title: `${member.name} — The NewinCo, Inc.`,
    description: `${member.name} is ${member.summary.toLowerCase()} at The NewinCo, Inc.`,
  }
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)

  if (!member) {
    notFound()
  }

  const bioParagraphs = member.bio ?? [
    `${member.name} serves as ${member.title.toLowerCase()} at The NewinCo, Inc. and is part of the firm's team supporting legal recruiting and confidential career conversations.`,
    `A full biography for ${member.name.split(' ')[0]} will be published soon. In the meantime, please use the contact information below to get in touch directly.`,
  ]

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
            href="/services"
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
                  {member.name}
                </h1>

                <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted-foreground">
                  {member.summary}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur">
                <h2 className="font-heading text-base text-foreground">
                  Contact
                </h2>

                <div className="mt-5 space-y-3 text-sm">
                  <a
                    href={`tel:${member.direct.replace(/-/g, '')}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    <span>{member.direct}</span>
                  </a>

                  {member.mobile && (
                    <a
                      href={`tel:${member.mobile.replace(/-/g, '')}`}
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Smartphone className="size-4" aria-hidden="true" />
                      <span>{member.mobile}</span>
                    </a>
                  )}

                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 break-all text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden="true" />
                    <span>{member.email}</span>
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
                {bioParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          </main>
        </PageShell>
      </div>
    </div>
  )
}
