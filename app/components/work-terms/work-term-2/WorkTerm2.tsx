import Intro from "./Intro";
import Employer from "./Employer";
import Goals from "./Goals";
import Header from "~/sections/Header";
import JobDescription from "./JobDescription";
import Conclusion from "./Conclusion";
import Acknowledgments from "./Acknowledgments";

export default function WorkTerm2() {
  return (
    <div className="flex max-w-2xl flex-col gap-32 px-8 py-16">
      <Header
        title="Work Term 2"
        subtitle="Descartes Systems Group - Research and Development"
        showSocials={false}
        tags={[".NET 9", "Azure", "JavaScript", "SQL"]}
      />
      <Intro />
      <Employer />
      <Goals />
      <JobDescription />
      <Conclusion />
      <Acknowledgments />
    </div>
  );
}
