import { useState, useRef, useEffect } from "react";
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const startTime = useRef(null);
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [showRestart, setShowRestart] = useState(false);

  useEffect(() => {
    if (timerExpired) {
      setShowModal(true);
      // Eşik değeri kontrol ederek sonucu belirleme
      setResult(score >= 95 ? "Won" : "Lost");
    }
  }, [timerExpired, score]);

  function handleStart() {
    startTime.current = Date.now();
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
    setShowRestart(false);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);

    const elapsed = (Date.now() - startTime.current) / 1000;
    const remainingTime = Math.max(0, targetTime - elapsed);
    const calculatedScore = Math.max(
      0,
      Math.round((remainingTime / targetTime) * 100),
    );

    setTimeLeft(remainingTime.toFixed(2));

    // Eğer kalan zaman belirli bir aralık içindeyse kazanmış kabul et.
    const isWithinTolerance = remainingTime >= -0.05 && remainingTime <= 0.05;
    setResult(calculatedScore >= 50 || isWithinTolerance ? "Won" : "Lost");
    setScore(calculatedScore);
    setShowModal(true);
    setShowRestart(true);
  }

  function handleClose() {
    setShowModal(false);
    setTimerExpired(false);
    setShowRestart(true);
  }

  function handleRestart() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
    setTimeLeft(null);
    setScore(0);
    setResult("");
    setShowRestart(false);
  }

  return (
    <>
      {showModal && (
        <ResultModal
          targetTime={targetTime}
          result={result}
          timeLeft={timeLeft}
          score={score}
          onClose={handleClose}
          ref={dialog}
        />
      )}
      <section className="aspect-square h-4/5 border-2 border-cyan-400 rounded-lg flex flex-col items-center justify-evenly bg-gradient-to-br from-green-500 to-cyan-500 text-white shadow-md p-4 transition-transform transform hover:scale-105">
        <h2 className="text-black text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-base text-black border rounded-lg border-black p-2 mb-2">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button
          onClick={
            showRestart
              ? handleRestart
              : timerStarted
                ? handleStop
                : handleStart
          }
          className={`px-3 py-1 rounded-lg transition-all duration-300 text-base w-2/5 ${
            showRestart
              ? "bg-red-500 text-white hover:bg-red-400"
              : "bg-black text-white hover:bg-gray-600"
          }`}
        >
          {showRestart
            ? "Restart"
            : timerStarted
              ? "Stop Challenge"
              : "Start Challenge"}
        </button>
        <p
          className="mt-2 text-xs text-gray-900"
          id={timerStarted ? "active" : "passive"}
        >
          {timerStarted ? "Time is running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
