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

export const MenuItem = styled.div`
  text-align: left;
  padding: ${({ theme }) => theme.spacings.medium} 0;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.secondary}40; 
  overflow: hidden;
  
  &:last-child {
    border-bottom: none; 
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

export const ItemName = styled.span`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: ${({ theme }) => theme.typography.size.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const ItemPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.body};
  font-size: ${({ theme }) => theme.typography.size.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const ItemDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.size.small};
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacings.small};
  font-style: italic;
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent}; 
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 5px 15px;
  font-size: ${({ theme }) => theme.typography.size.small};
  cursor: pointer;
  margin-top: ${({ theme }) => theme.spacings.small};
  float: right; 
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f7b300; 
  }

  @media (max-width: 480px) {
    float: none;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacings.medium};
  }
`;