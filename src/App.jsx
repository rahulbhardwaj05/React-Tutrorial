import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Services from './Components/services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'



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
