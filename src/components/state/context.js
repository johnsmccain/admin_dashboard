import { createContext, useReducer } from "react";
import { TogglerReducer } from "./reducer";
const Initial_State = {
  toggle: false,
};
export const Context = createContext(Initial_State);
export const TogglerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TogglerReducer, Initial_State);

  return (
    <TogglerContextProvider.Provider
      value={{
        toggle: state.user,
      }}
    >
      {children}
    </TogglerContextProvider.Provider>
  );
};
