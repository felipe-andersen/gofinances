import { Children, useContext } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { createContext, ReactNode, useState } from 'react';
import * as AuthSession from 'expo-auth-session';


const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

const AuthContext = createContext({} as IAuthContextData);

interface IAuthContextData {
  user: User;
};

interface AuthorizationResponse {
  params : {
    access_token: string
  };
  type: string
};

interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
};

interface AuthProviderProps {
  children: ReactNode;
};

function AuthProvider( { children }: AuthProviderProps ){
  const [user, setUser] = useState<User>( {} as User ) 
 
  async function handleSignInWidthGoogle() {
    try {
      const CLIENT_ID = "1069361800707-b9jjrqkp195fsc2ftlisdli34kpto10n.apps.googleusercontent.com";
      const REDIRECT_URI = "http://auth.expo.io/@lip/terramade";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI( "profile email" );

      const authUrl = `http://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;

      if ( type === "success" ){
        const response = await fetch( `http://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}` );
        const userInfo = await response.json();
       
        setUser({
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          picture: userInfo.picture,
        })
      }
    } catch( error ) {
      const pt_br = "Não foi possível autenticar";
      throw new Error( pt_br );
      console.log(error)
    }
  };
  /*
  async function handleSignInWidthApple() {
    try {

    } catch () {}
  };
  */
  return (
    <AuthContext.Provider value={{ user }}>
      { children }
    </AuthContext.Provider>
  )
};

function useAuth () {
  const context = useContext( AuthContext );
  return context
};

export { AuthProvider, useAuth }



