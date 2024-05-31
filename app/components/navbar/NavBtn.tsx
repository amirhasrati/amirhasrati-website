import type { FC } from "react";

const NavBtn: FC<{ text: string; to: string }> = ({ text, to }) => {
  return (
    <button
      className="font-medium text-neutral-400 hover:text-indigo-700 transition"
      type="button"
      onClick={() => {
        const dest = document.getElementById(to);
        if (dest) {
          window.scrollTo({
            top: dest.offsetTop - 64,
            behavior: "smooth",
          });
        }
      }}
    >
      {text}
    </button>
  );
};

export default NavBtn;
