import { createContext } from "react";
import { toast } from "react-toastify";
import { IAppContext } from "../interfaces/App.interface";

const AppContext = createContext<IAppContext>({} as IAppContext);

export function AppProvider(props: any) {
  
  return (
    <AppContext.Provider
      value={{
        
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
