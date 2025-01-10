import type { FC } from "react";
import NavBtn from "./NavBtn";

const Navbar: FC<{
  sections: Array<string>;
}> = ({ sections }) => {
  return (
    <nav className="fixed top-[calc(50vh-4rem)] flex flex-col items-start gap-6">
      {sections.map((section, i) => {
        return <NavBtn text={section.toUpperCase()} to={section} key={i} />;
      })}
    </nav>
  );
};

export default Navbar;
