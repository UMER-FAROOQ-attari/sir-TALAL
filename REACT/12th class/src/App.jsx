import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let api = await fetch(`https://dummyjson.com/users`);
        let data = await api.json();
        setUser(data.users);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    // Main Container with Dark Background
    <div className='min-h-screen bg-slate-900 py-10 px-5'>
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-emerald-400 mb-10 tracking-wider uppercase border-b-2 border-emerald-500 w-fit mx-auto pb-2">
        User Profiles
      </h1>

      {/* Grid Layout for Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 container mx-auto'> 
        
        {users.map((user) => (
          <div 
            key={user.id} 
            className='group relative bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl 
                       hover:shadow-emerald-500/20 hover:-translate-y-3 transition-all duration-300 ease-in-out
                       flex flex-col items-center overflow-hidden'
          >
            {/* Background Gradient Circle (Decorative) */}
            <div className="absolute top-[-50px] right-[-50px] w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/40 transition-all duration-500"></div>

            {/* User Image */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              <img 
                src={user.image} 
                alt={user.firstName} 
                className="relative w-24 h-24 rounded-full object-cover border-4 border-emerald-500 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* User Name */}
            <h2 className='text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors'>
              {user.firstName} {user.lastName}
            </h2>

            {/* User Details Badge */}
            <span className="bg-slate-700 text-emerald-400 text-xs px-3 py-1 rounded-full mb-4 uppercase tracking-wide font-semibold">
              {user.company?.title || "User"}
            </span>

            {/* Info List */}
            <div className='w-full space-y-2 text-slate-300 text-sm'>
              <div className='flex justify-between border-b border-slate-700 pb-1'>
                <span className='font-semibold text-emerald-500'>Age:</span>
                <span>{user.age} Years</span>
              </div>
              <div className='flex justify-between border-b border-slate-700 pb-1'>
                <span className='font-semibold text-emerald-500'>Gender:</span>
                <span className='capitalize'>{user.gender}</span>
              </div>
              <div className='flex justify-between border-b border-slate-700 pb-1'>
                <span className='font-semibold text-emerald-500'>Phone:</span>
                <span>{user.phone}</span>
              </div>
            </div>

            {/* Button (Optional) */}
            <button className="mt-5 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded-lg shadow-md transition-colors duration-300">
              View Profile
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;