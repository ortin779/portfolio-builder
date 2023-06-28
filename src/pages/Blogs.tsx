import { Card } from "../components/common/Card";
import { useAppConfig } from "../contexts/AppConfig";

export const Blogs = () => {
  const { blogs } = useAppConfig()!;
  return (
    <div className="p-4">
      <div className="my-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">My Blog Posts</h1>
      </div>
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.map((blog) => {
          return (
            <Card
              key={blog.title}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.image}
              redirectUrl={blog.url}
            />
          );
        })}
      </div>
    </div>
  );
};
