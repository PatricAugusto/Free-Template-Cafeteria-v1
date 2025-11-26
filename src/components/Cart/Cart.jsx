import React from 'react';
import { useCart } from '../../context/CartContext';
import { 
  CartOverlay, 
  CartSidebar, 
  CartHeader, 
  CloseButton, 
  CartItemContainer, 
  CartItem, 
  ItemDetails, 
  ItemName, 
  ItemPrice, 
  QuantityControl, 
  TotalContainer, 
  CheckoutButton 
} from './Cart.styles';

const CartItemDisplay = ({ item }) => {
  const { addItemToCart, removeItemFromCart } = useCart();
  
  return (
    <CartItem>
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.price}</ItemPrice>
      </ItemDetails>
      
      <QuantityControl>
        <button onClick={() => removeItemFromCart(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addItemToCart(item)}>+</button>
      </QuantityControl>
    </CartItem>
  );
};

const Cart = ({ isOpen, toggleCart }) => {
  const { cartItems, cartTotal } = useCart();
  
  const formatTotal = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  
  return (
    <>
      <CartOverlay $isOpen={isOpen} onClick={toggleCart} />
      
      <CartSidebar $isOpen={isOpen}>
        <CartHeader>
          <h3>Seu Pedido</h3>
          <CloseButton onClick={toggleCart}>&times;</CloseButton>
        </CartHeader>

        <CartItemContainer>
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio. Adicione um café!</p>
          ) : (
            cartItems.map((item) => (
              <CartItemDisplay key={item.id} item={item} />
            ))
          )}
        </CartItemContainer>
        
        {cartItems.length > 0 && (
          <>
            <TotalContainer>
              <span>Total:</span>
              <span>{formatTotal(cartTotal)}</span>
            </TotalContainer>
            <CheckoutButton onClick={() => alert('Pronto para o Checkout!')}>
              Finalizar Pedido
            </CheckoutButton>
          </>
        )}
      </CartSidebar>
    </>
  );
};

export default Cart;