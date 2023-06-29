import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'

import Skills from "./components/Skills"
import Greetings from "./components/Greetings"
import Blogs from "./components/Blogs"
import '../src/components/hero.css'





const App=()=> {
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          
          <Greetings/>
          
          

        </div>
        <About/>
        <Experience/>
        
        
        <Skills/>
        
        <Works/>
        {/* <Blogs /> */}
        
        <div className="relative z-0">
          <Contact/>
          

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
