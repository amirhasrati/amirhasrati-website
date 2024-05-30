import Socials from "./Socials";

export default function Header() {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="font-semibold text-5xl text-neutral-900">Amir Hasrati</h1>
      <p className="font-light text-neutral-800">CS @ University of Guelph</p>
      <Socials />
    </div>
  );
}
