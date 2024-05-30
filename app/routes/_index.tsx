import type { MetaFunction } from "@remix-run/cloudflare";
import Center from "~/sections/Center";

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
    <div className="grid grid-cols-1">
      <Center />
    </div>
  );
}
