import { useState } from "react";
import { useAppConfig } from "../contexts/AppConfig";

export const Header = () => {
  const { header } = useAppConfig()!;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="w-full py-4">
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
          <li className="hover:text-gray-500 hover:cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-gray-500 hover:cursor-pointer">
            <a href="/projects">Projects</a>
          </li>
          <li className="hover:text-gray-500 hover:cursor-pointer">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="hover:text-gray-500 hover:cursor-pointer">
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
          <li>
            <a href="/" className="hover:text-gray-500 hover:cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-gray-500 hover:cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/blogs"
              className="hover:text-gray-500 hover:cursor-pointer"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-gray-500 hover:cursor-pointer"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
