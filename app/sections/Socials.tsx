import SocialBtn from "~/components/SocialBtn";
import GithubIcon from "~/icons/GithubIcon";
import LinkedInIcon from "~/icons/LinkedInIcon";
import ResumeIcon from "~/icons/ResumeIcon";

export default function Socials() {
  return (
    <div className="flex items-center justify-center gap-4">
      <SocialBtn icon={<GithubIcon />} href="https://github.com/amirhasrati" />
      <SocialBtn icon={<LinkedInIcon />} href="https://www.linkedin.com/in/amirhasrati/" />
      <SocialBtn icon={<ResumeIcon />} href="/ahasrati_resume_F25.pdf" />
    </div>
  );
}
