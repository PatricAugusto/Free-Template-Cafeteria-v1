import styled from 'styled-components';
import HeroBackground from '../../assets/hero-bg.jpeg'; 

export const HeroContainer = styled.section`
  background: url(${HeroBackground}) no-repeat center center/cover;
  height: 90vh; 
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); 
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2; 
  text-align: center;
  max-width: 800px;
  padding: ${({ theme }) => theme.spacings.extraLarge};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.size.huge};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.background}; 
  font-size: ${({ theme }) => theme.typography.size.large};
  margin-bottom: ${({ theme }) => theme.spacings.large};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;