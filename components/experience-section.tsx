type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

type ExperienceSectionProps = {
  experiences: Experience[];
  className?: string;
};

export function ExperienceSection({
  experiences,
  className = "",
}: ExperienceSectionProps) {
  return (
    <section id="experience" className={`flex flex-col gap-8 ${className}`}>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Experience Timeline
        </h2>
        <p className="text-lg text-slate-300">
          Showcase the roles you&apos;ve loved and the outcomes you&apos;ve
          driven. Add concrete numbers to stand out.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {experiences.map((experience) => (
          <article
            key={experience.role}
            className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-start md:gap-8"
          >
            <div className="md:w-64">
              <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
                {experience.period}
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <p className="text-sm text-slate-300">{experience.company}</p>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <p className="text-base text-slate-300">{experience.summary}</p>
              <ul className="flex flex-col gap-3 text-sm text-slate-300">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-slate-900/60 px-4 py-3"
                  >
                    <span className="mt-1 size-1.5 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

