import React from 'react';
import { 
  FooterContainer, 
  FooterContent, 
  FooterSection, 
  SectionTitle, 
  FooterLink, 
  CopyRight,
  Logo 
} from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterSection>
          <Logo>Coffee Blend</Logo>
          <p>Seu refúgio de café artesanal no coração da cidade.</p>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Navegação</SectionTitle>
          <FooterLink href="#home">Início</FooterLink>
          <FooterLink href="#menu">Cardápio</FooterLink>
          <FooterLink href="#about">Nossa História</FooterLink>
          <FooterLink href="#contact">Contato</FooterLink>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Contato</SectionTitle>
          <p>Rua do Café, 123 - Centro</p>
          <p>contato@coffeeblend.com.br</p>
          <p>(49) 98765-4321</p>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Siga-nos</SectionTitle>
          <FooterLink href="https://instagram.com" target="_blank">Instagram</FooterLink>
          <FooterLink href="https://facebook.com" target="_blank">Facebook</FooterLink>
        </FooterSection>
      </FooterContent>

      <CopyRight>
        &copy; {new Date().getFullYear()} Coffee Blend. Todos os direitos reservados.
      </CopyRight>
    </FooterContainer>
  );
};

export default Footer;