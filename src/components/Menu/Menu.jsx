import React, { useRef } from 'react'; 
import { motion, useInView } from 'framer-motion';
import { menuData } from '../../data/menuData'; 
import ProductCard from '../ProductCard/ProductCard';
import { 
  MenuSection, 
  MenuTitle, 
  CategoryTitle, 
  CategoryContainer, 
} from './Menu.styles';

const menuContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut",
      staggerChildren: 0.05 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const Menu = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <MenuSection id="menu" ref={ref}> 
      <MenuTitle>Nosso Cardápio</MenuTitle>
      
      <motion.div
        variants={menuContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} 
      >
        {menuData.map((categoryData) => (
          
          <motion.div
            key={categoryData.category}
            variants={categoryVariants} 
          >
            <CategoryContainer> 
              <CategoryTitle>{categoryData.category}</CategoryTitle>
              
              {categoryData.items.map((item) => (
                <motion.div key={item.id} variants={itemVariants}> 
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </CategoryContainer>
          </motion.div>
          
        ))}
      </motion.div>

    </MenuSection>
  );
};

export default Menu;