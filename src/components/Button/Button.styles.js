import styled from 'styled-components';

export const StyledButton = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacings.small} ${({ theme }) => theme.spacings.large};
  margin-top: ${({ theme }) => theme.spacings.medium};
  
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white}; 
  
  font-family: ${({ theme }) => theme.typography.body};
  font-size: ${({ theme }) => theme.typography.size.medium};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary}; 
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;