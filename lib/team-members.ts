export type TeamMember = {
  name: string
  title: string
  email: string
  direct: string
  mobile?: string
  slug: string
  summary: string
  bio?: string[]
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Marcia B. Newell',
    title: 'Founder & Managing Director',
    email: 'mbnewell@newinco.com',
    direct: '202-973-1310',
    mobile: '202-600-1320',
    slug: 'marcia-newell',
    summary:
      'Founder of The NewinCo, Inc. with nearly three decades of legal-industry decision-making experience.',
    bio: [
      'With nearly three decades of decision-making experience across a wide range of roles in the legal industry, Marcia has continued to be a presence in the legal world even through countless periods of uncertainty and change. Her ability to stay calm, adapt, and see the bigger picture is why clients turn to her when they need a clear read on what is happening and a steady voice on what to do next.',
      'Marcia founded The NewinCo, Inc. in 2002 to provide attorneys, law firms, and corporations with trusted counsel during moments of transition. Whether a law firm is considering its next strategic move or an attorney is ready for a change in scenery, she brings judgment, discretion, and practical insight shaped by her experience.',
      'Marcia is known for her direct communication style, strong business instincts, and long-standing relationships throughout the legal community.',
    ],
  },
  {
    name: 'Michael Inman',
    title: 'Recruiter',
    email: 'minman@newinco.com',
    direct: '202-973-1327',
    mobile: '917-509-8434',
    slug: 'michael-inman',
    summary:
      'Recruiter with more than a decade of experience advising partners and groups on career moves.',
    bio: [
      'Michael has spent more than a decade helping partners and groups think through important career moves. Through his years working at a variety of law firms, he developed a strong understanding of how firms operate and how different platforms can uniquely enhance an attorney’s practice and career. This perspective allows him to help partners understand their options clearly and make informed decisions about their next step. He moves with urgency when there is an opportunity to pursue, but is thoughtful at every step, making sure each conversation is handled with discretion and care.',
      'Michael continues to stay close to the market through regular conversations with firm leadership. Those conversations help him understand each firm’s needs, goals, and direction, allowing him to identify opportunities that make sense for both sides.',
    ],
  },
  {
    name: 'Betty Leach Hawkins',
    title: 'Recruiter',
    email: 'bhawkins@newinco.com',
    direct: '202-973-1345',
    mobile: '202-997-1511',
    slug: 'betty-hawkins',
    summary:
      'Recruiter bringing more than three decades of experience in the Washington, D.C. legal community.',
    bio: [
      'Betty brings more than three decades of experience in the Washington, D.C. legal community to NewinCo. She has practiced at a major law firm, in a corporate legal department, and in the legal department of a leading trade association, giving her a practical understanding of how lawyers, clients, and firms approach important decisions.',
      'Having worked both within a law firm and as a client of many law firms, Betty understands that the right move is not just about filling a need. It is about knowing what each side values, where an attorney can succeed, and whether the fit makes sense over time. At NewinCo, she brings that long-term view to the strategic placement of legal talent and practices, approaching each conversation with patience, judgment, and discretion.',
      'Betty earned her B.A. in Government, with high honors, and her J.D. from the University of Texas at Austin.',
    ],
  },
  {
    name: 'Kennon Arnold',
    title: 'Recruiter',
    email: 'karnold@newinco.com',
    direct: '202-973-1353',
    mobile: '202-909-3347',
    slug: 'kennon-arnold',
    summary:
      'Recruiting professional focused on attorney recruiting and lateral partner movement.',
    bio: [
      "Kennon Arnold is a recruiting professional focused on attorney recruiting and lateral partner movement. He brings a research-driven approach to recruiting, using market intelligence alongside a genuine effort to understand each attorney's practice and goals in order to help attorneys make informed career decisions. Prior to joining NewinCo, Kennon worked on the analytics side of another search firm, supporting partner recruitment from initial market research through deal execution, providing analysis and intelligence throughout the whole process.",
      'Kennon is known for being responsive and easy to work with. He approaches each conversation with curiosity and care, asking thoughtful questions to understand what matters most. His practical style helps attorneys and firms feel informed, comfortable, and confident throughout a search.',
    ],
  },
  {
    name: 'Sarah Moriarty',
    title: 'Recruiter',
    email: 'smoriarty@newinco.com',
    direct: '202-973-1360',
    mobile: '202-555-0192',
    slug: 'sarah-moriarty',
    summary:
      'Recruiter with legal-market experience and deep insight into law firm trends, practices, and movement.',
    bio: [
      'With several years of experience in the legal field, Sarah’s background includes an extensive knowledge of trends, practices, and movement within hundreds of law firms, and she brings this market insight to the recruiting profession. In collaborating with top law firms and Fortune 100 legal teams, she consistently engages with her clients to determine their needs and the best path forward to achieve success.',
      'Throughout her career, she has developed key relationships with hiring partners, in-house recruiters, and legal professionals to support strategic growth and build meaningful connections. Sarah is highly motivated to connect elite legal talent with the right firm to deliver extraordinary results.',
    ],
  },
]

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((member) => member.slug === slug)
}
