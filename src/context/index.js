
import { combineContexts } from "./combineContext";
import { ThemeContextProvider } from "./themeContext/themeContext";
import { TicketContextProvider } from "./ticketContext/ticketContext";

export const AppContextProvider = combineContexts(
  ThemeContextProvider,
  TicketContextProvider
);