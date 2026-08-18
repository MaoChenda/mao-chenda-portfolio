export interface Project {
  title: string
  role: string
  highlights: string[]
  caseStudyUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Enterprise Internet Banking Platform',
    role: 'frontend architecture lead · vue · mobile c&c',
    highlights: [
      'Delivered enterprise Internet Banking systems for three major corporate clients, with ongoing technical maintenance and feature enhancements',
      'Spearheaded End-to-End Encryption and secure storage integration for high-stakes banking environments',
      'Built reusable UI components adopted across projects, cutting frontend effort on new features by 30%',
    ],
  },
  {
    title: 'Multi-Tenant Loan Origination System',
    role: 'frontend architecture · vue · mobile c&c',
    highlights: [
      'Delivered a multi-tenant LOS architecture allowing scalable, client-specific configurations within a single platform',
      'Launched a full-scale online payment module spanning retail and corporate banking sectors',
    ],
  },
  {
    title: 'School Management System',
    role: 'senior frontend developer · vue · camis solutions',
    highlights: [
      'Architected and deployed a school management platform serving thousands of active users with high availability',
      'Integrated WebSockets to power a live-stream learning module for real-time teacher–student sessions',
      'Implemented JWT-based authentication and role-based access control to secure student records',
    ],
  },
]
