import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userRecipes, setUserRecipes] = useState({});
  const [userFridge, setUserFridge] = useState([]);

  return (
    <UserContext.Provider
      value={{
        recipes: [userRecipes, setUserRecipes],
        fridge: [userFridge, setUserFridge],
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
