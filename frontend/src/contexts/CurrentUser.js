import { createContext, useState, useEffect } from "react";

export const CurrentUser = createContext();

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const getLoggedInUser = async () => {
      let response = await fetch(
        "https://wolqsu1hrk.execute-api.us-east-1.amazonaws.com/prod/authentication/profile",
        {
          credentials: "include",
        }
      );
      let user = await response.json();
      setCurrentUser(user);
    };
    getLoggedInUser();
  }, []);

  const logout = async () => {
    try {
      await fetch(
        "https://wolqsu1hrk.execute-api.us-east-1.amazonaws.com/prod/authentication/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <CurrentUser.Provider value={{ currentUser, setCurrentUser, logout }}>
      {children}
    </CurrentUser.Provider>
  );
}

export default CurrentUserProvider;
