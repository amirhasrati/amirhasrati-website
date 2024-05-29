import type { MetaFunction } from "@remix-run/cloudflare";

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
    <div>
      <h1>Amir Hasrati</h1>
    </div>
  );
}
