import "./App.css";
import { useState } from "react";
import Greet from "./components/Greet";
function App() {
  let [count, setCount] = useState(0);
  function add (){
    setCount(count + 1)
  }
  function del (){
    setCount(count -1)
  }
  return (
    <>
    {/* <Greet username= "UMER" />
    <div className="shadow-xl/100 transform-gpu hover:scale-110 transition-all duration-1500 hover:shadow-gray-900/100 gap-4 mt-20 ml-20 p-10 flex flex-col border-2 w-fit align-center rounded-2xl bg-black justify-center">
      <h1 className="text-amber-400 text-3xl">Hello World</h1>
      <p className="text-amber-400 text-3xl">You Clicked : {count}</p>
      <button className="border-2 p-3  rounded-2xl bg-amber-400 shadow-xl/100 transform-gpu hover:scale-110 transition-all duration-1500 hover:shadow-amber-300/20 " onClick={add}>Add Me!</button>
      <button className="border-2 p-3  rounded-2xl bg-amber-400 shadow-xl/100 transform-gpu hover:scale-110 transition-all duration-1500 hover:shadow-amber-300/20 " onClick={del}>Delete Me!</button>
    </div> */}
      
   <div className="bg-blue-500">   

<Greet />
</div>
      
    </>

  );
}

export default App;
