import React from "react"
import Navigation from "../components/Utility/Navigation"
import Home from "../components/Home/Hero"
import About from "../components/About/About"
import Skills from "../components/Skills/Skills"
import Contact from "../components/Contact/Contact"
import Blog from "../components/Blog/Blog"
import Project from "../components/Projects/Projects"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/global.css"
import Footer from "../components/Footer/Footer"

export default () => (
  <div>
    <Navigation />
    <Home />
    <About />
    <Skills />
    <Project />
    <Blog />
    <Contact />
    <Footer />
  </div>
)
