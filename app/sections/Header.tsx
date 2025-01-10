import type { FC } from "react";
import Socials from "./Socials";
import Tag from "~/components/Tag";

const Header: FC<{
  title: string;
  subtitle: string;
  showSocials: boolean;
  tags: Array<string>;
}> = ({ title, subtitle, showSocials, tags }) => {
  return (
    <div className="flex flex-col gap-4 text-center items-center">
      <h1 className="font-semibold text-5xl sm:text-6xl text-neutral-900">{title}</h1>
      <p className="sm:text-xl sm:font-normal font-light text-neutral-800">{subtitle}</p>
      {showSocials && <Socials />}
      <div className="flex flex-wrap gap-2">
        {tags?.map((tag, _) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: no need for a key prop here...
          <Tag text={tag} key={_} />
        ))}
      </div>
    </div>
  );
};

export default Header;
