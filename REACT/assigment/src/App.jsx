import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementbyamount } from "./redux/features/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div className="bg-amber-500 w-fit flex flex-col items-center">
        <h1 className="text-5xl font-bold">{count}</h1>
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="bg-yellow-300 border-4 m-1 p-2 font-bold rounded-4xl"
        >
          Incriment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="bg-yellow-300 border-4 m-1 p-2 font-bold rounded-4xl"
        >
          dicriment
        </button>
        <button className="bg-yellow-300 border-4 m-1 p-2 font-bold rounded-4xl" onClick={()=>{
      dispatch(incrementbyamount(10))
        }}>Incres by Amount</button>
      </div>
    </>
  );
}

export default App;
