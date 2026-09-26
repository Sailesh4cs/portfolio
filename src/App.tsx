import { useEffect, useRef, useState } from 'react'
import { siteConfig, type Project, type SkillCategory } from './config'

const sections = [{ id: 'about', label: 'About' }, { id: 'work', label: 'Work' }, { id: 'skills', label: 'Skills' }, { id: 'contact', label: 'Contact' }]
const categories: Array<'All' | SkillCategory> = ['All', 'AI & Agentic AI', 'Backend/APIs', 'Frontend', 'Cloud/integration', 'Data/search', 'Messaging/DevOps', 'Practices']

function App() {
  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)
  const [category, setCategory] = useState<(typeof categories)[number]>('All')
  const [selected, setSelected] = useState<Project | null>(null)
  const [active, setActive] = useState('about')
  const menuButton = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLElement>(null)

  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light' }, [dark])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-25% 0px -65% 0px' })
    sections.forEach(({ id }) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!selected) return
    const previous = document.activeElement as HTMLElement
    modalRef.current?.focus()
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); previous?.focus() }
  }, [selected])

  const closeMenu = () => { setMenu(false); menuButton.current?.focus() }
  const skills = siteConfig.skills.filter((skill) => category === 'All' || skill.category === category)
  const optionalLinks = [{ label: 'GitHub', href: siteConfig.github }, { label: 'LinkedIn', href: siteConfig.linkedin }]

  return <div className="site-shell">
    <header className="nav-wrap"><nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Sailesh Kumar home"><span className="brand-mark">SK</span><span>Sailesh<br /><b>Kumar</b></span></a>
      <button ref={menuButton} className="menu-button" aria-expanded={menu} aria-controls="nav-links" onClick={() => setMenu(!menu)} onKeyDown={(event) => event.key === 'Escape' && closeMenu()}><span>{menu ? 'Close' : 'Menu'}</span><i /></button>
      <div id="nav-links" className={`nav-links ${menu ? 'is-open' : ''}`}>{sections.map((item) => <a className={active === item.id ? 'current' : ''} aria-current={active === item.id ? 'page' : undefined} key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}<button className="theme-toggle" aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} onClick={() => setDark(!dark)}>{dark ? '☼' : '☾'}</button></div>
    </nav></header>
    <main id="top">
      <section id="about" className="hero section-grid" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">Full Stack AI Developer · {siteConfig.location}</p><h1 id="hero-title">Building useful <em>intelligence</em> into enterprise software.</h1><p className="lede">{siteConfig.intro} {siteConfig.summary}</p><div className="hero-actions"><a className="button primary" href="#work">Explore work <span>↓</span></a><a className="text-link" href={`mailto:${siteConfig.email}`}>Start a conversation <span>↗</span></a></div><div className="hero-contact"><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div><div className="hero-orbit" aria-label="AI, cloud, APIs and content focus diagram"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core">SK<span>+</span></div><div className="orbit-node node-a">AI</div><div className="orbit-node node-b">APIs</div><div className="orbit-node node-c">CLOUD</div></div></section>
      <section className="signal-bar" aria-label="Verified focus areas"><span>Focus areas</span><strong>.NET / C#</strong><b>·</b><strong>AI workflows</strong><b>·</b><strong>Azure</strong><b>·</b><strong>Contentful</strong><b>·</b><strong>Kafka</strong></section>
      <section id="work" className="content-section" aria-labelledby="work-title"><div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">Enterprise systems.<br /><em>Practical AI.</em></h2></div><p className="section-note">A resume-grounded selection across production delivery, internal platforms and one clearly labeled demo concept.</p></div><div className="project-list">{siteConfig.projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-number">0{i + 1}</div><div className="project-main"><p className="tag">{project.label}</p><h3>{project.title}</h3><span className="project-type">{project.type}</span><p>{project.summary}</p><button className="case-link" onClick={() => setSelected(project)}>Open details <span>↗</span></button></div><div className="project-impact"><span>Technologies</span><div className="stack">{project.technologies.map((tech) => <small key={tech}>{tech}</small>)}</div></div></article>)}</div></section>
      <section id="skills" className="content-section about-grid" aria-labelledby="skills-title"><div><p className="eyebrow">02 / Skills</p><h2 id="skills-title">A broad stack.<br /><em>Deep delivery.</em></h2><div className="about-facts">{siteConfig.about.map((fact) => <p key={fact}>{fact}</p>)}</div></div><div><div className="filter-tabs" role="tablist" aria-label="Filter skills">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)} role="tab" aria-selected={category === item}>{item}</button>)}</div>{category === 'All' ? <div className="skills-overview">{Array.from(new Set(siteConfig.skills.map((skill) => skill.category))).map((group) => <section className="skill-group" key={group}><h3>{group}</h3><ul>{skills.filter((skill) => skill.category === group).map((skill) => <li key={skill.name}>{skill.name}</li>)}</ul></section>)}</div> : <div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.name}><span className="skill-icon">{skill.category.startsWith('AI') ? '✦' : '◈'}</span><div><p className="tag">{skill.category}</p><h3>{skill.name}</h3><p>{skill.detail}</p></div></article>)}</div>}</div></section>
      <section className="content-section ai-cloud-section" aria-labelledby="ai-cloud-title"><div className="section-heading"><div><p className="eyebrow">AI · Cloud · Practice</p><h2 id="ai-cloud-title">Capabilities that<br /><em>ship responsibly.</em></h2></div><p className="section-note">AI exploration stays grounded in secure integrations, clear boundaries, evaluation and operational reality.</p></div><div className="ai-cloud-grid">{Object.entries(siteConfig.aiCloud).map(([bucket, entries]) => <article className="ai-cloud-bucket" key={bucket}><span className="evidence">{bucket}</span><ul>{entries.map((entry) => <li key={entry}>{entry}</li>)}</ul></article>)}</div></section>
      <section className="approach-section" aria-labelledby="principles-title"><div className="section-heading"><div><p className="eyebrow">03 / Principles</p><h2 id="principles-title">Clarity is a<br /><em>technical feature.</em></h2></div><p className="section-note">I make contracts, boundaries and operational behavior explicit before optimizing the next layer.</p></div><div className="approach-flow"><div><span>01</span><h3>Understand</h3><p>Start with business context, source facts and the decision that matters.</p></div><div className="flow-arrow">→</div><div><span>02</span><h3>Design</h3><p>Make APIs, data, security and integration boundaries clear.</p></div><div className="flow-arrow">→</div><div><span>03</span><h3>Deliver</h3><p>Ship a bounded slice, observe it in production and keep improving.</p></div></div></section>
      <section id="contact" className="contact-section" aria-labelledby="contact-title"><p className="eyebrow">04 / Contact</p><h2 id="contact-title">Let’s build something<br /><em>useful together.</em></h2><p>Available for conversations about full stack development, enterprise APIs, cloud platforms and practical AI.</p><a className="button primary" href={`mailto:${siteConfig.email}`}>Email Sailesh <span>↗</span></a><div className="contact-meta"><span>{siteConfig.location}</span><a href={`tel:${siteConfig.phone}`}>☎ {siteConfig.phone}</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{optionalLinks.map((link) => <a key={link.label} href={link.href}>{link.label} ↗</a>)}</div></section>
    </main>
    <footer><span>© 2026 {siteConfig.name}</span><span>Engineering · AI · Delivery</span><a href="#top">Back to top ↑</a></footer>
    {selected && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}><article ref={modalRef} className="modal" role="dialog" tabIndex={-1} aria-modal="true" aria-labelledby="case-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details">×</button><p className="tag">{selected.label}</p><h2 id="case-title">{selected.title}</h2><p className="project-type">{selected.type}</p><div className="case-summary"><div><span className="case-label">Challenge</span><p>{selected.challenge}</p></div><div><span className="case-label">Contribution</span><p>{selected.contribution}</p></div><div><span className="case-label">Outcome</span><p>{selected.outcome}</p></div></div><div className="case-tabs">{selected.tabs.map((tab, i) => <details key={tab.label} open={i === 0}><summary>{tab.label}</summary><p>{tab.content}</p></details>)}</div></article></div>}
  </div>
}

export default App
