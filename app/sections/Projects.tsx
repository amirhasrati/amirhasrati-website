import Project from "~/components/Project";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-16">
      <h2 className="font-semibold text-neutral-900 text-xl">PROJECTS</h2>
      <Project
        title="To-do List App"
        projectUrl="https://github.com/amirhasrati/todulo-app"
        description="A simple to-do app and my first full-stack application! Responsive and user-friendly UI components built with React.js and Tailwind CSS. Back-end built with Express.js and MongoDB."
        imgUrl="/todulo-app.png"
        imgAlt="Image of To-do List App"
        tags={["React", "JavaScript", "HTML & CSS", "Tailwind", "Express.js", "MongoDB"]}
      />
      <Project
        title="Whack-A-Mole Game"
        projectUrl="https://github.com/amirhasrati/whack-a-cloud"
        description="Whack-A-Cloud. Inspired by the classic carnival game, “Whack-A-Mole”, this game was built as a project for my high-school computer science course with the PyGame library."
        imgUrl="/whack-a-cloud.png"
        imgAlt="Image of Whack-A-Cloud game."
        tags={["Python", "PyGame"]}
      />
    </section>
  );
}
