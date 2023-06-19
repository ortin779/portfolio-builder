import { useAppConfig } from "../contexts/AppConfig";

export const Footer = () => {
  const { footer, header } = useAppConfig()!;
  return (
    <div className="p-4 text-cyan-300 flex flex-col gap-4 justify-around md:flex-row">
      <div>
        <h2 className="text-2xl">{header.title}</h2>
        <h4>Let's Chat</h4>
        <p>{footer.email}</p>
      </div>
      <div>
        <h3>Projects</h3>
        <h3>Blogs</h3>
        <h3>About</h3>
      </div>
      <div>
        <h4>Connect on</h4>
        <h5>Twitter</h5>
        <h5>Github</h5>
        <h5>Instagram</h5>
      </div>
    </div>
  );
};
