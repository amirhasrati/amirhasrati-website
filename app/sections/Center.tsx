import About from "./About";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";

export default function Center() {
  return (
    <div className="max-w-2xl flex flex-col gap-32 px-8 py-16">
      <Header title="Amir Hasrati" subtitle="CS @ University of Guelph" showSocials={true} />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
