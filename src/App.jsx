import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import About from './Components/About/About'
import Services from './Components/services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Hero/>
   <About/>
   <Services/>
   <MyWork/>
   <Contact/>
    </>
  )
}

export default App
