import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experience from './components/Experience'
import About from './components/About'
import Education from './components/Education'

function App () {
  return (
    <div>
      {/* /* parent=App to child=Navbar */ }
      {/* Name="Ami Valand" - Prop passed to Navbar component */ }
        <Navbar Name="AMI VALAND" />
        <Hero title="Hi, I'm Ami - I build clean, scalable web apps" 
              subtitle=".NET Core, Angular and SQL Server. | Based in Toronto, Canada" 
              variant="Full-stack Developer" />
              {/* App -> Skills -> SkillCard -> skills.js */}
              {/* main -> parent -> child */}
              <About/>
              <Skills />
              <Experience/>
              <Projects />
              <Education/>
              <Contact />
              {/* <Footer/> */}
    </div>
  )
}
export default App