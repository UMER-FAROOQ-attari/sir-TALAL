import React from 'react';
import Task1 from './components/StudentCard'; 
import EmojiCounter from './components/EmojiCounter';
import SignupForm from './components/SignupForm';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pb-20">
      
      {/* --- HEADER SECTION --- */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            React Revision Assignment 🚀
          </h1>
          <p className="text-blue-100 text-lg">
            Developed by <span className="font-semibold text-yellow-300">Umer Farooq</span>
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-4 mt-10 space-y-16">
        
        {/* === LEVEL 1 SECTION === */}
        <section>
          <div className="flex items-center mb-8">
            <div className="h-10 w-2 bg-blue-600 rounded-full mr-3"></div>
            <h2 className="text-3xl font-bold text-gray-800">Level 1: Fundamentals</h2>
          </div>
          
          <div className="grid gap-10">
            {/* Task 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Task1 />
            </div>

            {/* Task 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <EmojiCounter />
            </div>
          </div>
        </section>

        {/* Separator Line */}
        <hr className="border-t-2 border-dashed border-slate-300 mx-20" />

        {/* === LEVEL 2 SECTION === */}
        <section>
          <div className="flex items-center mb-8">
            <div className="h-10 w-2 bg-purple-600 rounded-full mr-3"></div>
            <h2 className="text-3xl font-bold text-gray-800">Level 2: Forms & State</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Task 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <SignupForm />
            </div>

            {/* Task 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <TodoApp />
            </div>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="text-center text-slate-400 mt-20 text-sm">
        © 2026 Umer Farooq | React Learning Journey
      </footer>
    </div>
  );
}

export default App;