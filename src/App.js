import { useGame } from './hooks/useGame';
import {
  Timer,
  Canvas,
  Counter,
  Container,
  GlobalStyles,
  PlayerOneBar,
  PlayerTwoBar,
  PlayerOneInner,
  PlayerTwoInner,
  TopBarContainer,
} from './styles';

function App() {
  const { canvasRef, playerOneHealth, playerTwoHealth } = useGame();

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
