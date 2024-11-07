import { createContext, useEffect, useState } from "react";
import { IAppContext, ItemProp } from "../interfaces/App.interface";

const AppContext = createContext<IAppContext>({} as IAppContext);

export function AppProvider(props: any) {
  const [cartItems, setCartItems] = useState<ItemProp[]>([]);

  useEffect(() => {
    const cartItems: ItemProp[] = JSON.parse(
      localStorage.getItem("cartItems") ?? "[]"
    );
    setCartItems(cartItems);
  }, []);
  
  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
