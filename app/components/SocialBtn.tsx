import type { FC, ReactNode } from "react";

const SocialBtn: FC<{ icon: ReactNode; href: string }> = ({ icon, href }) => {
  return (
    <a
      className="p-2 border rounded-full hover:border-indigo-500 hover:shadow-md transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
    </a>
  );
};
export default SocialBtn;
