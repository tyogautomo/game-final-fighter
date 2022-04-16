import { useGame } from './hooks/useGame';
import {
  Title,
  Timer,
  Canvas,
  Result,
  Layout,
  Footer,
  Counter,
  SpanBold,
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
    <Layout>
      <Title> -=Final Fighter=- </Title>
      <Container>
        <GlobalStyles />
        {renderHealthBar()}
        <Canvas ref={canvasRef} />
      </Container>
      <Footer>Recreated by <SpanBold>Yoga Utomo</SpanBold></Footer>
      <Footer smaller>Assets by <SpanBold>brullov</SpanBold> and <SpanBold>luizmelo</SpanBold>, a tutorial by <SpanBold>Chris Course</SpanBold></Footer>
    </Layout>
  );
}

export default App;
