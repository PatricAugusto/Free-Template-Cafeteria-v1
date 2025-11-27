import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ContactContainer, 
  ContactContent, 
  InfoBlock, 
  FormBlock, 
  InfoTitle, 
  InfoText, 
  ContactForm, 
  FormGroup, 
  Label, 
  Input, 
  Textarea, 
  SubmitButton 
} from './ContactSection.styles';

import { StyledButton } from '../Button/Button.styles'; 

const contactContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.4, 
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    e.target.reset(); 
  };

  return (
    <ContactContainer id="contact" ref={ref}>
      <motion.div
        variants={contactContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <ContactContent>
          
          <motion.div variants={blockVariants} style={{ flex: 1 }}>
            <InfoBlock>
              <InfoTitle>Estamos Prontos para te Atender</InfoTitle>
              <InfoText>
                Visite-nos ou entre em contato para pedidos, reservas e eventos.
              </InfoText>
              
              <p>
                <strong>Endereço:</strong> Rua da Cafeteria, 123 | Bairro Central
              </p>
              <p>
                <strong>Telefone:</strong> (49) 98765-4321
              </p>
              <p>
                <strong>E-mail:</strong> contato@coffeeblend.com
              </p>
              <p>
                <strong>Horário:</strong> Seg - Sex: 8h às 19h | Sáb: 9h às 17h
              </p>
            </InfoBlock>
          </motion.div>

          <motion.div variants={blockVariants} style={{ flex: 1 }}>
            <FormBlock>
              <InfoTitle>Envie sua Mensagem</InfoTitle>
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input type="text" id="name" required />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">E-mail</Label>
                  <Input type="email" id="email" required />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" rows="5" required />
                </FormGroup>

                <SubmitButton as="button" type="submit">
                  Enviar Mensagem
                </SubmitButton>
              </ContactForm>
            </FormBlock>
          </motion.div>
          
        </ContactContent>
      </motion.div>
    </ContactContainer>
  );
};

export default ContactSection;