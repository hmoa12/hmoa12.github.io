import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
};

type ProjectsSectionProps = {
  projects: Project[];
  className?: string;
};

export function ProjectsSection({
  projects,
  className = "",
}: ProjectsSectionProps) {
  return (
    <section id="projects" className={`flex flex-col gap-8 ${className}`}>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Featured Work
        </h2>
        <p className="text-lg text-slate-300">
          Each project blends crisp aesthetics with measurable impact. Swap in
          your own case studies, metrics, and links.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),transparent_65%)]" />
            </div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <Link
                href={project.liveUrl}
                className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:border-cyan-400/60 hover:text-white"
              >
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
            <p className="text-base text-slate-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-slate-400">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-3 text-sm text-slate-300">
              <Link
                href={project.repoUrl}
                className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-cyan-400/60 hover:text-white"
              >
                <Github className="size-3.5" />
                View code
              </Link>
              <Link
                href={project.liveUrl}
                className="flex items-center gap-2 rounded-full border border-transparent px-3 py-1.5 text-cyan-300 transition hover:text-cyan-200"
              >
                Launch project
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

