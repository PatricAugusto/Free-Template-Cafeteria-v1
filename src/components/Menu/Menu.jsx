import React from 'react';
import { menuData } from '../../data/menuData'; 
import ProductCard from '../ProductCard/ProductCard';
import { 
  MenuSection, 
  MenuTitle, 
  CategoryTitle, 
  CategoryContainer, 
} from './Menu.styles';

const Menu = () => {
  return (
    <MenuSection id="menu">
      <MenuTitle>Nosso Cardápio</MenuTitle>
      
      {menuData.map((categoryData, index) => (
        <CategoryContainer key={index}>
          <CategoryTitle>{categoryData.category}</CategoryTitle>
          
          {categoryData.items.map((item) => (
            
            <ProductCard key={item.id} item={item} />           
          ))}
        </CategoryContainer>
      ))}

    </MenuSection>
  );
};

export default Menu;