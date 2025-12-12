import { useState, useEffect } from 'react'
import './App.css'

function App() {
    let [showBadge, setShowBadge] = useState(false)

    useEffect(() => {
        console.log("Badge status updated...")
    }, [showBadge])

    const handleLogin = () => {
        setShowBadge(true)
        const myTimeout = setTimeout(() => {
            setShowBadge(false)
        }, 1500)
        return(()=>clearInterval(myTimeout))
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
            <button
                className='px-8 py-3 text-lg font-extrabold text-white uppercase tracking-wider 
                           bg-indigo-600 rounded-full shadow-2xl transition duration-300 ease-in-out 
                           hover:bg-indigo-700 hover:scale-105 active:scale-95 ring-4 ring-indigo-300/50'
                onClick={handleLogin}
            >
                Login
            </button>

            {showBadge && (
                <div className="mt-10 animate-bounce">
                    <h1 className="text-6xl md:text-8xl font-black rounded-3xl 
                                   bg-green-500 text-white p-12 shadow-[0_20px_50px_rgba(0,128,0,0.7)] 
                                   text-center leading-tight transform rotate-3">
                        SUCCESS!
                    </h1>
                </div>
            )}
        </div>
    )
}

export default App