import { ReactNode, createContext, useContext } from "react";
import { AppConfigSchema, AppConfig as TAppConfig } from "../schema/schema";
import appConfig from "./../app-config.json";

const AppConfig = createContext<TAppConfig | undefined>(undefined);

export const useAppConfig = () => useContext(AppConfig);

export function AppConfigProvider({ children }: { children: ReactNode }) {
  const appContext = AppConfigSchema.parse(appConfig);

  return <AppConfig.Provider value={appContext}>{children}</AppConfig.Provider>;
}
