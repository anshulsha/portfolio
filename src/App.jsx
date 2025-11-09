import "./App.css";
import { profile_content } from "./content/profile_content.js";

function App() {
  const { hero, about, experience, education, skills, projects, contact } =
    profile_content;

  const navigation_links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="page_shell">
      <header className="site_header">
        <span className="brand_mark">{hero.name}</span>
        <nav className="site_nav">
          {navigation_links.map((link) => (
            <a key={link.href} href={link.href} className="nav_link">
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header_cta" href={hero.primary_cta.href}>
          {hero.primary_cta.label}
        </a>
      </header>

      <section id="hero" className="hero_section">
        <div className="hero_content">
          <p className="status_badge">{hero.status}</p>
          <h1 className="hero_title">
            {hero.title}
            <span className="hero_name">{hero.name}</span>
          </h1>
          <p className="hero_summary">{hero.summary}</p>
          <div className="hero_actions">
            <a
              className="primary_button"
              href={hero.primary_cta.href}
              target={hero.primary_cta.target}
            >
              {hero.primary_cta.label}
            </a>
            <a className="secondary_button" href={hero.secondary_cta.href}>
              {hero.secondary_cta.label}
            </a>
          </div>
        </div>
        <ul className="hero_stats">
          {hero.stats.map((stat) => (
            <li key={stat.label} className="stat_card">
              <span className="stat_value">{stat.value}</span>
              <span className="stat_label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="about" className="content_section">
        <div className="section_intro">
          <p className="section_label">{about.label}</p>
          <h2 className="section_title">{about.headline}</h2>
        </div>
        <div className="about_grid">
          <div className="about_story">
            {about.narrative.map((paragraph) => (
              <p key={paragraph} className="body_text">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="about_capabilities">
            <h3 className="subheading">Core Capabilities</h3>
            <ul className="chip_list">
              {about.capabilities.map((capability) => (
                <li key={capability} className="chip_item">
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="content_section">
        <div className="section_intro">
          <p className="section_label">Experience</p>
          <h2 className="section_title">Recent Roles & Impact</h2>
        </div>
        <div className="experience_timeline">
          {experience.map((entry) => (
            <article
              key={`${entry.company}-${entry.role}`}
              className="experience_card"
            >
              <div className="experience_header">
                <div>
                  <h3 className="experience_role">{entry.role}</h3>
                  <p className="experience_company">{entry.company}</p>
                </div>
                <div className="experience_meta">
                  <span>{entry.duration}</span>
                  <span>{entry.location}</span>
                </div>
              </div>
              <ul className="experience_points">
                {entry.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="content_section">
        <div className="section_intro">
          <p className="section_label">Education</p>
          <h2 className="section_title">Academic Background</h2>
        </div>
        <div className="education_grid">
          {education.map((item) => (
            <div key={item.institution} className="education_card">
              <h3 className="education_institution">{item.institution}</h3>
              <p className="education_qualification">{item.qualification}</p>
              <div className="education_meta">
                <span>{item.duration}</span>
                <span>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="content_section">
        <div className="section_intro">
          <p className="section_label">Expertise</p>
          <h2 className="section_title">Tools & Practices</h2>
        </div>
        <div className="skills_grid">
          {skills.map((group) => (
            <div key={group.category} className="skills_card">
              <h3 className="skills_category">{group.category}</h3>
              <ul className="skills_list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="content_section">
        <div className="section_intro">
          <p className="section_label">Projects</p>
          <h2 className="section_title">Selected Work</h2>
        </div>
        <div className="projects_grid">
          {projects.map((project) => (
            <article key={project.slug} className="project_card">
              <div className="project_header">
                <div>
                  <h3 className="project_title">{project.name}</h3>
                  <p className="project_role">{project.role}</p>
                </div>
                <span className="project_period">{project.period}</span>
              </div>
              <p className="body_text">{project.summary}</p>
              <ul className="project_highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <ul className="stack_list">
                {project.tech_stack.map((item) => (
                  <li key={item} className="stack_item">
                    {item}
                  </li>
                ))}
              </ul>
              {project.live_links && project.live_links.length > 0 && (
                <div className="project_link_group">
                  {project.live_links.map((link) => (
                    <a
                      key={link.href}
                      className="inline_link project_cta"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label || "Visit Live Site"}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="content_section">
        <div className="section_intro">
          <p className="section_label">Contact</p>
          <h2 className="section_title">Let’s Work Together</h2>
          <p className="body_text">
            Have a role or freelance engagement in mind? I’m available for
            impactful engineering work across fintech, sports-tech, and
            developer tooling.
          </p>
        </div>
        <div className="contact_panel">
          <div className="contact_row">
            <span className="contact_label">Email</span>
            <a className="inline_link" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </div>
          {/* <div className="contact_row">
            <span className="contact_label">Phone</span>
            <a
              className="inline_link"
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
            >
              {contact.phone}
            </a>
          </div> */}
          <div className="contact_row">
            <span className="contact_label">Location</span>
            <span className="body_text">{contact.location}</span>
          </div>
          <div className="contact_row">
            <span className="contact_label">Connect</span>
            <ul className="contact_links">
              {contact.social_links.map((link) => (
                <li key={link.href}>
                  <a
                    className="inline_link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="site_footer">
        <p className="body_text">
          © {new Date().getFullYear()} {hero.name}. Crafted For Recruiters And
          Collaborators.
        </p>
      </footer>
    </div>
  );
}

export default App;
