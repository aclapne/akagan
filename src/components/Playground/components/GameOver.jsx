import player from './Player.jsx';

function GameOver({ winner, onRestart }) {
  return (
    <div id="gameover">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw.</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
export default GameOver;
