import { useState, createContext, useContext } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(true);

  return (
    <DataContext.Provider value={{ isLightboxOpen, setIsLightboxOpen }}>
      {children}
    </DataContext.Provider>
  );
}
