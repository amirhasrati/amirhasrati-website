import type { FC } from "react";
import Tag from "./Tag";

const ExperienceItem: FC<{ date: string; title: string; company: string; description: string; tags: Array<string> }> =
  ({ date, title, company, description, tags }) => {
    return (
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm font-light text-neutral-600">{date}</p>
          <h3 className="font-semibold text-lg">{title}</h3>
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
