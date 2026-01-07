import React, { useState } from 'react';

const EmojiCounter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === 10) setMessage("🎉 Zabardast! You reached 10!");
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    }
  };

  const handleReset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Task 2: Emoji Counter 😃</h2>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <h1 className="text-6xl mb-2">{count} 🍎</h1>
        {message && <p className="text-green-600 font-bold animate-bounce">{message}</p>}
      </div>
      
      <div className="flex justify-center gap-3">
        <button onClick={handleIncrease} className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition">
          Increase +
        </button>
        <button onClick={handleDecrease} className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-semibold transition">
          Decrease -
        </button>
        <button onClick={handleReset} className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition">
          Reset
        </button>
      </div>
    </div>
  );
};

export default EmojiCounter;