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

export default function Index() {
  return (
    <div className="w-screen flex">
      <div className="flex w-1/6">
        <Left />
      </div>
      <div className="w-2/3 flex justify-center">
        <Center />
      </div>
      <div className="flex w-1/6">
        <Right />
      </div>
    </div>
  );
}
