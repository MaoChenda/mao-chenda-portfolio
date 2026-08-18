export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Frameworks', items: ['Vue', 'React / React Native', 'Angular'] },
  { label: 'Language & Styling', items: ['TypeScript', 'JavaScript (ES6+)', 'HTML / Tailwind CSS'] },
  { label: 'Tools & Practices', items: ['Git / Bitbucket / Jira', 'RESTful APIs', 'Team leadership & code review'] },
]
