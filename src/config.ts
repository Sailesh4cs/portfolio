export type SkillCategory = 'Backend/APIs' | 'Frontend' | 'Cloud/DevOps' | 'CMS/content' | 'Data/integrations' | 'AI/automation'
export type EvidenceLevel = 'Production' | 'POC' | 'Experiment' | 'Exploration'
export type ProjectType = 'Production' | 'POC' | 'Internal Tool' | 'Experiment'
export type Skill = { name: string; category: SkillCategory; evidence: EvidenceLevel; detail: string }
export type Project = {
  title: string; type?: ProjectType; label: string; summary: string
  technologies: string[]; challenge: string; contribution: string; outcome: string
  tabs: { label: string; content: string }[]
}

// Identity and contact fields are intentionally placeholders until the owner supplies them.
export const siteConfig = {
  name: '[Your name]',
  role: 'Software Engineer',
  intro: 'A verified-facts portfolio focused on backend services, content integrations and cloud delivery.',
  location: '[Your location]',
  email: 'hello@example.com',
  github: 'https://github.com/[your-handle]',
  linkedin: 'https://www.linkedin.com/in/[your-handle]/',
  about: [
    '9+ years .NET backend development',
    'Angular, React, modern frontend',
    'Backend/cloud integration/CMS/automation/security/technical leadership',
    'API design, external service integration, infrastructure troubleshooting, workflow improvement',
  ],
  aiCloud: {
    Production: ['[Add verified AI/cloud production work]'],
    POC: ['Teams Chat Retrieval and Summarization POC', '[Add verified cloud POC]'],
    Exploration: ['Translation assistants', 'agent workflow exploration', 'self-hosted LLM exploration', '[Add verified exploration]'],
  },
  skills: [
    ...(['C#', '.NET', '.NET Core', 'ASP.NET Core Web API', 'EF Core', 'ASP.NET Identity', 'REST', 'GraphQL', 'integrations', 'auth/authz', 'SAML'].map((name) => ({ name, category: 'Backend/APIs' as const, evidence: 'Exploration' as const, detail: 'Evidence placeholder — add verified project or production context before publishing.' }))),
    ...(['React', 'React Native', 'Angular', 'TypeScript', 'JavaScript', 'Redux', 'Zustand', 'Tailwind', 'SCSS', 'Vite', 'Gatsby', 'React Router', 'FullCalendar', 'Floating UI'].map((name) => ({ name, category: 'Frontend' as const, evidence: name === 'React' || name === 'TypeScript' || name === 'Vite' ? 'Production' as const : 'Exploration' as const, detail: 'Evidence placeholder — add verified project or production context before publishing.' }))),
    ...(['Azure', 'Functions', 'Key Vault', 'Storage', 'DevOps/Pipelines', 'Container Apps/Registry', 'Managed Identity', 'Private Endpoints', 'Docker', 'Kubernetes', 'Jenkins', 'AWS S3/CloudFront', 'CI/CD'].map((name) => ({ name, category: 'Cloud/DevOps' as const, evidence: name === 'Azure' || name === 'Functions' || name === 'Storage' || name === 'CI/CD' ? 'Production' as const : 'Exploration' as const, detail: 'Evidence placeholder — add verified deployment or operations context before publishing.' }))),
    ...(['Contentful APIs/SDK/GraphQL/webhooks/live preview', 'migrations', 'models', 'localization', 'sync', 'role/permission automation'].map((name) => ({ name, category: 'CMS/content' as const, evidence: name === 'Contentful APIs/SDK/GraphQL/webhooks/live preview' || name === 'sync' ? 'Production' as const : 'Exploration' as const, detail: 'Evidence placeholder — add verified CMS context before publishing.' }))),
    ...(['SQL Server', 'MongoDB', 'Redis', 'Google Sheets API', 'GA4', 'Microsoft Graph', 'Teams', 'Node', 'Express', 'ffmpeg', 'Kofax OCR', 'OmniPage SDK'].map((name) => ({ name, category: 'Data/integrations' as const, evidence: 'Exploration' as const, detail: 'Evidence placeholder — add verified integration context before publishing.' }))),
    ...(['OpenAI/Gemini integrations', 'AI-assisted content', 'natural-language-to-GraphQL', 'chatbot concepts', 'translation assistants', 'Teams retrieval/summarization concepts', 'agent workflow exploration', 'prompt design/structured responses', 'backend proxy integrations', 'self-hosted LLM exploration', 'security/privacy'].map((name) => ({ name, category: 'AI/automation' as const, evidence: 'Exploration' as const, detail: 'Exploration label — add verified scope, prototype status, or evidence before publishing.' }))),
  ] satisfies Skill[],
  projects: [
    { title: 'CMS Webhook Integration and Content Synchronization', label: 'CMS / INTEGRATION', summary: 'Contentful webhook intake and downstream synchronization represented by the current service.', technologies: ['.NET', 'Azure Functions', 'Contentful'], challenge: '[Add the verified problem statement.]', contribution: '[Add your verified contribution and ownership.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Context', content: '[Describe the verified context.]' }, { label: 'Architecture', content: '[Add verified architecture notes.]' }, { label: 'Decisions', content: '[Add verified decisions.]' }] },
    { title: 'Contentful Role Management Automation', label: 'CONTENTFUL / AUTOMATION', summary: 'Named project placeholder; replace with verified scope and implementation details.', technologies: ['Contentful', '[Add verified tools]'], challenge: '[Add the verified access-management challenge.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Context', content: '[Add verified context.]' }, { label: 'Approach', content: '[Add verified implementation notes.]' }] },
    { title: 'Contentful Custom App and Dashboard', label: 'CONTENTFUL / FRONTEND', summary: 'Named project placeholder for a Contentful custom app and dashboard.', technologies: ['Contentful', '[Add verified frontend tools]'], challenge: '[Add the verified user problem.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Context', content: '[Add verified context.]' }, { label: 'Interface', content: '[Add verified UI and integration notes.]' }] },
    { title: 'Contentful Migration Tool', label: 'CONTENTFUL / MIGRATION', summary: 'Named project placeholder for Contentful migration work.', technologies: ['Contentful', '[Add verified migration tools]'], challenge: '[Add the verified migration challenge.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Context', content: '[Add verified context.]' }, { label: 'Migration', content: '[Add verified migration approach.]' }] },
    { title: 'GA4 Analytics API and Dashboard', label: 'DATA / ANALYTICS', summary: 'Named analytics project placeholder with no unsupported metrics.', technologies: ['GA4', 'Analytics API', '[Add verified dashboard tools]'], challenge: '[Add the verified analytics question.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Question', content: '[Add verified question.]' }, { label: 'Dashboard', content: '[Add verified dashboard notes.]' }] },
    { title: 'Translation Assistant and AI Integration', label: 'AI / TRANSLATION', summary: 'AI project placeholder; replace with verified scope.', technologies: ['[Add verified AI tools]'], challenge: '[Add the verified translation problem.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified result or mark as ongoing.]', tabs: [{ label: 'Question', content: '[Add verified experiment question.]' }, { label: 'Evaluation', content: '[Add verified evaluation notes.]' }] },
    { title: 'Azure Functions and API Integrations', label: 'AZURE / API', summary: 'Azure Functions and API integration work represented by the current service.', technologies: ['.NET', 'Azure Functions', 'HTTP APIs'], challenge: '[Add the verified integration challenge.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Context', content: '[Add verified context.]' }, { label: 'Integration', content: '[Add verified API notes.]' }] },
    { title: 'Digital Visitor Assistant content integration', label: 'CONTENT / INTEGRATION', summary: 'Named content integration placeholder; retain only verified details.', technologies: ['Contentful', '[Add verified integration tools]'], challenge: '[Add the verified content integration challenge.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Context', content: '[Add verified context.]' }, { label: 'Content flow', content: '[Add verified content flow notes.]' }] },
    { title: 'Teams Chat Retrieval and Summarization POC', type: 'POC', label: 'AI / RETRIEVAL', summary: 'AI proof of concept placeholder, explicitly marked POC.', technologies: ['Teams', '[Add verified retrieval tools]'], challenge: '[Add the verified retrieval question.]', contribution: '[Add your verified contribution.]', outcome: '[Add verified POC outcome.]', tabs: [{ label: 'Question', content: '[Add verified POC question.]' }, { label: 'Evaluation', content: '[Add verified evaluation notes.]' }] },
    { title: 'Permission Portal', label: 'ACCESS / INTERNAL TOOL', summary: 'Named internal tool placeholder for permission workflows.', technologies: ['[Add verified tools]'], challenge: '[Add the verified permissions problem.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Context', content: '[Add verified context.]' }, { label: 'Workflow', content: '[Add verified workflow notes.]' }] },
    { title: 'Contentful Live Preview Integration', label: 'CONTENTFUL / PREVIEW', summary: 'Named Contentful integration placeholder for live preview.', technologies: ['Contentful', '[Add verified frontend tools]'], challenge: '[Add the verified preview challenge.]', contribution: '[Add your verified contribution.]', outcome: '[Add a verified outcome.]', tabs: [{ label: 'Context', content: '[Add verified context.]' }, { label: 'Preview', content: '[Add verified integration notes.]' }] },
    { title: 'Contentful Personalization POC', type: 'POC', label: 'CONTENTFUL / PERSONALIZATION', summary: 'Contentful personalization proof of concept, explicitly marked POC.', technologies: ['Contentful', '[Add verified tools]'], challenge: '[Add the verified personalization question.]', contribution: '[Add your verified contribution.]', outcome: '[Add verified POC outcome.]', tabs: [{ label: 'Question', content: '[Add verified POC question.]' }, { label: 'Evaluation', content: '[Add verified evaluation notes.]' }] },
  ] satisfies Project[],
} as const
