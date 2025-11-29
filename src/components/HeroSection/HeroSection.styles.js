import styled from 'styled-components';
import HeroBackground from '../../assets/hero-bg.jpeg'; 

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  background-image: url(${HeroBackground});
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); 
    z-index: 1; 
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2; 
  color: ${({ theme }) => theme.colors.white};
  max-width: 700px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 5rem; 
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  
  color: ${({ theme }) => theme.colors.white}; 

  @media (max-width: 992px) {
    font-size: 4rem;
  }
  @media (max-width: 576px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.large};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacings.large};
  
  color: ${({ theme }) => theme.colors.white}; 

  @media (max-width: 576px) {
    font-size: ${({ theme }) => theme.typography.size.medium};
  }
`;