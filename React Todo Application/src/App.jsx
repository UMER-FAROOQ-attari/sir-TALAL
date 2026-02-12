import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggle } from "./redux/features/todoSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const todosList = useSelector((state) => state.todo.value);
  const [todos, setTodos] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      
      <div className="bg-white w-full max-w-md sm:max-w-lg rounded-3xl shadow-xl p-5 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center mb-6 sm:mb-8 tracking-tight">
          📝 My Tasks
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
          <input
            type="text"
            value={todos}
            placeholder="What needs to be done?"
            onChange={(e) => setTodos(e.target.value)}
            className="w-full sm:flex-1 border-2 border-gray-200 rounded-2xl px-4 py-3 text-base sm:text-lg focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all placeholder-gray-400"
          />

          <button
            onClick={() => {
              if (todos.trim() === '') return;
              dispatch(add({
                id: Date.now(),
                text: todos,
                complete: false
              }));
              setTodos('');
            }}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl px-6 py-3 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todosList.map((item) => (
            <li 
              key={item.id} 
              className={`flex items-start sm:items-center justify-between p-3 sm:p-4 rounded-2xl border transition-all duration-300 ${
                item.complete ? "bg-gray-50 border-gray-100" : "bg-white border-gray-200 hover:shadow-md hover:border-indigo-200"
              }`}
            >
              
              <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 overflow-hidden">
                <input 
                  className="w-5 h-5 sm:w-6 sm:h-6 accent-indigo-600 cursor-pointer transition-transform active:scale-90 mt-1 sm:mt-0 flex-shrink-0"
                  type="checkbox"
                  checked={item.complete}
                  onChange={() => dispatch(toggle(item))}
                />

                <span 
                  className={`text-base sm:text-lg font-medium transition-all duration-300 break-words w-full ${
                    item.complete ? "line-through text-gray-400" : "text-gray-700"
                  }`}
                >
                  {item.text}
                </span>
              </div>

              <button
                className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-xl transition-colors font-semibold text-sm sm:text-base ml-2 flex-shrink-0 mt-1 sm:mt-0"
                onClick={() => dispatch(remove({ id: item.id }))}
              >
                Delete
              </button>
            </li>
          ))}
          
          {todosList.length === 0 && (
            <p className="text-center text-gray-500 mt-6 text-sm sm:text-base font-medium">
              No tasks yet. Add one above! ✨
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;