import React from "react"
import Navigation from "../components/Utility/Navigation"
import Home from "../components/Home/Hero"
import Skills from "../components/Skills/Skills"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/global.css"

export default () => (
  <div>
    <Navigation />
    <Home />
    <Skills />
  </div>
)
