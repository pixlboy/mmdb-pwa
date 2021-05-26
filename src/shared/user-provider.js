import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase/auth";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email } = user;
        setUser({
          displayName,
          email,
        });
      } else {
        setUser({
          displayName: null,
          email: null,
        });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
