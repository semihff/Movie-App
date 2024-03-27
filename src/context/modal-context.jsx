import { createContext, useContext, useState, useReducer } from "react";

const ModalProvider = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ModalProvider.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalProvider.Provider>
  );
};
export const useModalProvider = () => {
  const context = useContext(ModalProvider);
  return context;
};
