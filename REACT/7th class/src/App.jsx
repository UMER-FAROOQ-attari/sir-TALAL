import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mint,setMint] = useState();
  const [sec,setSec] = useState();
  const [hr,setHr] = useState();
useEffect(() => {
  const timer = setInterval(() => {
    const date = new Date();
    let mints = date.getMinutes();
    let secs = date.getSeconds();
    let hrs = date.getHours();

    setHr(hrs);
    setMint(mints);
    setSec(secs);
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-indigo-900 p-4">
        <div className="flex flex-col items-center gap-10 p-10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-white/10 backdrop-blur-md border border-gray-700/50">
          <h1 className="text-6xl font-extrabold text-center text-indigo-400 uppercase tracking-widest">
            Digital Clock
          </h1>
          <div className="flex gap-6 text-7xl font-light font-mono text-white/90">
            <span className="bg-white/10 p-3 rounded-lg shadow-inner">{hr}</span>
            <span className="text-indigo-400 font-normal">:</span>
            <span className="bg-white/10 p-3 rounded-lg shadow-inner">{mint}</span>
            <span className="text-indigo-400 font-normal">:</span>
            <span className="bg-white/10 p-3 rounded-lg shadow-lg">{sec}</span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;