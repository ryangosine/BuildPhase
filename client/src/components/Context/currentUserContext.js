import React, { createContext } from "react";
import { useEffect, useState } from "react";

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log("LoggedInUser", loggedInUser);
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
      setLoggedIn(true);
    } else {
      setCurrentUser({});
      setLoggedOut(true);
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
        loggedOut,
        setLoggedOut,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
