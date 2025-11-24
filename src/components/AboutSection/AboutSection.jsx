import React from 'react';
import Button from '../Button/Button';
import { 
  AboutContainer, 
  ContentWrapper, 
  TextContent, 
  ImageWrapper, 
  AboutTitle, 
  Paragraph 
} from './AboutSection.styles';

import AboutImage from '../../assets/about-image.jpeg'; 

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <TextContent>
          <AboutTitle>Nossa História e Paixão pelo Grão</AboutTitle>
          
          <Paragraph>
            Desde 2018, a Coffee Blend tem sido um refúgio para amantes de café. Nossa jornada começou com uma simples torradeira em uma garagem e a paixão por encontrar o grão perfeito. Acreditamos que cada xícara conta uma história de dedicação.
          </Paragraph>
          
          <Paragraph>
            Trabalhamos diretamente com pequenos produtores, garantindo grãos de alta qualidade e práticas de comércio justo. Torramos o café diariamente, em pequenos lotes, para garantir a frescura e o perfil de sabor único que você merece.
          </Paragraph>
          
          <Paragraph>
            Venha nos visitar e sinta a diferença que a paixão verdadeira faz.
          </Paragraph>
          
          <Button href="#contact">Fale Conosco</Button>
        </TextContent>
        
        <ImageWrapper>
          <img src={AboutImage} alt="Nossa cafeteria e ambiente acolhedor" />
        </ImageWrapper>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;