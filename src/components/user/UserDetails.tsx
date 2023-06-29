import { useAppConfig } from "../../contexts/AppConfig";

export const UserDetails = () => {
  const { about, intro } = useAppConfig()!;
  const fullName = about.firstName + " " + about.lastName;
  return (
    <div className="flex flex-col items-center m-y-10 mx-auto bg-indigo-200 rounded-3xl w-2/3 p-4 md:w-1/3">
      <img
        src={intro.imageUrl}
        className="h-40 w-40 rounded-full bg-indigo-100"
      />
      <div className="flex flex-col self-center">
        <h3 className="text-2xl font-semibold text-center font-nunito">
          {fullName}
        </h3>
        <h3 className="text-sm font-thin text-center">{about.designation}</h3>
        <p className="text-base font-light font-nunito">{about.description}</p>
      </div>
      <div className="my-4 self-start">
        <h1 className="text-xl capitalize font-nunito font-bold">
          Technologies
        </h1>
        <ul className="px-4 list-disc">
          {about.skills.map((skill) => {
            return (
              <li
                key={skill}
                className="text-sm capitalize font-nunito font-semibold"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
