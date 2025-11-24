import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { TypewriterName } from "@/components/typewriter-name";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { ScrollLink } from "@/components/scroll-link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    title: "Dev CLI Tools",
    description:
      "A CLI tools for developers to help them with their daily tasks.",
    stack: ["TypeScript", "Node.js"],
    liveUrl: "https://github.com/hmoa12/dev-cli-tools",
    repoUrl: "https://github.com/hmoa12/dev-cli-tools",
  },
  {
    title: "Task Management System API",
    description:
      "A RESTful API for task management built with Express.js, TypeScript, and PostgreSQL. Features role-based access control with user authentication and authorization.",
    stack: ["TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    liveUrl: "https://github.com/hmoa12/task-tracker-api",
    repoUrl: "https://github.com/hmoa12/task-tracker-api",
  },
];

const experiences = [
  {
    role: "Scrum Master",
    company: "Incytel Game Studio",
    period: "2024 — 2024",
    summary:
      "Leading the team and the projects for the company.",
    highlights: [
      "Managed a the scrum process and the team of the game Mencherz with millions of downloads.",
      "Ran planning, reviews, and retrospectives with a coaching mindset so blockers surfaced early and velocity stayed predictable.",
      "Worked side-by-side with the Product Owner to keep the backlog sharp, focused on player value, and ready for every sprint.",
    ],
  },
  {
    role: "QA Tester",
    company: "Incytel Game Studio",
    period: "2021 — 2024",
    summary:
      "Testing the games and the website for the company.",
    highlights: [
      "Built hybrid manual and automated test plans (Playwright + API checks) covering gameplay and supporting web flows.",
      "Led cross-functional bug triage, prioritizing fixes and ensuring critical issues were resolved within 24 hours.",
    ],
  },
  {
    role: "Tech and Design Mentor",
    company: "Garage48",
    period: "09.06.2020 - 12.06.2020",
    summary:
      "Mentored students and young talents on web development and design principles.",
    highlights: [
      "Helped students build their own projects from scratch.",
      "Taught students how to use the latest web technologies.",
      "Helped students improve their design skills.",
    ],
  },
  {
    role: "Web Development Internship",
    company: "Kabul University",
    period: "12.2018 - 03.2019",
    summary:
      "Worked on projects for the university's website and other projects.",
    highlights: [
      "Supporting and maintaining the projects.",
      "Working together with the team to deliver the projects on time.",
      "Working together as a team to optimize the projects for the best performance."
    ],
  },
];

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Agile",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-20%] mx-auto h-[480px] w-[640px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),rgba(15,23,42,0))] blur-3xl" />
        <div className="absolute inset-y-0 right-[-10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_bottom,_rgba(252,165,165,0.25),rgba(15,23,42,0))] blur-3xl" />
        <div className="absolute inset-y-10 left-[-15%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(167,139,250,0.28),rgba(15,23,42,0))] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),rgba(2,6,23,0.92))]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-10 md:px-12 lg:px-16">
        <header className="flex flex-col gap-16 rounded-3xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-6 md:max-w-2xl">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-slate-300">
              <span className="h-[1px] w-8 bg-slate-400/60" />
              Web Developer, Scrum Master and QA Tester
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Crafting immersive, performant web experiences that feel effortless.
            </h1>
            <p className="text-lg text-slate-300 sm:text-xl">
              Hi, I&apos;m{" "}
              <TypewriterName
                name="Mohammad"
                className="text-nowrap"
                startDelay={600}
              />{" "}
              — a product-focused engineer building modern, accessible interfaces with Next.js and a deep appreciation for thoughtful visual design.
            </p>
            <div className="flex flex-wrap gap-3">
              <ScrollLink
                href="#projects"
                className="group flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
                <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </ScrollLink>
              <ScrollLink
                href="#contact"
                className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                Let's Collaborate
                <Send className="size-4" />
              </ScrollLink>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-cyan-500/10 sm:w-80">
            <div className="flex items-center justify-between text-sm font-medium text-slate-300">
              <span>Availability</span>
              <span className="flex items-center gap-2 text-emerald-300">
                <span className="availability-full">Open for new projects</span>
                <span className="availability-short">Available</span>
                <span className="size-2 flex-shrink-0 rounded-full bg-emerald-300" />
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Currently shipping web experiences for visionary teams. Drop a note and let&apos;s shape your next launch.
            </p>
            <div className="flex flex-wrap gap-2 text-sm text-slate-300">
              {["Remote-first", "UTC-05", "English / German"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
              >
                <Download className="size-4" />
                Download Résumé
              </Link>
              <Link
                href="mailto:sayedmohammad61@gmail.com"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
              >
                <Mail className="size-4" />
                Email Me
              </Link>
            </div>
            <div className="flex gap-3 pt-2 text-slate-300">
              <Link
                href="https://github.com/hmoa12"
                className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400/60 hover:text-white"
              >
                <Github className="size-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abedy/"
                className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-cyan-400/60 hover:text-white"
              >
                <Linkedin className="size-4" />
              </Link>
            </div>
          </div>
        </header>

        <nav className="sticky top-6 z-10 hidden rounded-full border border-white/10 bg-slate-900/80 p-1 text-sm shadow-lg shadow-cyan-500/10 backdrop-blur md:flex md:items-center md:justify-center">
          <ul className="flex flex-wrap items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <ScrollLink
                  href={item.href}
                  className="block rounded-full px-4 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex flex-col gap-24">
          <AboutSection skills={skills} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experiences={experiences} />
        </main>

        <ContactSection
          email="sayedmohammad61@gmail.com"
          preferredCollaboration="Creative agencies, and founders crafting polished MVPs."
          responseTime="I typically reply within 24 hours on weekdays."
        />

        <footer className="flex flex-col items-center gap-3 pb-8 text-sm text-slate-400 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Sayed Mohammad Abedy. All rights reserved.</span>
          <div className="flex gap-4">
        
            <Link
              href="https://www.linkedin.com/in/abedy/"
              className="transition hover:text-cyan-200"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/hmoa12"
              className="transition hover:text-cyan-200"
            >
              GitHub
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
