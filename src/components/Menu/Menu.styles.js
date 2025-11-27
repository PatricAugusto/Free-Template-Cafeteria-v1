import styled from 'styled-components';

export const MenuSection = styled.section`
  padding: ${({ theme }) => theme.spacings.extraLarge} 10%;
  background-color: ${({ theme }) => theme.colors.background};
  text-align: center;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacings.large} 5%; 
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacings.large} 3%;
  }
`;

export const MenuTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.huge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.extraLarge};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  display: inline-block;
  padding-bottom: ${({ theme }) => theme.spacings.small};
`;

export const CategoryContainer = styled.div`
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacings.extraLarge};
`;

export const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.large};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  text-transform: uppercase;
  letter-spacing: 2px;
`;