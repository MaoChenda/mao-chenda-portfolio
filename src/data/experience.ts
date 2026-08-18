export interface ExperienceStage {
  tag: 'LEAD' | 'BUILD' | 'SHIP'
  title: string
  meta: string
  description: string
}

export const experience: ExperienceStage[] = [
  {
    tag: 'LEAD',
    title: 'Chief Digital Solution',
    meta: 'Mobile C&C · Phnom Penh · Aug 2022 — Present',
    description:
      'Lead a cross-functional team of 5–8 engineers and analysts as technical authority for frontend architecture. Delivered enterprise Internet Banking systems for three major corporate clients and a multi-tenant Loan Origination System, while enforcing Git-based version control and code review standards across all projects.',
  },
  {
    tag: 'BUILD',
    title: 'Senior Frontend Developer',
    meta: 'CAMIS Solutions · Jun 2020 — Jul 2022',
    description:
      'Monitored a 3–5 person development team and led code review. Architected and deployed a School Management System serving thousands of active users, integrating WebSockets for real-time live-stream learning and JWT-based role access control for student data.',
  },
  {
    tag: 'SHIP',
    title: 'Junior Frontend Developer',
    meta: 'Slash Foundry Co., Ltd · Aug 2017 — May 2020',
    description:
      'Built and published mobile and web applications to the Google Play Store and Apple App Store, including a logistics stock-management system and a fintech suite of tools for SMEs to manage and automate business expenses.',
  },
]
