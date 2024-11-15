import React, { useState } from "react";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "50%", left: "60%" });

  const moveNoButton = () => {
    setNoButtonPosition({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    });
  };

  return (
    <div className="h-screen bg-gradient-to-b from-pink-300 via-red-200 to-purple-400 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating Hearts */}
      <div className="absolute inset-0">
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="absolute bg-pink-400 opacity-70 rounded-full animate-float"
              style={{
                width: `${Math.random() * 30 + 20}px`,
                height: `${Math.random() * 30 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
            />
          ))}
      </div>

      {/* Main Content */}
      <div className="bg-white p-8 rounded-lg shadow-lg z-10 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Hi Khushi! 🌙
        </h1>
        <p className="text-gray-700 mt-4">
          I really enjoy talking to you and would love to spend a night under the moon and stars with you. 🌟 Everything we talked about yesterday felt so magical!
        </p>
        <p className="text-gray-700 mt-4">
          I believe in you and know you’ll achieve everything you dream of. You’re amazing!
        </p>
        <div className="mt-6 flex items-center justify-center space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => setShowPopup(true)}
          >
            Yes ❤️
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg cursor-pointer"
            style={{ position: "absolute", top: noButtonPosition.top, left: noButtonPosition.left }}
            onMouseEnter={moveNoButton}
          >
            No 😅
          </button>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold text-pink-500">
              I really enjoy talking to you a lot! ❤️
            </h2>
            <p className="text-gray-600 mt-4">
              You make my days brighter, and I can't wait to spend more magical moments with you.
            </p>
            <button
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
