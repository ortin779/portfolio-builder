import { useAppConfig } from "../contexts/AppConfig";

export function Header() {
  const { header } = useAppConfig()!;
  return <div>{header.title}</div>;
}
