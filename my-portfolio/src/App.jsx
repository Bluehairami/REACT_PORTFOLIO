import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App () {
  return (
    <div>
      {/* /* parent=App to child=Navbar */ }
      {/* Name="Ami Valand" - Prop passed to Navbar component */ }
        <Navbar Name="Ami Valand" />
        <Hero title="Hi, I'm Ami - I build clean, scalable web apps" 
              subtitle=".NET, Angular |  Based in Toronto, Canada" 
              variant="Full-stack Developer" />
              {/* App -> Skills -> SkillCard -> skills.js */}
              {/* main -> parent -> child */}
              <Skills />
              <Experience/>
              <Projects />
              {/* <Education/> */}
              <Contact />
              {/* <Footer/> */}
    </div>
  )
}
export default App