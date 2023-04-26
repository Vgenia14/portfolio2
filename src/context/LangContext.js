import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageContextProvider({ children }) {
  let [isGer, setIsGer] = useState(true);
  return (
    <LanguageContext.Provider value={{ isGer, setIsGer }}>
      {children}
    </LanguageContext.Provider>
  );
}
