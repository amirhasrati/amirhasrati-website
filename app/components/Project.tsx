import type { FC } from "react";
import Tag from "./Tag";

const Project: FC<{ title: string; description: string; imgUrl: string; imgAlt: string; tags: Array<string> }> = ({
  title,
  description,
  imgUrl,
  imgAlt,
  tags,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
      <img className="rounded-md" src={imgUrl} alt={imgAlt} />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, _) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: no need for a key prop here...
          <Tag text={tag} key={_} />
        ))}
      </div>
    </div>
  );
};

export default Project;
