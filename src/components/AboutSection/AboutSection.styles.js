import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { motion } from 'framer-motion';

export const AboutContainer = styled.section`
  padding: ${theme.spacings.extraLarge} 10%;
  background-color: ${theme.colors.white}; 
  text-align: center;
`;

export const AboutTitle = styled.h2`
  font-size: ${theme.typography.size.huge};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacings.large};
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2rem; 
    text-align: center; 
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacings.extraLarge};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: ${theme.spacings.large};
  }
`;

export const TextContent = styled.div`
  flex: 1;
  text-align: left;
  
  @media (max-width: 992px) {
    text-align: center;
    ${AboutTitle} {
      text-align: center;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: ${theme.typography.size.medium};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacings.medium};
  line-height: 1.8;
  
  strong {
    color: ${theme.colors.secondary};
    font-weight: 700;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1; 
  max-width: 500px;
  height: 500px;
  overflow: hidden;
  border-radius: 8px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); 
  display: flex;
  
 & img, 
  & .about-image { 
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: 992px) {
    max-width: 100%; 
    height: 350px;
  }
`;