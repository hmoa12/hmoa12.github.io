import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ContactSectionProps = {
  email: string;
  preferredCollaboration: string;
  responseTime: string;
  className?: string;
};

export function ContactSection({
  email,
  preferredCollaboration,
  responseTime,
  className = "",
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`flex flex-col gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/20 px-8 py-12 shadow-2xl shadow-cyan-500/10 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something remarkable.
        </h2>
        <p className="text-lg text-slate-300">
          Share a project idea, timeline, or just say hello. I typically respond
          within a day and love collaborations that push the web forward.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
          <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Email
          </span>
          <Link
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-lg text-white transition hover:text-cyan-200"
          >
            {email}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
          <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Preferred Collaboration
          </span>
          <p className="text-base text-slate-300">{preferredCollaboration}</p>
        </div>
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
          <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Response Time
          </span>
          <p className="text-base text-slate-300">{responseTime}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link
          href={`mailto:${email}`}
          className="group flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-slate-950 transition hover:bg-cyan-300"
        >
          Start a conversation
          <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <Link
          href="#projects"
          className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-slate-200 transition hover:border-cyan-400/60 hover:text-white"
        >
          Explore more work
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

