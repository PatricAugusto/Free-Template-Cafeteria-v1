import { createContext, useContext } from 'react';
import { CartContext } from './CartContext'; 

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};