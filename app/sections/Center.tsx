import About from "./About";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";

export default function Center() {
  return (
    <div className="flex flex-col gap-16 px-8 py-16">
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
