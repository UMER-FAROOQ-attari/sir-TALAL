import "./index.css"
import { Link } from 'react-router-dom'

const App = () => {
  return (
    
    <div className="flex gap-4 p-6">
      <Link 
        to="/" 
        className="text-3xl font-bold  bg-neutral-700 text-amber-200 px-6 py-3 rounded-2xl"
      >
        Home
      </Link>

      <Link 
        to="/about" 
        className="text-3xl font-bold bg-blue-600 text-white px-6 py-3 rounded-2xl"
      >
        About
      </Link>
    </div>
  )
}

export default App
