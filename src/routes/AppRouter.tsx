import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Blogs } from "../pages/Blogs";
import { About } from "../pages/About";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
