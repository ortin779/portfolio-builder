import { useAppConfig } from "../../contexts/AppConfig";
import { Card } from "../common/Card";

export const ProjectsIntro = () => {
  const { projects } = useAppConfig()!;

  if (!projects) {
    return <div>No Projects</div>;
  }

  const top3Projects = projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <div className="px-4">
      <div className="mx-auto mb-[40px]">
        <h3 className="text-indigo-500 font-nunito mb-4 text-xl font-bold  md:text-3xl">
          My Recent Projects
        </h3>
        <p className="text-body-color text-base">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {top3Projects.map((project, index) => {
          return (
            <Card
              key={`${project.title}_${index}`}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              redirectUrl={project.url}
            />
          );
        })}
      </div>
      {hasMoreProjects && (
        <a
          href="/projects"
          className="block p-2 mx-auto w-44 text-center rounded-full hover:cursor-pointer hover:scale-90 my-4 shadow-lg text-xl text-gray-900 font-nunito font-extrabold"
        >
          View All
        </a>
      )}
    </div>
  );
};
