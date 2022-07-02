import { useState, createContext, useContext } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [productImgNum, setProductImgNum] = useState(1);

  return (
    <DataContext.Provider
      value={{
        isLightboxOpen,
        setIsLightboxOpen,
        productImgNum,
        setProductImgNum,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
