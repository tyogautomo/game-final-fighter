import { useGame } from './hooks/useGame';
import {
  Timer,
  Canvas,
  Result,
  Counter,
  Container,
  GlobalStyles,
  PlayerOneBar,
  PlayerTwoBar,
  PlayerOneInner,
  PlayerTwoInner,
  TopBarContainer,
  StatusContainer,
} from './styles';

function App() {
  const { canvasRef, playerOneHealth, playerTwoHealth, timer, result } = useGame();

  const renderHealthBar = () => (
    <TopBarContainer>
      <StatusContainer>
        <PlayerOneBar>
          <PlayerOneInner health={playerOneHealth} />
        </PlayerOneBar>
        <Timer>
          <Counter>{timer}</Counter>
        </Timer>
        <PlayerTwoBar>
          <PlayerTwoInner health={playerTwoHealth} />
        </PlayerTwoBar>
      </StatusContainer>
      <Result>
        {result}
      </Result>
    </TopBarContainer>
  );

  return (
    <Container>
      <GlobalStyles />
      {renderHealthBar()}
      <Canvas ref={canvasRef} />
    </Container>
  );
}

export default App;
