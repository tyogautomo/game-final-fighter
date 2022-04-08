import './App.css';
import { useGame } from './hooks/useGame';

function App() {
  const { canvasRef } = useGame();

  return (
    <canvas ref={canvasRef} />
  );
}

export default App;
