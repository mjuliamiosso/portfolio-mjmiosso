import { useState } from 'react'
import Navbar from './views/Navbar/Navbar'
import Header from './views/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
    </>
  )
}

export default App
