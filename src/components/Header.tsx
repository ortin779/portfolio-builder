import { useState } from "react";
import { useAppConfig } from "../contexts/AppConfig";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { header } = useAppConfig()!;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full py-4 shadow-md">
      <div className="container flex px-4 sm:mx-auto flex-row gap-3 items-center justify-between">
        <div className="flex flex-row gap-4 items-center cursor-pointer flex-shrink-0">
          <img
            src={header.logoUrl}
            alt={header.title}
            className="rounded-full h-8 w-8"
          />
          <h1 className="text-2xl text-indigo-900 font-nunito font-bold">
            {header.title}
          </h1>
        </div>
        <ul className="hidden md:flex space-x-10 text-sm font-bold uppercase text-gray-600">
          <li
            className={`hover:text-gray-500 hover:cursor-pointer ${
              pathname == "/" ? "text-indigo-500 hover:text-indigo-400" : ""
            }`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`hover:text-gray-500 hover:cursor-pointer ${
              pathname == "/projects"
                ? "text-indigo-500 hover:text-indigo-400"
                : ""
            }`}
          >
            <a href="/projects">Projects</a>
          </li>
          <li
            className={`hover:text-gray-500 hover:cursor-pointer ${
              pathname == "/blogs"
                ? "text-indigo-500 hover:text-indigo-400"
                : ""
            }`}
          >
            <a href="/blogs">Blogs</a>
          </li>
          <li
            className={`hover:text-gray-500 hover:cursor-pointer ${
              pathname == "/about"
                ? "text-indigo-500 hover:text-indigo-400"
                : ""
            }`}
          >
            <a href="/about">About</a>
          </li>
        </ul>
        <div
          className={`space-y-1 md:hidden ${
            isMenuOpen && "hidden"
          } cursor-pointer`}
          onClick={handleMenuClick}
        >
          <div className="bg-black h-0.5 w-6" />
          <div className="bg-black h-0.5 w-6" />
          <div className="bg-black h-0.5 w-6" />
        </div>
        <ul
          className={`${
            isMenuOpen ? "" : "hidden"
          } z-40 bg-indigo-900 absolute top-0 left-0 w-full p-4 space-y-10 text-center text-gray-300 rounded-b-2xl`}
        >
          <li
            className={`z-40 space-y-2 absolute right-4 cursor-pointer`}
            onClick={handleMenuClick}
          >
            <strong className="text-white text-3xl">&times;</strong>
          </li>
          <li
            className={`hover:text-gray-500 hover:cursor-pointer ${
              pathname == "/" ? "text-indigo-500 hover:text-indigo-400" : ""
            }`}
          >
            <a href="/">Home</a>
          </li>
          <li
            className={`hover:text-gray-500 hover:cursor-pointer ${
              pathname == "/projects"
                ? "text-indigo-500 hover:text-indigo-400"
                : ""
            }`}
          >
            <a href="/projects">Projects</a>
          </li>
          <li
            className={`hover:text-gray-500 hover:cursor-pointer ${
              pathname == "/blogs"
                ? "text-indigo-500 hover:text-indigo-400"
                : ""
            }`}
          >
            <a href="/blogs">Blogs</a>
          </li>
          <li
            className={`hover:text-gray-500 hover:cursor-pointer ${
              pathname == "/about"
                ? "text-indigo-500 hover:text-indigo-400"
                : ""
            }`}
          >
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
