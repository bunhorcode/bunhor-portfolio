/**
 * Single source of truth for all portfolio content.
 * Edit this file only; components read from it.
 * Anything marked "EDIT" is an example/placeholder, not a verified claim.
 */

export type SkillIcon = "container" | "workflow" | "cloud" | "activity" | "git";

export interface SkillCategory {
  title: string;
  icon: SkillIcon;
  skills: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  /** Repository URL. Use "" to hide the link. */
  repo: string;
  /** Optional live demo URL. */
  demo?: string;
}

export interface Service {
  title: string;
  description: string;
  points: string[];
}

export interface Portfolio {
  name: string;
  profileImage: string;
  jobTitle: string;
  intro: string;
  /** Used for <meta description> and Open Graph. */
  seoDescription: string;
  about: { paragraphs: string[]; focus: string[] };
  /** Use "" until you want to publish an email address. */
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  availability: { show: boolean; label: string };
  skills: SkillCategory[];
  projects: Project[];
  services: Service[];
  contactHeading: string;
  contactText: string;
}

export const portfolio: Portfolio = {
  name: "Deb Bunhor",
  profileImage: "/images/profile-deb-bunhor.jpg",
  jobTitle: "DevOps Engineer",
  intro:
    "I build reliable infrastructure, automate workflows, and simplify software delivery through modern DevOps practices.",
  seoDescription:
    "Deb Bunhor is a DevOps Engineer focused on automation, cloud infrastructure, containerization, Kubernetes, and CI/CD.",

  about: {
    // EDIT: refine these paragraphs in your own words.
    paragraphs: [
      "I'm a DevOps Engineer interested in building reliable, scalable, and automated infrastructure. I enjoy turning manual, error-prone processes into repeatable pipelines that teams can trust.",
      "My interests span cloud infrastructure, containers, Kubernetes, and the tooling that connects code to production, from CI/CD to monitoring and observability.",
    ],
    focus: [
      "Cloud infrastructure",
      "Containerization",
      "Kubernetes orchestration",
      "CI/CD automation",
      "Infrastructure as Code",
      "Monitoring and observability",
      "Linux and system administration",
    ],
  },

  // EDIT: add your real address, e.g. "you@example.com". This enables the copy-email button.
  email: "",
  // EDIT: replace "your-username" with your real handles.
  githubUrl: "https://github.com/your-username",
  linkedinUrl: "https://www.linkedin.com/in/your-username",

  // EDIT: set show to false to hide the availability badge.
  availability: { show: true, label: "Open to new opportunities" },

  // EDIT: example skills, not certifications or claims of proficiency.
  skills: [
    { title: "Containers & Orchestration", icon: "container", skills: ["Docker", "Kubernetes", "Helm"] },
    { title: "CI/CD & Automation", icon: "workflow", skills: ["GitHub Actions", "Jenkins", "GitLab CI/CD"] },
    { title: "Cloud & Infrastructure", icon: "cloud", skills: ["AWS", "Linux", "Nginx", "Terraform"] },
    { title: "Monitoring & Observability", icon: "activity", skills: ["Prometheus", "Grafana", "Loki"] },
    { title: "Version Control & Tools", icon: "git", skills: ["Git", "GitHub", "Bash", "YAML"] },
  ],

  // EDIT: example projects. Replace repo URLs with your real repositories.
  projects: [
    {
      name: "Kubernetes Deployment Platform",
      description: "A reference setup for deploying containerized services to Kubernetes with Helm charts and an Nginx ingress.",
      tags: ["Kubernetes", "Docker", "Helm", "Nginx"],
      repo: "https://github.com/your-username/kubernetes-deployment-platform",
    },
    {
      name: "CI/CD Automation Pipeline",
      description: "A GitHub Actions pipeline that lints, tests, builds a Docker image, and publishes a Next.js application.",
      tags: ["GitHub Actions", "Docker", "Next.js"],
      repo: "https://github.com/your-username/cicd-automation-pipeline",
    },
    {
      name: "Infrastructure Monitoring Stack",
      description: "A containerized metrics and dashboard stack for tracking host and service health.",
      tags: ["Prometheus", "Grafana", "Docker"],
      repo: "https://github.com/your-username/infrastructure-monitoring-stack",
    },
    {
      name: "Dockerized Application Deployment",
      description: "A Docker Compose setup for running and updating multi-container applications on a Linux server.",
      tags: ["Docker", "Docker Compose", "Linux"],
      repo: "https://github.com/your-username/dockerized-app-deployment",
      // demo: "https://example.com",
    },
  ],

  // EDIT: areas of work, not an employment history.
  services: [
    {
      title: "Infrastructure Automation",
      description: "Replace manual setup with versioned, repeatable infrastructure.",
      points: ["Infrastructure as Code with Terraform", "Server configuration with Bash and YAML"],
    },
    {
      title: "Containerization & Orchestration",
      description: "Package applications once and run them consistently everywhere.",
      points: ["Docker images and multi-stage builds", "Kubernetes deployments with Helm"],
    },
    {
      title: "CI/CD Pipeline Development",
      description: "Shorten the path from commit to production.",
      points: ["Build, test, and release pipelines", "GitHub Actions, GitLab CI/CD, and Jenkins"],
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Run workloads on cloud and Linux hosts with sensible defaults.",
      points: ["AWS resources and networking basics", "Nginx, Linux administration, and hardening"],
    },
    {
      title: "Monitoring & System Reliability",
      description: "Know what is happening in a system before users do.",
      points: ["Metrics and dashboards with Prometheus and Grafana", "Log aggregation with Loki"],
    },
  ],

  contactHeading: "Let's build something reliable together.",
  contactText: "Have a project, a role, or a question about DevOps? Get in touch.",
};
