import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge.jsx";
import resultModal from "./components/ResultModal.jsx";
function Challenges() {
  return (
    <main className="w-full h-screen flex">
      <div className="w-1/3 h-full flex items-center justify-center p-6 bg-gray-800">
        <Player />
      </div>
      <div className="w-2/3 aspect-square p-9 flex items-center justify-center bg-gray-800">
        <div className="grid grid-cols-2 gap-5 p-9 w-4/5 h-full  justify-center items-center">
          <TimerChallenge title={"Easy"} targetTime={1} />
          <TimerChallenge title={"Not Easy"} targetTime={5} />
          <TimerChallenge title={"Getting tough"} targetTime={10} />
          <TimerChallenge title={"Pros only"} targetTime={15} />
        </div>
      </div>
    </main>
  );
}

export default Challenges;
