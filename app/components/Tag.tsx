import type { FC } from "react";

const Tag: FC<{ text: string }> = ({ text }) => {
  return <p className="text-sm px-3 py-1 bg-indigo-100 text-indigo-700 font-medium rounded-full">{text}</p>;
};

export default Tag;
