import NavBtn from "./NavBtn";

export default function Navbar() {
  return (
    <nav className="fixed top-[calc(50vh-4rem)] flex flex-col items-start gap-6">
      <NavBtn text="ABOUT" to="about" />
      <NavBtn text="EXPERIENCE" to="experience" />
      <NavBtn text="PROJECTS" to="projects" />
    </nav>
  );
}
