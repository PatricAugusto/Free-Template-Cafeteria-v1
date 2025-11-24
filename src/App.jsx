import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import Menu from './components/Menu/Menu';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const MainContent = styled.main`
  min-height: calc(100vh - 80px); 
  padding: ${({ theme }) => theme.spacings.extraLarge} 0;
  text-align: center;
`;

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      
      <main>
        <AboutSection />

        <Menu />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;