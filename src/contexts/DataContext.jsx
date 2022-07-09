import { useState, createContext, useContext } from "react";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState(() => {
    const localItem = localStorage.getItem(
      "ECOMMERCE_PRODUCT_PAGE_FRONTENDMENTOR"
    );
    if (localItem) {
      const parsedItem = JSON.parse(localItem);
      return [parsedItem];
    }
    console.log(localItem);
    return [];
  });

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const [productImgNum, setProductImgNum] = useState(1);

  return (
    <DataContext.Provider
      value={{
        isLightboxOpen,
        setIsLightboxOpen,
        isOffcanvasOpen,
        setIsOffcanvasOpen,
        productImgNum,
        setProductImgNum,
        quantity,
        setQuantity,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
