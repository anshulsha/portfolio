export const profile_content = {
  hero: {
    name: "Anshul Kumar Sharma",
    title: "Software Engineer & Startup Co-Founder",
    summary:
      "Full-stack engineer delivering production-grade fintech, developer tooling, and workforce platforms. Blend of startup execution and enterprise-grade engineering with an eye on measurable business outcomes.",
    status:
      "Open To Software Engineering Roles And High-Impact Freelance Engagements",
    primary_cta: {
      label: "Download Resume",
      href: "https://drive.google.com/file/d/1rriflUGBzenAr7tWTmuHYdh_dC5SgoXI/view?usp=sharing",
      target: "_blank",
    },
    secondary_cta: {
      label: "View Experience",
      href: "#experience",
    },
    stats: [
      {
        value: "4+ Years",
        label: "End-To-End Engineering Experience",
      },
      {
        value: "2M+",
        label: "Customers Onboarded Via NiyoGlobal",
      },
      {
        value: "200K+",
        label: "Annual Transactions Powered For SportsHub",
      },
    ],
  },
  about: {
    label: "About",
    headline: "Engineering Products That Ship Fast And Scale Reliably",
    narrative: [
      "I specialise in building resilient platforms for fintech, sports-tech, and growth-stage startups. From co-founding QuickWage to implementing mission-critical services across OpenEnvoy, Rudderstack, Open Financial, and Niyo, I translate business goals into dependable systems.",
      "My toolbox spans TypeScript, Node, React, Python, Go, and modern cloud infrastructure. I collaborate closely with product, data, and operations to automate workflows, improve observability, and keep teams moving swiftly.",
    ],
    capabilities: [
      "Product Architecture & Roadmapping",
      "API & Platform Engineering",
      "Developer Tooling & Automation",
      "Cloud Infrastructure (AWS, Kubernetes, Terraform)",
      "Data & Observability Pipelines",
      "Team Enablement & Technical Leadership",
    ],
  },
  experience: [
    {
      role: "Software Engineer",
      company: "OpenEnvoy",
      duration: "April 2024 — September 2025",
      location: "Bengaluru, India",
      achievements: [
        "• Developed Python integrations for QuickBooks, Oracle Fusion, FuelMe, and RentalMan ERPs.",
        "• Introduced weighted PostgreSQL write strategy to cut database load by 80%.",
        "• Optimised data synchronisation flows, reducing sync time by 50%.",
      ],
    },
    {
      role: "Co-Founder & CTO",
      company: "QuickWage.in",
      duration: "April 2023 — September 2024",
      location: "Remote",
      achievements: [
        "• Shipped lending partner onboarding MVP to accelerate integrations with financial partners.",
        "• Designed NestJS services with 99.9% uptime, backed by GitHub Actions + Kubernetes (Helm) deployments.",
        "• Implemented HRMS platform reducing HR and accounting workload by roughly 60%.",
        "• Led pilot rollout, investor pitches, and strategic fundraising initiatives.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Rudderstack",
      duration: "September 2023 — March 2024",
      location: "Remote",
      achievements: [
        "• Optimised customer data platform transformations in Python and JavaScript, lowering latency by 30%.",
        "• Automated Helm-based deployments on AWS EKS and strengthened CI/CD with GitHub Actions.",
        "• Instrumented Grafana dashboards to monitor HTTP latency and implemented Redis-backed state store for 3× faster access.",
        "• Ran K6 load testing with Grafana + InfluxDB to validate scale under high traffic.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Open Financial",
      duration: "August 2022 — April 2023",
      location: "Bengaluru, India",
      achievements: [
        "• Delivered lending products that accelerated growth 3× within two months.",
        "• Built analytics-driven admin portal for real-time operations visibility.",
        "• Implemented Kafka + Freshworks event pipelines cutting issue resolution time by 40%.",
        "• Developed selfie and document capture flows that shifted processing to the frontend.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Niyo Solutions",
      duration: "February 2021 — August 2022",
      location: "Bengaluru, India",
      achievements: [
        "• Migrated legacy PHP tooling to React, reducing maintenance overhead by 40%.",
        "• Built onboarding APIs that helped enrol 2M+ customers for NiyoGlobal.",
        "• Launched onboarding web app and NiyoBharat dashboard from the ground up, supported by automated CI/CD and Jest/Tap coverage.",
      ],
    },
  ],
  education: [
    {
      institution: "Arizona State University",
      qualification: "Master's In Software Engineering",
      duration: "August 2025 — Current",
      location: "Tempe, Arizona",
    },
    {
      institution: "Indian Institute Of Information Technology, Bhopal",
      qualification: "B.Tech In Computer Science & Engineering",
      duration: "August 2017 — April 2021",
      location: "Bhopal, India",
    },
  ],
  skills: [
    {
      category: "Languages & Frameworks",
      items: [
        "TypeScript",
        "Node.js (NestJS, Express, Fastify, Koa)",
        "React",
        "Go",
        "Python",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS (EC2, EKS, Route53)",
        "Docker",
        "Kubernetes",
        "Helm",
        "Terraform",
        "GitHub Actions",
      ],
    },
    {
      category: "Data & Observability",
      items: [
        "PostgreSQL",
        "Kafka",
        "Redis",
        "RabbitMQ",
        "InfluxDB",
        "Prometheus",
        "Grafana",
        "ElasticSearch",
      ],
    },
    {
      category: "Delivery & Testing",
      items: [
        "CI/CD Automation",
        "Unit, Integration, And E2E Testing",
        "K6 Load Testing",
        "Design Patterns",
      ],
    },
  ],
  projects: [
    {
      slug: "quickwage-platform",
      name: "QuickWage Workforce Financial Wellness",
      role: "Co-Founder & CTO",
      period: "June 2023 — Present",
      summary:
        "Earned-wage access and HRMS platform enabling employers to offer on-demand pay, compliance-ready payroll flows, and financial education for the workforce.",
      highlights: [
        "Built lender onboarding portal and API integrations to accelerate partner go-lives.",
        "Designed NestJS services with 99.9% uptime, Kubernetes deployments, and automated compliance reporting.",
        "Launched HRMS suite reducing HR and accounting workload by roughly 60% across pilot cohorts.",
      ],
      tech_stack: [
        "NestJS",
        "React",
        "PostgreSQL",
        "AWS",
        "Kubernetes",
        "GitHub Actions",
      ],
      live_links: [
        { label: "Corporate Site", href: "https://www.quickwage.in" },
      ],
    },
    {
      slug: "whs-sports-hub",
      name: "WHS Sports Hub Booking Platform",
      role: "Freelance Fullstack Engineer",
      period: "September 2020 — July 2021",
      summary:
        "Commercial MERN platform with real-time slot management, dynamic pricing, and operations analytics for a multi-sport facility network.",
      highlights: [
        "Delivered live platform processing $200K+ annual transactions with 50K+ active users.",
        "Built scheduling, pricing, and override dashboards lifting operational efficiency by ~70%.",
        "Implemented Razorpay payments, JWT authentication, Dockerised deployment, and participation analytics.",
      ],
      tech_stack: ["MongoDB", "Express", "React", "Node", "Razorpay", "Docker"],
      live_links: [{ label: "SportsHub", href: "https://www.whssportshub.in" }],
    },
    {
      slug: "Freelance Fullstack Engineer",
      name: "Woodlands House School",
      role: "Freelance Fullstack Engineer",
      period: "March 2021 — July 2021",
      summary:
        "Corporate presence highlighting premium sports infrastructure, hospitality, and real-estate ventures with investor-ready storytelling.",
      highlights: [
        "Developed a dynamic website for Woodlands House School, integrating admissions, curriculum info, events, and virtual tours.",
        "Built separate secure login ports for students and parents, enhancing user-access and communication.",
        "Designed mobile-responsive front-end using HTML, CSS, JavaScript so the site works smoothly on all devices.",
        "Implemented CMS functionality for staff to update “Admissions open,” “Events,” and curriculum pages without developer help.",
        "Integrated social media links (Instagram, Facebook) for the school’s community outreach and branding.",
        "Optimized site performance and accessibility, ensuring quick load times and usability for all users (parents, students, staff).",
        "Provided documentation and training to school staff to manage site content independently going forward.",
      ],
      tech_stack: [
        "NestJS",
        "React",
        "PostgreSQL",
        "AWS",
        "Kubernetes",
        "GitHub Actions",
      ],
      live_links: [
        {
          label: "Woodlands House School",
          href: "https://www.whssgr.com",
        },
      ],
    },
  ],
  contact: {
    email: "akshar18@asu.edu",
    // phone: "+1 (480) 531-3506",
    location: "Tempe, Arizona • Open To Remote",
    social_links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/anshulsharma144",
      },
      {
        label: "GitHub",
        href: "https://github.com/",
      },
    ],
  },
};
