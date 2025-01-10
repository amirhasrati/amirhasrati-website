import type { FC } from "react";
import Navbar from "~/components/navbar/Navbar";

const Left: FC<{
  sections: Array<string>;
}> = ({ sections }) => {
  return (
    <div className="flex justify-center grow border-r border-neutral-300">
      <Navbar sections={sections} />
    </div>
  );
};

export default Left;
