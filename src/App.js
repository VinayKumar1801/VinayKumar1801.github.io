
import './App.css';
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/projects/Projects';
import Github from "./Components/github/Github"
function App() {
  return (
    <div >
      <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Github/>
    </main>
    </div>
  );
}

export default App;
