import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=12')
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading images...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Image Gallery
      </h1>

      <ol className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {user.map(item => (
          <li
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden 
                       hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={`https://picsum.photos/id/${item.id}/400/300`}
                alt={item.author}
                className="w-full h-56 object-cover 
                           hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              <h2 className="font-semibold text-gray-800 truncate">
                {item.author}
              </h2>

              <a
                href={item.download_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-lg 
                           bg-amber-500 text-white text-sm font-medium
                           hover:bg-amber-600 transition"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App
