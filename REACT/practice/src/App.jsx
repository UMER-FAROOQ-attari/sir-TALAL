import { useEffect, useState } from "react";
import "./App.css";
import Parent from "./components/parent";
function App() {
  const [count, setCount] = useState(window.screen.width);
function crntwidth(){
  setCount(window.innerWidth)
}
  useEffect(()=>{
  window.addEventListener("resize",crntwidth)
})



  // useEffect(()=>{
//   document.title = count
  
// },[count])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 font-sans">
  


     <h1>The size of window is <span>{count}</span></h1> 
     <Parent />
      {/* <div className="bg-white p-10 rounded-xl shadow-2xl transition duration-500 ease-in-out hover:shadow-3xl w-80 text-center"> */}
        
        {/* <h1 
          className={`text-7xl font-extrabold mb-8 transition-colors duration-300 ${
            count > 0 ? 'text-green-600' : count < 0 ? 'text-red-600' : 'text-gray-800'
          }`}
        >
          {count}
        </h1>

        <div className="flex justify-around space-x-4">
          
          <button
            className="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-5xl font-bold rounded-full w-20 h-20 shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => setCount(count + 1)}
            aria-label="Increment counter"
          >
            +
          </button>
          
          <button
            className="flex items-center justify-center text-white bg-red-500 hover:bg-red-600 active:bg-red-700 text-5xl font-bold rounded-full w-20 h-20 shadow-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
            onClick={() => setCount(count - 1)}
            aria-label="Decrement counter"
          >
            -
          </button>
        </div>

        <button
          className="mt-6 text-sm text-gray-500 hover:text-gray-700 transition duration-150"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>

      </div> */}
    </div>
  );
}

export default App;
