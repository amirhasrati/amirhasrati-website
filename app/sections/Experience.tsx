import ExperienceItem from "~/components/ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-8">
      <h2 className="font-semibold text-xl text-neutral-900">EXPERIENCE</h2>
      <ExperienceItem
        date="MAY 2024"
        title="Freelance Web Designer & Developer"
        company="Argentium Consulting"
        description="Redesigned and developed client website using Remix and React, significantly improving the user interface and delivering a seamless user experience. Optimized website content to enhance search engine rankings, adhering to Google’s technical requirements and spam policies. Implemented responsive design techniques, ensuring website functions flawlessly across various devices and screen sizes."
        tags={["React", "TypeScript", "Remix", "HTML & CSS", "Tailwind", "Vercel"]}
      />
      <ExperienceItem
        date="SEP - DEC 2023"
        title="Teaching Assistant - Programming I"
        company="University of Guelph"
        description="Taught C programming concepts including print-formatting, conditional statements, loops, functions, pointers, and structs to over 200 students. Graded coding assignments using an in-house automatic grading script and communicated accurate feedback and explanations to each student. Proactively followed instructor specifications and requirements, completing tasks efficiently and contributing to a cohesive teaching team, providing a positive learning environment for all students."
        tags={["C", "Linux CL", "Debugging", "Tracing"]}
      />
    </section>
  );
}
