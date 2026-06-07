'use client'

import Image from 'next/image'
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
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="The NewinCo home"
        >
          <Image
            src="/newinco-logo.jpg"
            alt="The NewinCo logo"
            width={194}
            height={86}
            priority
            className="h-11 w-auto"
          />
          <span className="sr-only">The NewinCo, Inc.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-foreground/70 hover:bg-secondary/60 hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="border-t border-border/70 bg-background/95 px-4 py-2 lg:hidden"
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
                  'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-foreground/80 hover:bg-secondary/60',
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
