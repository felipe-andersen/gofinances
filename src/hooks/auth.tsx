import { Children, useContext } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { createContext, ReactNode } from 'react';



const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

const AuthContext = createContext({} as IAuthContextData);

interface IAuthContextData {
  user: User;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
};

interface AuthProviderProps {
  children: ReactNode;

};





function AuthProvider({children}: AuthProviderProps){
  const user = {
    id: "126656",
    name: "Felipe",
    email: "felipe.coutinho.psl@gmail.com"
  };

  async function handleSignInWidthGoogle() {
    try () {

    }catch {};
  };

  async function handleSignInWidthApple() {
    try () {

    }catch {};
  };


  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  );
};


function useAuth (){
  const context = useContext(AuthContext);
  return context;
};

export {AuthProvider, useAuth};



