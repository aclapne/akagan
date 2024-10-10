import { useState, useRef } from "react";

function Player() {
  const playerName = useRef(null);

  const [enteredPlayerName, setEnteredPlayerName] = useState("Player");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section
      id="player"
      className="w-full h-3/5 flex flex-col items-center justify-center p-6 bg-black text-center border-2 border-cyan-400 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl text-gray-300 font-bold mb-10">
        THE <span className="text-cyan-400">ALMOST</span> FINAL COUNTDOWN
      </h2>
      <h3 className="text-2xl text-gray-300 font-bold mb-10">
        Welcome,{" "}
        <span className={"text-cyan-400"}>{enteredPlayerName ?? "Player"}</span>
        !
      </h3>
      <h3 className="text-xl text-gray-300 mb-6">
        Stop the timer once you estimate that time is (almost) up
      </h3>
      <div className="w-full max-w-md flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          ref={playerName}
          className="w-full sm:w-2/3 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Enter your name"
        />
        <button
          onClick={handleClick}
          className="w-full sm:w-1/3 p-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-all duration-300"
        >
          Set Name
        </button>
      </div>
    </section>
  );
}

export default Player;
