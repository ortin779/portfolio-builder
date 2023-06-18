import { useState } from "react";
import { useAppConfig } from "../contexts/AppConfig";

export const Header = () => {
  const { header } = useAppConfig()!;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-cyan-100 p-4 flex flex-row gap-3 items-center justify-between align-middle">
      <div className="flex flex-row  gap-4 items-center cursor-pointer flex-shrink-0">
        <img
          src={header.logoUrl}
          alt={header.title}
          className="rounded-full h-8 w-8"
        />
        <h1 className="text-xl text-blue-400">{header.title}</h1>
      </div>
      <div className="flex gap-5 items-center align-middle">
        <div className="hidden flex-row gap-5 pr-20 self-end md:flex">
          <a
            href={"projects"}
            className="block text-lg scale-100 hover:scale-110"
          >
            Projects
          </a>
          <a href={"blogs"} className="block text-lg scale-100 hover:scale-110">
            Blogs
          </a>
          <a
            href={"about"}
            className="block text-lg scale-100  hover:scale-110"
          >
            About
          </a>
        </div>
        <div className="w-8 h-8 rounded-2xl flex-shrink-0">
          <img src={header.profilePhotoUrl} alt="Profile" />
        </div>
        <button
          className="flex flex-col gap-1 group md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="h-1 w-6 bg-black group-hove:ease-in duration-75" />
          <div className="h-1 w-6 bg-black group-hover:ease-in duration-75" />
          <div className="h-1 w-6 bg-black group-hover:ease-in duration-75" />
        </button>
        <div
          className={`w-full absolute h-full z-20 right-0 top-0 bg-cyan-100 flex flex-col items-center justify-evenly ${
            !isMenuOpen && "hidden"
          }`}
        >
          <button
            className="text-3xl top-0 absolute right-4 p-2.5"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </button>
          <a
            href={"projects"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg scale-100 hover:scale-110"
          >
            Projects
          </a>
          <a
            href={"Blogs"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg scale-100 hover:scale-110"
          >
            Blogs
          </a>
          <a
            href={"About"}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg scale-100 hover:scale-110"
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
};
