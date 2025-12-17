import { useState } from 'react'
import { Footer } from './compnents/footer'
import './App.css'
import Header from './compnents/header'
import Main from './compnents/main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header />
<Main />
    <Footer />
      <h1 className=''></h1>
    </>
  )
}

export default App
