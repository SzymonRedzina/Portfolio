import { useState } from 'react'
import Welcome from './components/welcome'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

import './App.css'

function App() {
  return (
    <>
      <Welcome />
      <AboutMe />
      <Projects />
      <Certificates />
      <Contact />
    </>
      
    
  )
}

export default App
