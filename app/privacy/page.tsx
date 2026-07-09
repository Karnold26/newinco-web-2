import { PageShell, PageHeader } from '@/components/page-shell'

export const metadata = {
  title: 'Privacy Policy — The NewinCo, Inc.',
  description: 'Privacy policy for The NewinCo, Inc.',
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        title="Privacy Policy"
        intro="The NewinCo, Inc. respects your privacy. This page will be updated with our full privacy policy."
      />
    </PageShell>
  )
}
