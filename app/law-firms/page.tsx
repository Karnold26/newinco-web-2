import { PageShell, PageHeader } from '@/components/page-shell'

export const metadata = {
  title: 'Law Firms — The NewinCo, Inc.',
  description:
    'We tap our longstanding relationships to provide you with access to the very best attorneys in your target practice areas.',
}

const paragraphs = [
  'The members of our firm have decades of experience at law firms, as legal placement specialists, as marketing professionals, as lobbyists, and in government. Our contact base, grown over years of working with the most successful firms and practitioners, is unparalleled in the Washington market. We tap our longstanding relationships to provide you with access to the very best attorneys in your target practice areas.',
  'We know how to identify lawyers who are not looking for new opportunities, but who could be precisely what you are searching for. We know how to engage them, and how to get your message to them.',
  'If you ask for our assistance in locating precisely that person or group, be prepared for a long list of questions. Information-sharing at the outset will save us all time and energy further down the path, by avoiding unsuitable candidates and dead-end leads.',
  'We will do the work that would otherwise consume your time, gathering and preparing the data you require to assess a candidacy. We are experts at business and financial analysis, carefully evaluating the pros and cons of each potential candidate, measured against your express criteria and needs. We ask the tough questions at the outset, we run conflict scenarios, we discuss issues of integration and personality and culture. We will do our utmost to provide you not just with candidates, but with solutions.',
  'Because our business is built entirely on long-term relationships, we will never advise you to pursue a deal that is not in your best interest. It would not advance our interest to do so.',
]

export default function LawFirmsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="For Law Firms"
        title="Law Firms"
        intro="Access to the very best attorneys in your target practice areas, backed by a contact base unparalleled in the Washington market."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {paragraphs.map((text, i) => (
          <div
            key={i}
            className="nc-surface p-7 leading-relaxed text-foreground/85"
          >
            <p>{text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
