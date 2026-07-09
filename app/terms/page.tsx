import { PageShell, PageHeader } from '@/components/page-shell'

export const metadata = {
  title: 'Terms of Use — The NewinCo, Inc.',
  description: 'Terms of use for The NewinCo, Inc.',
}

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Terms of Use"
        intro="These terms govern your use of the NewinCo website. This page will be updated with our full terms of use."
      />
    </PageShell>
  )
}
