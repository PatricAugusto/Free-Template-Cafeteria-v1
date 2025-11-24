import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const MainContent = styled.main`
  min-height: calc(100vh - 80px); /* Ajuste a altura se o header tiver altura fixa */
  padding: ${({ theme }) => theme.spacings.extraLarge} 0;
  text-align: center;
`;

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      
      <main>
        <Menu />
      </main>

      <Footer />
    </>
  );
}

export default App;