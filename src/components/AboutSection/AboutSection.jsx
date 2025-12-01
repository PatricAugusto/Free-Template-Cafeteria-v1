import React, { useRef } from 'react'; 
import { motion, useInView } from 'framer-motion';
import Button from '../Button/Button';
import { 
  AboutContainer, 
  ContentWrapper, 
  TextContent, 
  ImageWrapper, 
  AboutTitle, 
  Paragraph 
} from './AboutSection.styles';

import AboutImage from '../../assets/about-image.jpg'; 

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.5
    } 
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <AboutContainer id="about" ref={ref}>
      <ContentWrapper>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} 
          style={{ flex: 1, textAlign: 'left' }}
        >
          <AboutTitle>Nossa História e Paixão pelo Grão</AboutTitle>
          
          <motion.div variants={textItemVariants}> 
             <Paragraph>
               Desde 2018, a **Coffee Blend** tem sido um refúgio...
             </Paragraph>
          </motion.div>
          
          <motion.div variants={textItemVariants}>
             <Paragraph>
               Trabalhamos diretamente com pequenos produtores...
             </Paragraph>
          </motion.div>
          
          <motion.div variants={textItemVariants}>
             <Paragraph>
               Venha nos visitar e sinta a diferença que a paixão verdadeira faz.
             </Paragraph>
          </motion.div>
          
          <motion.div variants={textItemVariants}>
             <Button href="#contact">Fale Conosco</Button>
          </motion.div>
          
        </motion.div>
        
        <ImageWrapper>
          <motion.img 
            src={AboutImage} 
            alt="Nossa cafeteria e ambiente acolhedor" 
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} 
            className="about-image"
          />
        </ImageWrapper>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;