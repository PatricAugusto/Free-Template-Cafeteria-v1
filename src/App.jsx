import Header from './components/Header/Header';
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
      
      <MainContent>
        <h2>Bem-vindo à Cafeteria Coffe Blend</h2>
        <p>A navegação acima já está funcionando com os estilos do tema!</p>
      </MainContent>
    </>
  );
}

export default App;