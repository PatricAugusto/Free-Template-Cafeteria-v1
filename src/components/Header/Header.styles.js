import styled from 'styled-components';

export const NavContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacings.medium} 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px); 
  -webkit-backdrop-filter: blur(10px); 
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

  color: ${({ theme }) => theme.colors.white}; 
`;

export const Logo = styled.h1`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: ${({ theme }) => theme.typography.size.large};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin: 0; 
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacings.large}; 
  color: ${({ theme }) => theme.colors.white};
  list-style: none;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%; 
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white}; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: ${({ theme }) => theme.spacings.medium} 0;
    
    transform: translateY(${props => (props.$isOpen ? '0' : '-100%')});
    opacity: ${props => (props.$isOpen ? '1' : '0')};
    pointer-events: ${props => (props.$isOpen ? 'auto' : 'none')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  
  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.extraLarge};
    width: 100%;
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none; 
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 1001; 
  
  @media (max-width: 768px) {
    display: flex; 
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transform: ${({ $isOpen }) => ($isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }
    
    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.typography.body};
  font-size: ${({ theme }) => theme.typography.size.medium};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 5px; 

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: ${({ theme }) => theme.colors.secondary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    left: 0;
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  margin-left: ${({ theme }) => theme.spacings.large};
  
  @media (max-width: 768px) {
    order: 3; 
    margin-left: ${({ theme }) => theme.spacings.medium};
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.7rem;
  font-weight: bold;
`;