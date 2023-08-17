import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import { useAppConfig } from "../../contexts/AppConfig";

export const IntroSection = () => {
  const {
    intro,
    contact,
    about: { firstName, lastName, description, designation },
  } = useAppConfig()!;

  return (
    <section className="flex flex-col min-h-full text-center md:flex md:flex-row md:items-center">
      <section className="flex justify-center flex-1">
        <img
          src={intro.imageUrl}
          className="w-80 h-80 rounded-ful md:w-96 md:h-96"
        />
      </section>
      <section className="flex-1">
        <h3 className="pt-4 text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
          {firstName + " " + lastName}
        </h3>
        <h3 className="py-2 text-2xl bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent font-extrabold md:text-3xl lg:text-4xl">
          {designation}
        </h3>
        <p className="text-xl text-center leading-8 font-extrabold md:text-2xl">
          {description}
        </p>
        <div className="text-2xl gap-6 py-4 justify-center flex md:text-4xl md:gap-8">
          <a href={contact.email} target="_blank">
            <SiGmail />
          </a>
          <a href={contact.github} target="_blank">
            <SiGithub />
          </a>
          <a href={contact.linkedIn} target="_blank">
            <SiLinkedin />
          </a>
          <a href="" target="_blank">
            <SiTwitter />
          </a>
          <a href="" target="_blank">
            <SiInstagram />
          </a>
        </div>
      </section>
    </section>
  );
};
