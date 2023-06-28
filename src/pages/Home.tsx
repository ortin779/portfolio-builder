import { BlogsIntro } from "../components/Intro/BlogsIntro";
import { IntroSection } from "../components/Intro/IntroSection";
import { ProjectsIntro } from "../components/Intro/ProjectsIntro";
import { Contact } from "../components/common/Contact";

export const HomePage = () => {
  return (
    <div className="h-full overflow-visible">
      <IntroSection />
      <ProjectsIntro />
      <BlogsIntro />
      <Contact />
    </div>
  );
};
