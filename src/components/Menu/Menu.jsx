import React from 'react';
import { 
  MenuSection, 
  MenuTitle, 
  CategoryTitle, 
  CategoryContainer, 
  MenuItem, 
  ItemHeader, 
  ItemName, 
  ItemPrice, 
  ItemDescription 
} from './Menu.styles';

const menuData = [
  {
    category: 'Cafés Especiais',
    items: [
      { name: 'Expresso Duplo', description: 'Intenso e aromático, o verdadeiro sabor do café.', price: 'R$ 8,00' },
      { name: 'Latte Caramelo', description: 'Leite vaporizado, espresso e xarope de caramelo.', price: 'R$ 14,00' },
      { name: 'Cappuccino Clássico', description: 'Partes iguais de espresso, leite e espuma.', price: 'R$ 12,00' },
      { name: 'Mocha da Casa', description: 'Chocolate amargo, espresso e leite vaporizado.', price: 'R$ 16,00' },
    ],
  },
  {
    category: 'Chás e Infusões',
    items: [
      { name: 'Chá Earl Grey', description: 'Aroma cítrico de bergamota, servido quente.', price: 'R$ 9,00' },
      { name: 'Infusão de Frutas Vermelhas', description: 'Naturalmente doce, servido gelado.', price: 'R$ 10,00' },
    ],
  },
  {
    category: 'Doces e Salgados',
    items: [
      { name: 'Croissant Francês', description: 'Folhado e amanteigado, perfeito para o café.', price: 'R$ 11,00' },
      { name: 'Bolo Red Velvet', description: 'Fatia de bolo aveludado com cobertura de cream cheese.', price: 'R$ 18,00' },
      { name: 'Pão de Queijo Gourmet', description: 'Receita da fazenda, crocante por fora e macio por dentro.', price: 'R$ 7,00' },
    ],
  },
];

const Menu = () => {
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
            </MenuItem>
          ))}
        </CategoryContainer>
      ))}

    </MenuSection>
  );
};

export default Menu;