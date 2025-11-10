import "./App.css";
import {
  SiAmazonwebservices,
  SiApachekafka,
  SiDocker,
  SiElasticsearch,
  SiGithubactions,
  SiGo,
  SiGrafana,
  SiHelm,
  SiInfluxdb,
  SiKubernetes,
  SiNestjs,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { FiActivity, FiCheckCircle, FiGitCommit, FiLayers } from "react-icons/fi";
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

  const skills_icon_map = {
    typescript: <SiTypescript className="skills_icon" />,
    nestjs: <SiNestjs className="skills_icon" />,
    react: <SiReact className="skills_icon" />,
    go: <SiGo className="skills_icon" />,
    python: <SiPython className="skills_icon" />,
    aws: <SiAmazonwebservices className="skills_icon" />,
    docker: <SiDocker className="skills_icon" />,
    kubernetes: <SiKubernetes className="skills_icon" />,
    helm: <SiHelm className="skills_icon" />,
    terraform: <SiTerraform className="skills_icon" />,
    github_actions: <SiGithubactions className="skills_icon" />,
    postgresql: <SiPostgresql className="skills_icon" />,
    kafka: <SiApachekafka className="skills_icon" />,
    redis: <SiRedis className="skills_icon" />,
    rabbitmq: <SiRabbitmq className="skills_icon" />,
    influxdb: <SiInfluxdb className="skills_icon" />,
    prometheus: <SiPrometheus className="skills_icon" />,
    grafana: <SiGrafana className="skills_icon" />,
    elasticsearch: <SiElasticsearch className="skills_icon" />,
    cicd: <FiGitCommit className="skills_icon" />,
    testing: <FiCheckCircle className="skills_icon" />,
    load_testing: <FiActivity className="skills_icon" />,
    design_patterns: <FiLayers className="skills_icon" />,
  };

  const social_icon_map = {
    LinkedIn: (
      <svg
        className="contact_icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5Zm.02 6H2v11h3V9.5Zm5 0H7v11h3v-5.5c0-1.15.84-2 2-2 1.14 0 1.98.85 2 2V20.5h3v-6.5c0-2.97-1.67-4.5-4-4.5-1.95 0-3 .97-3.5 1.85h-.04V9.5Z" />
      </svg>
    ),
    GitHub: (
      <svg
        className="contact_icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.69-3.87-1.37-3.87-1.37-.53-1.36-1.29-1.72-1.29-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.96.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.46-2.29 1.2-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.21 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.23-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.8 1.2 1.83 1.2 3.09 0 4.42-2.7 5.4-5.28 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  };

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
                {group.items.map((item) => {
                  const item_data =
                    typeof item === "string"
                      ? { label: item, icon: null }
                      : item;
                  return (
                    <li
                      key={item_data.label}
                      className="skills_item"
                    >
                      {item_data.icon && skills_icon_map[item_data.icon] && (
                        <span
                          className="skills_icon_wrapper"
                          aria-hidden="true"
                        >
                          {skills_icon_map[item_data.icon]}
                        </span>
                      )}
                      <span>{item_data.label}</span>
                    </li>
                  );
                })}
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
                    className="inline_link contact_social_link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social_icon_map[link.label] && (
                      <span className="contact_icon_wrapper" aria-hidden="true">
                        {social_icon_map[link.label]}
                      </span>
                    )}
                    <span>{link.label}</span>
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
