import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registerUser, setRegisterUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')) || null);

  console.log("User Registerd :- ", registerUser);
  console.log("User Login :- ", loggedInUser);

  return (
    <Auth.Provider
      value={{ registerUser, setRegisterUser, loggedInUser, setLoggedInUser }}
    >
      {children}
    </Auth.Provider>
  );
};
