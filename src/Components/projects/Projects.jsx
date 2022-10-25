import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
const Projects = () => {
  return (
    <section className="projects section" id="projects">
    <h2 className="section__title">Projects</h2>
    <span className="section__subtitle">The things I make</span>
    <Project1/>
    <Project2/>
    <Project3/>
    </section>
    
    
  )
}

export default Projects