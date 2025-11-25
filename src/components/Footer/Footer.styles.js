import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background}; 
  padding-top: ${({ theme }) => theme.spacings.extraLarge};
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: ${({ theme }) => theme.spacings.large};
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${({ theme }) => theme.spacings.medium}; 
    gap: ${({ theme }) => theme.spacings.extraLarge};
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  flex-basis: 20%; 
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.small};
  
  @media (max-width: 768px) {
    flex-basis: 100%;
    align-items: center;
  }
`;

export const Logo = styled.h4`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: ${({ theme }) => theme.typography.size.large};
  color: ${({ theme }) => theme.colors.accent}; 
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const SectionTitle = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.size.medium};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  padding-bottom: 5px;
  display: inline-block;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.typography.size.small};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CopyRight = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacings.medium} 0;
  background-color: ${({ theme }) => theme.colors.text}; 
  font-size: ${({ theme }) => theme.typography.size.extraSmall};
  color: #CCCCCC;
`;