import { api } from "api/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

const UserContext = createContext<any>({} as any);

export function UserProvider(props: any) {
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [orders, setOrders] = useState();

  const getUserData = async (token:any) =>{
    try{
        const response = await api.get(`/users/${token}`);
        setUser(response.data);
        setIsLogged(true);
    } catch (error : any){
        toast.error(error.response.data.message);
        setIsLogged(false);
        console.log(error);
    }
  }

  const getOrderData = async (token: any) => {
    try {
      const response = await api.get(`/orders/${token}`);
      setOrders(response.data);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getUserData,
        isLogged,
        orders,
        setOrders,
        getOrderData
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
