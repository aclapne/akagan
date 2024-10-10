import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, timeLeft, score, onClose },
  ref,
) {
  return (
    <div
      ref={ref}
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
    >
      <dialog
        open
        className="bg-cyan-100 rounded-lg shadow-xl p-6 max-w-md w-full flex-col flex transform transition-transform scale-100"
      >
        <h2 className="text-4xl font-bold text-black mb-4 text-left">
          You {result}!
        </h2>
        <p className="text-gray-700 mb-2 text-left">
          The target time was{" "}
          <strong className="text-black">{targetTime} seconds</strong>.
        </p>
        {timeLeft !== null && (
          <p className="text-gray-700 mb-2 text-left">
            You stopped the time with{" "}
            <strong className="text-black">{timeLeft} seconds</strong> left.
          </p>
        )}
        <p className="text-gray-700 mb-6 text-left">
          Your score: <strong className="text-black">{score}/100</strong>
        </p>
        <div className="text-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-cyan-500 transition duration-300 ease-in-out"
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
});

export default ResultModal;
