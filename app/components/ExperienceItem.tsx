import type { FC } from "react";
import Tag from "./Tag";
import ArrowUpRightIcon from "~/icons/ArrowUpRightIcon";

const ExperienceItem: FC<{
  date: string;
  title: string;
  company: string;
  description: string;
  tags: Array<string>;
  linkTo?: string;
}> = ({ date, title, company, description, tags, linkTo }) => {
  const Title = (
    <>
      {title}
      {linkTo && <ArrowUpRightIcon />}
    </>
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="font-light text-neutral-600 text-sm">{date}</p>
        {linkTo ? (
          <a href={linkTo} className="flex flex-row items-center gap-2 font-semibold text-lg hover:text-indigo-700">
            {Title}
          </a>
        ) : (
          <h3 className="flex flex-row items-center gap-2 font-semibold text-lg">{Title}</h3>
        )}
        <h4 className="font-light text-neutral-600">{company}</h4>
      </div>
      <p className="text-neutral-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, _) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: no need for a key prop here...
          <Tag text={tag} key={_} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceItem;
