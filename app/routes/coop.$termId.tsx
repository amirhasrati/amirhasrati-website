import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import Left from "~/sections/Left";
import Right from "~/sections/Right";
import WorkTerm1 from "~/components/work-terms/work-term-1/WorkTerm1";

const sections = ["introduction", "employer", "goals", "job description", "conclusion", "acknowledgments"];

const renderWorkTerm = (workTermNumber: number) => {
  switch (workTermNumber) {
    case 1:
      return <WorkTerm1 />;
    default:
      return <div>Invalid work term number</div>;
  }
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { termId } = params;

  if (!termId) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ termId });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Not Found" }, { name: "Not Found", content: "Page not found" }];
  }

  const lastIndex = data.termId.length - 1;

  return [
    { title: `Amir Hasrati | Work Term ${data.termId[lastIndex]}` },
    {
      name: `Work Term ${data.termId[lastIndex]}`,
      content: "My first work term as a co-op student.",
    },
  ];
};

export default function WorkTerm() {
  const { termId } = useLoaderData<typeof loader>();
  const lastIndex = termId.length - 1;
  const termNumber = Number(termId[lastIndex]);

  return (
    <div className="flex w-screen">
      <div className="hidden w-1/6 sm:flex">
        <Left sections={sections} />
      </div>
      <div className="flex justify-center sm:w-2/3">{renderWorkTerm(termNumber)}</div>
      <div className="hidden w-1/6 sm:flex">
        <Right />
      </div>
    </div>
  );
}
