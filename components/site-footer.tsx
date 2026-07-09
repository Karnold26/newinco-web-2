import Link from 'next/link'
import { Globe, Mail, MapPin, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Our Team' },
  { href: '/about', label: 'About Us' },
  { href: '/lawyers', label: 'Lawyers' },
  { href: '/law-firms', label: 'Law Firms' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact Us' },
]

const mainPhone = '202-973-1310'
const mainEmail = 'mbnewell@newinco.com'
const addressLines = [
  '1455 Pennsylvania Avenue, NW',
  'Suite 1180',
  'Washington, DC 20004',
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0f2847] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_1.2fr_0.9fr] lg:gap-16">
        {/* Brand */}
        <div className="flex flex-col justify-center">
          <p className="font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl">
            The
            <br />
            NewinCo
          </p>
          <p className="mt-1 font-heading text-4xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Inc.
          </p>
        </div>

        {/* Contact Detail */}
        <div>
          <h2 className="font-heading text-base font-bold text-white">
            Contact Detail
          </h2>

          <dl className="mt-6 space-y-4 text-sm leading-relaxed">
            <div>
              <dt className="sr-only">Phone</dt>
              <dd>
                <span className="text-white/90">Phone: </span>
                <a
                  href={`tel:${mainPhone.replace(/-/g, '')}`}
                  className="text-[#5ec4c4] transition-colors hover:text-[#7ed8d8]"
                >
                  {mainPhone}
                </a>
              </dd>
            </div>

            <div>
              <dt className="sr-only">Email</dt>
              <dd>
                <span className="text-white/90">Email: </span>
                <a
                  href={`mailto:${mainEmail}`}
                  className="text-[#5ec4c4] transition-colors hover:text-[#7ed8d8]"
                >
                  {mainEmail}
                </a>
              </dd>
            </div>

            <div>
              <dt className="sr-only">Address</dt>
              <dd>
                <span className="text-white/90">Address: </span>
                <address className="mt-1 inline not-italic text-white/85">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href="/"
              className="inline-flex size-9 items-center justify-center bg-[#5ec4c4] text-[#0f2847] transition-colors hover:bg-[#7ed8d8]"
              aria-label="Visit homepage"
            >
              <Globe className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${mainPhone.replace(/-/g, '')}`}
              className="inline-flex size-9 items-center justify-center bg-[#5ec4c4] text-[#0f2847] transition-colors hover:bg-[#7ed8d8]"
              aria-label="Call main office"
            >
              <Phone className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${mainEmail}`}
              className="inline-flex size-9 items-center justify-center bg-[#5ec4c4] text-[#0f2847] transition-colors hover:bg-[#7ed8d8]"
              aria-label="Email main office"
            >
              <Mail className="size-4" aria-hidden="true" />
            </a>
            <a
              href="https://maps.google.com/?q=1455+Pennsylvania+Avenue+NW+Suite+1180+Washington+DC+20004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center bg-[#5ec4c4] text-[#0f2847] transition-colors hover:bg-[#7ed8d8]"
              aria-label="View office location"
            >
              <MapPin className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Menu */}
        <nav aria-label="Footer">
          <h2 className="font-heading text-base font-bold text-white">Menu</h2>
          <ul className="mt-6 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#5ec4c4] transition-colors hover:text-[#7ed8d8]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10 bg-[#0a1e38]">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center sm:px-8">
          <p className="text-xs text-white/75">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="mx-2 text-white/40">|</span>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </Link>
          </p>
          <p className="mt-2 text-xs text-white/55">
            Copyright &copy; {year} The NewinCo, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
