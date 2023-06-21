import { useAppConfig } from "../../contexts/AppConfig";

export const IntroSection = () => {
  const {
    intro,
    about: { firstName, lastName, description },
  } = useAppConfig()!;
  return (
    <div className="h-1/2 sm:h-full  relative">
      <img
        src={intro.imageUrl}
        className="absolute object-cover h-60 sm:h-96 right-0 md:h-5/6 md:left-0 md:mx-auto"
      />
      <div className="absolute top-10 left-10 sm:top-28 sm:left-15 sm:text-2xl lg:top-24 lg:text-5xl lg:left-28 md:left-32 md:top-32 md:text-3xl xl:left-1/4">
        <p className="font-nunito font-bold text-indigo-500">Fullstack</p>
        <p className="font-nunito font-bold text-red-400">Developer</p>
      </div>
      <div />
      <div className="hidden absolute bg-white p-4 space-y-3 right-10 top-56 w-1/3 rounded-md shadow-md shadow-gray-500 lg:block xl:top-1/3 xl:right-24">
        <h3 className="text-xl font-semibold">{`Hello 👋🏼, I'm ${
          firstName + " " + lastName
        }`}</h3>
        <p className="text-lg">{description}</p>
        <button className="font-nunito font-bold text-xl p-2 bg-indigo-100 text-gray-600 rounded-lg">{`About >`}</button>
      </div>
    </div>
  );
};
