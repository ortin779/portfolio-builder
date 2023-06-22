import { BlogsIntro } from "../components/Intro/BlogsIntro";
import { IntroSection } from "../components/Intro/IntroSection";
import { ProjectsIntro } from "../components/Intro/ProjectsIntro";

export const HomePage = () => {
  return (
    <div className="h-full overflow-visible">
      <IntroSection />
      <ProjectsIntro />
      <BlogsIntro />
    </div>
  );
};
