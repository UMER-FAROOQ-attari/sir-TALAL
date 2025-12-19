import "./App.css";

function App() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
  
  <div className="group relative w-80 overflow-hidden rounded-2xl bg-slate-900 p-8 text-center ring-2 ring-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.2)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:ring-indigo-400">
    
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

    <div className="mx-auto mb-5 h-28 w-28 rounded-full border-4 border-indigo-500 p-1 shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:border-pink-500">
      <img 
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Umer" 
        alt="Umer" 
        className="h-full w-full rounded-full bg-slate-800 object-cover" 
      />
    </div>

    <h2 className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">
      UMER
    </h2>

    <p className="mb-6 mt-2 text-sm font-medium text-slate-400 group-hover:text-slate-200">
      React & Tailwind Master
    </p>

    <div className="grid grid-cols-2 gap-3">
      <button className="rounded-lg bg-indigo-600 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/50 active:scale-95">
        Follow
      </button>
      <button className="rounded-lg border border-slate-600 py-2 text-sm font-bold text-slate-300 transition-all hover:border-pink-500 hover:text-pink-400 hover:bg-slate-800 active:scale-95">
        Message
      </button>
    </div>

  </div>
</div>
    </>
  );
}

export default App;
