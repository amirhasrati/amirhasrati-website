import type { FC } from "react";
import Tag from "./Tag";
import { Link } from "@remix-run/react";

const Project: FC<{
  title: string;
  projectUrl: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
  tags: Array<string>;
}> = ({ title, projectUrl, description, imgUrl, imgAlt, tags }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link to={projectUrl} className="font-semibold text-lg text-indigo-700 underline">
          {title}
        </Link>
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
