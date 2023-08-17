import { Skill } from "../../schema/schema";
import { Progressbar } from "./Progressbar";

export type UserSkillsProps = {
  skills: Skill[];
};

export const UserSkills = ({ skills }: UserSkillsProps) => {
  return (
    <div className="flex flex-row flex-wrap gap-8 items-center p-4">
      {skills.map((skill) => {
        return (
          <div className="w-1/4 flex items-center flex-col">
            <h1>{skill.name}</h1>
            <Progressbar progress={skill.level} />
          </div>
        );
      })}
    </div>
  );
};
