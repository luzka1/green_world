import { api } from "api/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

const UserContext = createContext<any>({} as any);

export function UserProvider(props: any) {
  const [user, setUser] = useState();

  const getUserData = async (token:any) =>{
    try{
        const response = await api.get(`/users/${token}`);
        setUser(response.data);
    } catch (error : any){
        toast.error(error.response.data.message);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        getUserData
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContext;
