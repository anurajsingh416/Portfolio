import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [themeLight, setTheme] = useState(true);
  function changeTheme(){
    setTheme(!themeLight);
  }
  return (
    <>
      <div>
        <NavBar theme={themeLight} />
        <Home theme={themeLight} changeColor={changeTheme} id="home"/>
        <About theme={themeLight} id="about"/>
        <Education theme={themeLight} id="education"/>
        <Skills theme={themeLight} id="skills"/>
        <Projects theme={themeLight} id="projects"/>
        <Contact theme={themeLight} id="contact"/>
      </div>
    </>
  )
}

export default App
