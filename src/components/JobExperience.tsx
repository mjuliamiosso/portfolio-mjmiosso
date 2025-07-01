import { useState } from "react";

interface Experience {
  company: string;
  title: string;
  date: string;
  description: string;
}

interface JobExperienceProps {
  experiences: Experience[];
}

const JobExperience = ({ experiences }: JobExperienceProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section className="flex flex-col lg:flex-row gap-6">
      {/* Botões de empresas */}
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-pressed={index === activeIndex}
            className={`px-3 py-2 rounded-md text-base font-medium transition cursor-pointer text-left ${
              index === activeIndex
                ? "bg-[var(--color-primary-light)] text-[var(--color-primary)] font-bold"
                : "border-[var(--color-primary)] text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
            }`}
          >
            {exp.company}
          </button>
        ))}
      </div>

      {/* Conteúdo da experiência */}
      <div className="flex-1 space-y-5">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <p className="text-xl font-bold text-[var(--color-text-primary)]">
            {active.title}
          </p>
          <p className="text-sm text-[var(--color-text-light)]">
            {active.date}
          </p>
        </div>
        {active.description.split("\n").map((line, i) => (
          <p key={i} className="text-base text-[var(--color-text-primary)]">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default JobExperience;
