import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AppRouter } from "../routes/AppRouter";

export const Shell = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="h-16">
        <Header />
      </div>
      <div className="h-[calc(100%-4rem)] overflow-scroll">
        <div className="min-h-full">
          <AppRouter />
        </div>
        <div className="h-32 bg-slate-500">
          <Footer />
        </div>
      </div>
    </div>
  );
};
