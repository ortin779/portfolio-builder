import { useAppConfig } from "../../contexts/AppConfig";
import { UserSkills } from "../common/Skills";

export const UserDetails = () => {
  const { about, intro } = useAppConfig()!;
  const fullName = about.firstName + " " + about.lastName;
  return (
    <div className="flex flex-col">
      <section className="flex flex-col items-center">
        <img src={intro.imageUrl} className="w-52 h-52" />
        <h2 className="text-2xl">{fullName}</h2>
        <h2 className="text-xl font-normal">{about.designation}</h2>
      </section>
      <section className="flex-1 p-2">
        <h2 className="text-xl font-light">{about.description}</h2>
      </section>
      <section className="flex-1">
        <UserSkills skills={about.skills} />
      </section>
    </div>
  );
};
