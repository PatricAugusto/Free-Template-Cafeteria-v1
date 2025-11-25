import React from 'react';
import { useCart } from '../../context/CartContext';
import { menuData } from '../../data/menuData';
import { 
  MenuSection, 
  MenuTitle, 
  CategoryTitle, 
  CategoryContainer, 
  MenuItem, 
  ItemHeader, 
  ItemName, 
  ItemPrice, 
  ItemDescription,
  AddButton
} from './Menu.styles';

const Menu = () => {

  const { addItemToCart } = useCart();

  return (
    <MenuSection id="menu">
      <MenuTitle>Nosso Cardápio</MenuTitle>
      
      {menuData.map((categoryData, index) => (
        <CategoryContainer key={index}>
          <CategoryTitle>{categoryData.category}</CategoryTitle>
          
          {categoryData.items.map((item, itemIndex) => (
            <MenuItem key={itemIndex}>
              <ItemHeader>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price}</ItemPrice>
              </ItemHeader>
              <ItemDescription>{item.description}</ItemDescription>

              <AddButton onClick={() => addItemToCart(item)}>
                Adicionar
              </AddButton>

            </MenuItem>
          ))}
        </CategoryContainer>
      ))}

    </MenuSection>
  );
};

export default Menu;