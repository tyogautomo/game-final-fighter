import { useGame } from './hooks/useGame';
import {
  Link,
  Timer,
  Parag,
  Canvas,
  Result,
  Layout,
  Footer,
  Counter,
  SpanBold,
  Container,
  MiddleSide,
  GlobalStyles,
  LeftSide,
  RightSide,
  PlayerOneBar,
  PlayerTwoBar,
  PlayerOneInner,
  PlayerTwoInner,
  TopBarContainer,
  StatusContainer,
} from './styles';
import 'twin.macro';

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
      <LeftSide>
        <Parag><SpanBold>Move:</SpanBold></Parag>
        <Parag>AWD/Arrow</Parag>
        <Parag><SpanBold>Attack:</SpanBold></Parag>
        <Parag>Space/Enter</Parag>
      </LeftSide>
      <MiddleSide>
        <Container>
          <GlobalStyles />
          {renderHealthBar()}
          <Canvas ref={canvasRef} />
        </Container>
        <Footer>Recreated by <Link href="https://github.com/tyogautomo" target="_blank"><SpanBold>Yoga Utomo</SpanBold></Link></Footer>
        <Footer smaller>Assets by <SpanBold>brullov</SpanBold> and <SpanBold>luizmelo</SpanBold>, a tutorial by <SpanBold>Chris Course</SpanBold></Footer>
      </MiddleSide>
      <RightSide />
    </Layout>
  );
}

export default App;
