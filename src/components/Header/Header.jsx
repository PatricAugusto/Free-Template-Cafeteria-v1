import React from 'react';
import { NavContainer, Logo, NavList, NavItem, NavLink } from './Header.styles';

const navItems = [
  { id: 'home', label: 'Início', href: '#home' },
  { id: 'menu', label: 'Cardápio', href: '#menu' },
  { id: 'about', label: 'Nossa História', href: '#about' },
  { id: 'contact', label: 'Contato', href: '#contact' },
];

const Header = () => {
  return (
    <NavContainer>
      <Logo>Coffe Blend</Logo>
      
      <nav>
        <NavList>
          {navItems.map((item) => (
            <NavItem key={item.id}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </NavItem>
          ))}
        </NavList>
      </nav>
    </NavContainer>
  );
};

export default Header;