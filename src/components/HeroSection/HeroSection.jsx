import React from 'react';
import Button from '../Button/Button';
import { HeroContainer, HeroContent, Title, Subtitle } from './HeroSection.styles';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <Title>Seu Momento Perfeito</Title>
        <Subtitle>Descubra a arte do café artesanal em cada xícara. Feito com paixão e os melhores grãos.</Subtitle>
        
        <Button href="#menu">
          Ver Cardápio
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;