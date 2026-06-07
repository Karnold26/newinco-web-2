import Link from 'next/link'
import { MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg">The NewinCo, Inc.</h3>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">
            Your Navigator In The Search For Legal Excellence.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
            Office
          </h4>
          <address className="mt-3 flex items-start gap-2 text-sm not-italic leading-relaxed text-primary-foreground/75">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>
              1455 Pennsylvania Avenue, NW
              <br />
              Suite 1180
              <br />
              Washington, DC 20004
            </span>
          </address>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
            Navigate
          </h4>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <li>
              <Link href="/about" className="text-primary-foreground/75 hover:text-primary-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-primary-foreground/75 hover:text-primary-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link href="/law-firms" className="text-primary-foreground/75 hover:text-primary-foreground">
                Law Firms
              </Link>
            </li>
            <li>
              <Link href="/lawyers" className="text-primary-foreground/75 hover:text-primary-foreground">
                Lawyers
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-primary-foreground/75 hover:text-primary-foreground">
                News &amp; Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary-foreground/75 hover:text-primary-foreground">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} The NewinCo, Inc. All Rights Reserved.</p>
          <a
            href="http://68.178.102.138/horde/imp/login.php"
            className="hover:text-primary-foreground"
          >
            Webmail Log-in
          </a>
        </div>
      </div>
    </footer>
  )
}
