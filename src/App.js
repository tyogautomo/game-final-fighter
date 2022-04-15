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
  const { canvasRef, playerOneHealth, playerTwoHealth, timer } = useGame();

  const renderHealthBar = () => {
    return (
      <TopBarContainer>
        <PlayerOneBar>
          <PlayerOneInner health={playerOneHealth} />
        </PlayerOneBar>
        <Timer>
          <Counter>{timer}</Counter>
        </Timer>
        <PlayerTwoBar>
          <PlayerTwoInner health={playerTwoHealth} />
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
