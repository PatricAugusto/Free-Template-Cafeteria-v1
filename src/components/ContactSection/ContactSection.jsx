import React from 'react';
import { 
  ContactContainer, 
  ContactTitle, 
  ContactContent, 
  InfoBlock, 
  InfoItem, 
  FormWrapper, 
  FormTitle, 
  ContactForm, 
  Input, 
  TextArea, 
  SubmitButton 
} from './ContactSection.styles';
import Button from '../Button/Button'; 

const ContactSection = () => {
  // Simulação de função de submissão
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    e.target.reset(); // Limpa o formulário
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Fale Conosco</ContactTitle>
      <ContactContent>
        <InfoBlock>
          <FormTitle>Informações Essenciais</FormTitle>
          <InfoItem>
            <h4>📍 Endereço</h4>
            <p>Rua do Café Expresso, 123 | Bairro Central, Coffeetown - SP</p>
          </InfoItem>
          
          <InfoItem>
            <h4>⏰ Horário de Funcionamento</h4>
            <p>Segunda a Sexta: 8h às 19h</p>
            <p>Sábados: 9h às 18h</p>
            <p>Domingos: Fechado</p>
          </InfoItem>

          <InfoItem>
            <h4>📞 Contato</h4>
            <p>Telefone: (49) 98765-4321</p>
            <p>Email: contato@coffeeblend.com.br</p>
          </InfoItem>
        </InfoBlock>

        <FormWrapper>
          <FormTitle>Envie sua Mensagem</FormTitle>
          <ContactForm onSubmit={handleSubmit}>
            <Input type="text" placeholder="Seu Nome" required />
            <Input type="email" placeholder="Seu E-mail" required />
            <Input type="text" placeholder="Assunto" />
            <TextArea placeholder="Sua Mensagem..." rows="5" required />
            
            <SubmitButton as={Button} type="submit">
              Enviar Agora
            </SubmitButton>
          </ContactForm>
        </FormWrapper>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;