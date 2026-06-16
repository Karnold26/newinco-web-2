import type { ReactNode } from 'react'
import { AnimatedBackground } from '@/components/animated-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <AnimatedBackground />
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string
  title: string
  intro?: string
}) {
  return (
    <header className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h1 className="text-balance font-heading text-3xl font-normal text-foreground sm:text-4xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
      <div className="mt-8 h-px w-12 bg-foreground" />
    </header>
  )
}