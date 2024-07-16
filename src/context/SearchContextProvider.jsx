"use client";

import { createContext, useContext, useState } from "react";

export const searchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);

  return (
    <searchContext.Provider
      value={{ searchedRestaurants, setSearchedRestaurants }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default SearchContextProvider;


