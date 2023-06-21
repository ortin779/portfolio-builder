import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AppRouter } from "../routes/AppRouter";

export const Shell = () => {
  return (
    <div className="flex flex-col font-poppins h-screen w-screen overflow-hidden bg-gradient-to-t from-indigo-300">
      <Header />
      <div className="h-[calc(100%-4rem)] overflow-scroll">
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
};
