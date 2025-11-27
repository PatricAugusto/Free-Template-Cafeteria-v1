import React from 'react';
import { useCart } from '../../context/CartContext';
import { 
  CardContainer, 
  ItemHeader, 
  ItemName, 
  ItemPrice, 
  ItemDescription, 
  AddButton 
} from './ProductCard.styles';

const ProductCard = ({ item }) => {
  const { addItemToCart } = useCart();
  
  const formattedPrice = item.price.toLocaleString('pt-BR', { 
    style: 'currency', 
    currency: 'BRL' 
  });

  const handleAddToCart = () => {
    addItemToCart(item);
    console.log(`${item.name} adicionado ao carrinho.`);
  };

  return (
    <CardContainer>
      
      <ItemHeader>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{formattedPrice}</ItemPrice>
      </ItemHeader>
      
      <ItemDescription>{item.description}</ItemDescription>
      
      <AddButton onClick={handleAddToCart}>
        Adicionar ao Pedido
      </AddButton>
    </CardContainer>
  );
};

export default ProductCard;