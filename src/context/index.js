
import { combineContexts } from "./combineContext";
import { ThemeContextProvider } from "./themeContext/themeContext";

export const AppContextProvider = combineContexts(
  ThemeContextProvider,
);