import { createContext, useReducer } from "react";
import ticketReducer from "./reducer";
import initialTicketState from "./state";

export const TicketContext = createContext()

export const TicketContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(ticketReducer, initialTicketState);
  console.log(state);
  return (
    <TicketContext.Provider value={{state,dispatch}}>
      {children}
    </TicketContext.Provider>
  )
}