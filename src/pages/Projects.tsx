import { Card } from "../components/common/Card";
import { useAppConfig } from "../contexts/AppConfig";

export const Projects = () => {
  const { projects } = useAppConfig()!;
  return (
    <div className="p-4">
      <div className="my-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">My projects</h1>
      </div>
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects?.map((project) => {
          return (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              redirectUrl={project.url}
            />
          );
        })}
      </div>
    </div>
  );
};
