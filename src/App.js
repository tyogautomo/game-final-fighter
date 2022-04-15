import { useGame } from './hooks/useGame';
import {
  Canvas,
  Container,
  TopBarContainer,
  GlobalStyles,
  PlayerOneBar,
  PlayerTwoBar,
  Timer,
  Counter,
  PlayerOneInner,
  PlayerTwoInner,
} from './styles';

function App() {
  const { canvasRef } = useGame();

  const renderHealthBar = () => {
    return (
      <TopBarContainer>
        <PlayerOneBar>
          <PlayerOneInner />
        </PlayerOneBar>
        <Timer>
          <Counter>60</Counter>
        </Timer>
        <PlayerTwoBar>
          <PlayerTwoInner />
        </PlayerTwoBar>
      </TopBarContainer>
    );
  };

  return (
    <Container>
      <GlobalStyles />
      {renderHealthBar()}
      <Canvas ref={canvasRef} />
    </Container>
  );
}

export default App;
