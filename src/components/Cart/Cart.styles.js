import styled from 'styled-components';
import Button from '../Button/Button'; 

export const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001; /* Acima de tudo, mas abaixo do Sidebar */
  opacity: ${props => (props.$isOpen ? '1' : '0')};
  visibility: ${props => (props.$isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease;
`;

export const CartSidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  max-width: 90%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1002;
  padding: ${({ theme }) => theme.spacings.large};
  display: flex;
  flex-direction: column;

  transform: translateX(${props => (props.$isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;

  background-color: rgba(255, 255, 255, 0.15); 
  backdrop-filter: blur(15px); 
  -webkit-backdrop-filter: blur(15px); 
  border-left: 1px solid rgba(255, 255, 255, 0.4); 
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2); 

  transform: translateX(${props => (props.$isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background};
  padding-bottom: ${({ theme }) => theme.spacings.medium};
  margin-bottom: ${({ theme }) => theme.spacings.medium};

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.size.large};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;
`;

export const CartItemContainer = styled.div`
  flex-grow: 1; 
  overflow-y: auto; 
  padding-right: ${({ theme }) => theme.spacings.small}; 
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.small} 0;
  border-bottom: 1px dashed #E0E0E0;
`;

export const ItemDetails = styled.div`
  text-align: left;
`;

export const ItemName = styled.p`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 4px 0;
`;

export const ItemPrice = styled.p`
  font-size: ${({ theme }) => theme.typography.size.small};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  
  span {
    padding: 0 10px;
    font-weight: bold;
  }
  
  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    width: 25px;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    line-height: 1;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.size.large};
  font-weight: 700;
  margin-top: ${({ theme }) => theme.spacings.medium};
  padding-top: ${({ theme }) => theme.spacings.medium};
  border-top: 2px solid ${({ theme }) => theme.colors.accent};
`;

export const CheckoutButton = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.medium};
`;