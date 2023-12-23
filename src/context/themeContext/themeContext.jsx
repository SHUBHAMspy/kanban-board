import { createContext, useReducer } from "react";
import initialThemeState from "./state";
import themeReducer from "./reducer";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);
  console.log(state);
  return (
    <ThemeContext.Provider value={{state,dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}