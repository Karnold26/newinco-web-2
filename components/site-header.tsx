'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/law-firms', label: 'Law Firms' },
  { href: '/lawyers', label: 'Lawyers' },
  { href: '/news', label: 'News & Events' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact Us' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="The NewinCo home"
        >
          <span className="nc-mark" aria-hidden="true">
            N
          </span>
          <span className="font-heading text-lg font-extrabold uppercase tracking-tight text-foreground">
            Newinco
          </span>
          <span className="sr-only">The NewinCo, Inc.</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors',
                  active
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center border border-foreground/30 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background lg:inline-flex"
        >
          Start a Search
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-sm p-2 text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-background px-4 py-2 lg:hidden"
          aria-label="Mobile"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block border-l-2 px-3 py-2.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors',
                  active
                    ? 'border-primary text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
