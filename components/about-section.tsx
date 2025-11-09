type AboutSectionProps = {
  skills: string[];
  className?: string;
};

export function AboutSection({ skills, className = "" }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={`grid gap-10 lg:grid-cols-[1.2fr_1fr] ${className}`}
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Designing for clarity, building for performance.
        </h2>
        <p className="text-lg leading-relaxed text-slate-300">
          The experience I have gained through working remotely and on-site,
          collaborating with teams from different cultures and timezones, has
          given me a unique perspective on how to work effectively in different situations.
        </p>
        <p className="text-lg leading-relaxed text-slate-400">
          As someone who has also been a Scrum Master and a QA Tester, I have a unique perspective on how to work effectively in a team.
          I have a deep understanding of the different roles and how they fit into the overall development process.
          Quality is my top priority and I always strive to deliver the best possible product.
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
          Core Skills
        </span>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

