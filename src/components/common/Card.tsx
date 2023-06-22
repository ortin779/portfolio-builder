export type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  redirectUrl?: string;
};

export const Card = ({
  title,
  imageUrl,
  description,
  redirectUrl,
}: CardProps) => {
  return (
    <div className="bg-gray-600 rounded-lg shadow">
      <img
        className="rounded-t-lg h-48 w-full object-cover"
        src={imageUrl}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={redirectUrl}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
