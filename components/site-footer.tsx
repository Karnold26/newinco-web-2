import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/Our Team', label: 'Our Team' },
  { href: '/lawyers', label: 'Lawyers' },
  { href: '/law-firms', label: 'Law Firms' },
  { href: '/contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="nc-mark" aria-hidden="true">
            N
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            &copy; {new Date().getFullYear()} The Newinco, Inc.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
          1455 Pennsylvania Ave NW, Suite 1180 &mdash; Washington, DC 20004
        </p>
      </div>
    </footer>
  )
}
