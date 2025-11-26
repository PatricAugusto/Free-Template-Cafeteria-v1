import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { NavContainer, Logo, NavList, NavItem, NavLink, HamburgerIcon, CartButton, CartCount } from './Header.styles';

const navItems = [
  { id: 'home', label: 'Início', href: '#home' },
  { id: 'menu', label: 'Cardápio', href: '#menu' },
  { id: 'about', label: 'Nossa História', href: '#about' },
  { id: 'contact', label: 'Contato', href: '#contact' },
];

const Header = ({ toggleCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <NavContainer>
      <Logo>Coffe Blend</Logo>
      
      <HamburgerIcon 
        onClick={() => setIsOpen(!isOpen)} 
        $isOpen={isOpen} 
      >
        <div />
        <div />
        <div />
      </HamburgerIcon>
      
      <nav>
        <NavList $isOpen={isOpen}>
          {navItems.map((item) => (
            <NavItem key={item.id}>
              <NavLink href={item.href} onClick={handleLinkClick}>
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </nav>

      <CartButton onClick={toggleCart}>
        🛒
        {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
      </CartButton>

    </NavContainer>
  );
};

export default Header;