import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl border-t-4 border-indigo-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Task 4: My Todo List ✅</h2>
      
      {/* Input Section */}
      <div className="flex gap-2 mb-6">
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new task..." 
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button 
          onClick={addTask} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Add
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-sm text-gray-500 mb-4 font-medium">
        <span>Total: {tasks.length}</span>
        <span>Completed: {tasks.filter(t => t.completed).length}</span>
      </div>

      {/* List */}
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className={`flex items-center justify-between p-3 rounded-lg border ${task.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
            <span 
              onClick={() => toggleComplete(task.id)}
              className={`flex-1 cursor-pointer select-none ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
            >
              {task.text}
            </span>
            <button 
              onClick={() => deleteTask(task.id)} 
              className="ml-3 text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition"
            >
              🗑️
            </button>
          </li>
        ))}
        {tasks.length === 0 && <p className="text-center text-gray-400 mt-5">No tasks yet. Add one!</p>}
      </ul>
    </div>
  );
};

export default TodoApp;