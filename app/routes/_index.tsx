import type { MetaFunction } from "@remix-run/cloudflare";
import Center from "~/sections/Center";
import Left from "~/sections/Left";
import Right from "~/sections/Right";

export const meta: MetaFunction = () => {
  return [
    { title: "Amir Hasrati" },
    {
      name: "My personal website",
      content: "Welcome to my website!",
    },
  ];
};

const sections = ["about", "experience", "projects"];

export default function Index() {
  return (
    <div className="flex w-screen">
      <div className="hidden w-1/6 sm:flex">
        <Left sections={sections} />
      </div>
      <div className="flex justify-center sm:w-2/3">
        <Center />
      </div>
      <div className="hidden w-1/6 sm:flex">
        <Right />
      </div>
    </div>
  );
}
