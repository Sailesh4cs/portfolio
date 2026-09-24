export type SkillCategory = 'AI & Agentic AI' | 'AI coding/dev tools' | 'Backend/APIs' | 'Frontend' | 'Data/search' | 'Cloud/integration' | 'Messaging/DevOps' | 'Practices'
export type ProjectType = 'Production' | 'Internal Platform' | 'Demo Concept'

export type Skill = { name: string; category: SkillCategory; detail: string }
export type Project = {
  title: string
  type: ProjectType
  label: string
  summary: string
  technologies: string[]
  challenge: string
  contribution: string
  outcome: string
  tabs: { label: string; content: string }[]
}

export const siteConfig = {
  name: 'Sailesh Kumar',
  role: 'Full Stack AI Developer | Senior Software Developer',
  intro: 'Full Stack AI Developer and experienced Software Developer with 10+ years building enterprise applications, scalable APIs, microservices and cloud-native platforms.',
  summary: 'Strong in .NET Core, C#, Angular, Node.js, SQL Server, Kafka, Azure, REST APIs, Contentful and GraphQL, with hands-on LLM-powered applications and agentic AI workflows.',
  location: 'Gurugram, India',
  phone: '7508718741',
  email: 'sailesh4cs@gmail.com',
  github: '',
  linkedin: '',
  resume: '',
  about: [
    'I design and deliver secure enterprise software across APIs, microservices, CMS platforms, event-driven integrations and cloud services.',
    'My current focus is practical AI: prompt engineering, RAG, tool and function calling, agent orchestration, memory and context management, guardrails and evaluation.',
    'I have led a team of five through technical guidance, code reviews, sprint planning, delivery and mentoring while staying close to production support and customer outcomes.',
  ],
  aiCloud: {
    'AI & agentic': ['LLM applications', 'Agentic workflows', 'RAG and vector search concepts', 'Prompt engineering', 'Tool/function calling', 'Multi-agent patterns', 'Azure OpenAI and OpenAI APIs'],
    'Azure platform': ['App Services', 'Azure Functions', 'Azure Storage', 'Key Vault', 'Logic Apps', 'Static Web Apps'],
    'Ways of working': ['Clean Architecture', 'SOLID', 'Secure coding', 'Observability', 'Performance optimization', 'Agile/Scrum', 'RCA and production support'],
  },
  skills: [
    ...(['LLM applications', 'Agentic workflows', 'RAG', 'Prompt engineering', 'Tool/function calling', 'Multi-agent patterns', 'Memory/context management', 'Guardrails and evaluation', 'Azure OpenAI', 'OpenAI APIs'].map((name) => ({ name, category: 'AI & Agentic AI' as const, detail: 'Hands-on AI application and workflow design for enterprise use cases.' }))),
    ...(['Python', 'FastAPI', 'LangChain', 'LangGraph', 'Semantic Kernel', 'Jupyter', 'VS Code', 'GitHub Copilot', 'Cursor', 'Claude Code', 'Postman', 'Swagger/OpenAPI'].map((name) => ({ name, category: 'AI coding/dev tools' as const, detail: 'Used for AI prototyping, API development, developer productivity and integration testing.' }))),
    ...(['.NET Core', 'ASP.NET Core', 'C#', 'Node.js', 'REST APIs', 'Microservices', 'Event-driven architecture'].map((name) => ({ name, category: 'Backend/APIs' as const, detail: 'Enterprise services, API contracts, scalability, security and integrations.' }))),
    ...(['Angular 8+', 'React', 'HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'API integration'].map((name) => ({ name, category: 'Frontend' as const, detail: 'Production UI modules and responsive experiences connected to business APIs.' }))),
    ...(['SQL Server', 'Vector search concepts', 'Embeddings', 'GraphQL', 'Contentful'].map((name) => ({ name, category: 'Data/search' as const, detail: 'Data modeling, query performance, content APIs and retrieval-oriented foundations.' }))),
    ...(['Azure App Services', 'Azure Functions', 'Azure Storage', 'Key Vault', 'Logic Apps', 'Static Web Apps', 'Dell Boomi'].map((name) => ({ name, category: 'Cloud/integration' as const, detail: 'Cloud-native delivery and enterprise integration across Azure and Dell Boomi.' }))),
    ...(['Kafka', 'RabbitMQ', 'IBM MQ', 'Git', 'Azure DevOps', 'Bitbucket', 'Jira', 'Confluence', 'CI/CD'].map((name) => ({ name, category: 'Messaging/DevOps' as const, detail: 'Event-driven systems, release collaboration and delivery workflows.' }))),
    ...(['Agile/Scrum', 'Clean Architecture', 'SOLID', 'Secure coding', 'Code reviews', 'Observability', 'Performance optimization'].map((name) => ({ name, category: 'Practices' as const, detail: 'Practical engineering habits for reliable, maintainable delivery.' }))),
  ] satisfies Skill[],
  experience: [
    { role: 'Sr. Software Developer', company: 'Evalueserve Pvt. Ltd.', dates: 'Apr 2021 – Present', detail: 'Enterprise REST APIs and microservices with ASP.NET Core/C#; Angular modules; architecture, API contracts, data modeling, scalability and security. Building AI-ready services with LLM integration, RAG-oriented workflows, tool calling, prompt design and business API integration. SQL performance, code reviews, mentoring and QA/DevOps releases.' },
    { role: 'Software Developer', company: 'Softobiz Pvt. Ltd.', dates: 'Jun 2019 – Apr 2021', detail: '.NET Core microservices, Angular, Kafka event-driven architecture and SQL Server, with responsibility for scalable solutions and release support.' },
    { role: 'Software Developer', company: 'Orion E Solution', dates: 'Dec 2018 – Jun 2019', detail: 'Translated client requirements into technical solutions using ASP.NET Core REST APIs, Angular and SQL Server, including deployments and documentation.' },
    { role: 'Associate Software Developer', company: 'OATI Pvt. Ltd.', dates: 'Mar 2016 – Nov 2018', detail: 'Resolved production issues, delivered enhancements and change requests, improved reliability and collaborated with QA on business-critical releases.' },
  ],
  education: [
    { qualification: 'B.Tech (Computer Science Engineering)', school: 'SVIET', year: '2016' },
    { qualification: '12th', school: 'K.V. Bantalab Jammu', year: '2011' },
    { qualification: '10th', school: 'K.V. Bantalab Jammu', year: '2009' },
  ],
  projects: [
    { title: 'Agentic AI & Intelligent Enterprise Automation', type: 'Production', label: 'AI / AUTOMATION', summary: 'AI assistant patterns for multi-step tasks, tool calling, enterprise retrieval, response validation and secure business API integration.', technologies: ['Python', 'FastAPI', 'Azure OpenAI', 'LangChain', 'LangGraph', 'RAG', '.NET Core', 'Angular', 'Azure'], challenge: 'Connect LLM reasoning to trusted enterprise context and business actions.', contribution: 'Designed AI-ready services, prompt flows, retrieval-oriented workflows, tool calling and validation boundaries.', outcome: 'A practical foundation for grounded, secure enterprise AI workflows.', tabs: [{ label: 'Architecture', content: 'Combines Python AI services with enterprise APIs, retrieval patterns and explicit response validation.' }, { label: 'Focus', content: 'Prompt design, context management, guardrails, evaluation and secure integration.' }] },
    { title: 'Enterprise CMS Modernization & Contentful Platform', type: 'Internal Platform', label: 'CMS / PLATFORM', summary: 'Contentful Custom Apps, workflow automation, validation, metadata, publishing enhancements and integrations.', technologies: ['.NET Core', 'React', 'Angular', 'Contentful', 'GraphQL', 'Azure Functions', 'Azure App Services'], challenge: 'Make enterprise content workflows more structured, integrated and maintainable.', contribution: 'Designed custom apps, workflow automation and content integrations across APIs, metadata and publishing flows.', outcome: 'A clearer platform foundation for content operations and connected applications.', tabs: [{ label: 'Platform', content: 'Contentful capabilities were extended with custom interfaces, validation, metadata management and publishing enhancements.' }, { label: 'Integration', content: 'GraphQL, .NET Core and Azure services connected content workflows to enterprise applications.' }] },
    { title: 'Spread Smart V2', type: 'Production', label: 'DOCUMENT / INTEGRATION', summary: 'REST APIs, Angular modules, OCR workflows, SQL optimization and production support.', technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'ABBYY/Kofax OCR', 'RabbitMQ', 'IBM MQ'], challenge: 'Support document-heavy business workflows and reliable enterprise messaging.', contribution: 'Built APIs and UI modules, worked on OCR workflows, optimized SQL and supported production troubleshooting.', outcome: 'Reliable delivery across OCR, messaging and business application boundaries.', tabs: [{ label: 'Delivery', content: 'Implemented and supported API, UI, OCR and messaging components across the application.' }] },
    { title: 'Transport Management System', type: 'Production', label: 'EVENT-DRIVEN / SERVICES', summary: 'Node.js backend services, REST APIs and Kafka-based event-driven architecture.', technologies: ['Node.js', 'Angular', 'Kafka', 'Microservices'], challenge: 'Coordinate transport workflows through independently deployable services and events.', contribution: 'Delivered backend services, REST APIs and event-driven integration patterns.', outcome: 'A service-oriented foundation for transport management workflows.', tabs: [{ label: 'Architecture', content: 'Node.js services and Kafka events formed the integration backbone, with Angular modules consuming REST APIs.' }] },
    { title: 'ESB Migration', type: 'Internal Platform', label: 'INTEGRATION / MIGRATION', summary: 'Enterprise migration workflows and integration services using Node.js and Dell Boomi.', technologies: ['Node.js', 'Dell Boomi'], challenge: 'Move enterprise integration workflows into a modern service and integration model.', contribution: 'Contributed to migration workflows and integration services.', outcome: 'Documented, maintainable integration paths for enterprise systems.', tabs: [{ label: 'Approach', content: 'Combined Node.js services with Dell Boomi workflows to support enterprise migration needs.' }] },
    { title: 'Knowledge Base RAG Assistant (Demo)', type: 'Demo Concept', label: 'AI / DEMO CONCEPT', summary: 'A clearly labeled demonstration concept for document ingestion, chunking, retrieval, citations and grounded answers.', technologies: ['Python/FastAPI', 'Embeddings', 'Vector search', 'Azure OpenAI/OpenAI API', 'React/Angular'], challenge: 'Explore how a knowledge base can answer questions with traceable source context.', contribution: 'Demonstrates an ingestion-to-answer flow with chunking, retrieval, citations and grounded response patterns.', outcome: 'Demo concept only; not claimed as production employment work.', tabs: [{ label: 'Demo scope', content: 'This portfolio concept illustrates a bounded RAG workflow and is intentionally separate from employment claims.' }, { label: 'Evaluation', content: 'Useful checks include retrieval quality, citation coverage, groundedness and safe handling of unknown answers.' }] },
  ] satisfies Project[],
} as const
