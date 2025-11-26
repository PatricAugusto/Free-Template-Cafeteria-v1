// src/context/CartHooks.jsx (NOVO ARQUIVO)
import { createContext, useContext } from 'react';
import { CartContext } from './CartContext'; // Será o nome do arquivo que contém o provedor

// Criação do Contexto (precisa ser exportado para o Provedor usar)
export const CartContext = createContext();

// Hook customizado para fácil uso
export const useCart = () => {
  return useContext(CartContext);
};