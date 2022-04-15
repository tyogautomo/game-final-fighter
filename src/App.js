import { useGame } from './hooks/useGame';
import { Canvas, Container, TopBarContainer, GlobalStyles } from './styles';

function App() {
  const { canvasRef } = useGame();

  return (
    <Container>
      <GlobalStyles />
      <TopBarContainer>
        <div>OLELELELEL</div>
        <div>OLELELELEL</div>
        <div>OLELELELEL</div>
        <div>OLELELELEL</div>
        <div>OLELELELEL</div>
      </TopBarContainer>
      <Canvas ref={canvasRef} />
    </Container>
  );
}

export default App;
