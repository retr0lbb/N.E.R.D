import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext();

export default function ModalProvider({ children }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
  
}

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error('useModal deve ser usado dentro de um ModalProvider');
    }
    return context;
  };
