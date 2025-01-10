import Intro from "./Intro";
import Employer from "./Employer";
import Goals from "./Goals";
import Header from "~/sections/Header";
import JobDescription from "./JobDescription";
import Conclusion from "./Conclusion";
import Acknowledgments from "./Acknowledgments";

export default function WorkTerm1() {
  return (
    <div className="flex max-w-2xl flex-col gap-32 px-8 py-16">
      <Header
        title="Work Term 1"
        subtitle="Descartes Systems Group - Research and Development"
        showSocials={false}
        tags={[".NET 8", "React", "Azure", "JavaScript", "SQL"]}
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
