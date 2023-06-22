import { useAppConfig } from "../../contexts/AppConfig";
import { Card } from "../common/Card";

export const BlogsIntro = () => {
  const { blogs } = useAppConfig()!;

  if (!blogs) {
    return <div>No Blogs</div>;
  }

  const top3Blogs = blogs.slice(0, 3);
  const hasMoreBlogs = blogs.length > 3;

  return (
    <div>
      <div className="px-4">
        <div className="mx-auto mb-[40px]">
          <h3 className="text-indigo-500 font-nunito mb-4 text-xl font-bold  md:text-3xl">
            My Recent Blogs
          </h3>
          <p className="text-body-color text-base">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {top3Blogs.map((blog, index) => {
            return (
              <Card
                key={`${blog.title}_${index}`}
                title={blog.title}
                description={blog.description}
                imageUrl={blog.image}
                redirectUrl={blog.url}
              />
            );
          })}
        </div>
        {hasMoreBlogs && (
          <a
            href="/blogs"
            className="block p-2 mx-auto w-44 text-center rounded-full hover:cursor-pointer hover:scale-90 my-4 shadow-lg text-xl text-gray-900 font-nunito font-extrabold"
          >
            View All
          </a>
        )}
      </div>
    </div>
  );
};
