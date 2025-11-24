import styled from 'styled-components';

export const NavContainer = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.medium} ${({ theme }) => theme.spacings.extraLarge};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between; 
  align-items: center;
  position: sticky; 
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacings.medium};
  }
`;

export const Logo = styled.h1`
  /* Estilos para o logo */
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: ${({ theme }) => theme.typography.size.large};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0; 
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacings.large}; 
`;

export const NavItem = styled.li`
  display: inline-block;
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