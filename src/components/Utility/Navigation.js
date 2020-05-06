import React, { useState, useEffect } from "react"
import styles from "../../css/Navigation.module.css"
import { addHash, removeHash } from "./Utility"

const Navigation = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    addHash()
    window.addEventListener("hashchange", e => {
      removeHash()
      addHash()
    })
  }, [])
  const toggleNav = () => {
    setToggle(toggle => {
      return !toggle
    })
  }
  const breadcrumb = toggle ? (
    "X"
  ) : (
    <>
      <span></span>
      <span></span>
      <span></span>
    </>
  )
  return (
    <header id="home">
      <div className={styles.mainNavigation}>
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-3">
              <div className={styles.logoArea}>
                <a href="#home">
                  <img src="/logo2.png" alt="enventer" />
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-9">
              <div className="main-menu">
                <nav className={`${styles.navbar} d-none d-md-block`}>
                  <ul>
                    <li id="home">
                      <a href="#home">Home</a>
                    </li>
                    <li id="about">
                      <a href="#about">About</a>
                    </li>
                    <li id="skills">
                      <a href="#skills">Skills</a>
                    </li>
                    <li id="projects">
                      <a href="#projects">Projects</a>
                    </li>
                    <li id="blog">
                      <a href="#blog">Blog</a>
                    </li>
                    <li id="contact">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div
                className={`${styles.mobileMenu} ${styles.meanContainer} d-block d-md-none`}
              >
                <div className={styles.meanBar}>
                  <a
                    href={window.location.hash}
                    className={styles.meanmenuReveal}
                    onClick={toggleNav}
                  >
                    {breadcrumb}
                  </a>
                  <nav
                    className={`${styles.meanNav} ${
                      toggle ? "d-block" : "d-none"
                    }`}
                  >
                    <ul>
                      <li id="home">
                        <a href="#home">Home</a>
                      </li>
                      <li id="about">
                        <a href="#about">About</a>
                      </li>
                      <li id="skills">
                        <a href="#skills">Skills</a>
                      </li>
                      <li id="projects">
                        <a href="#projects">Projects</a>
                      </li>
                      <li id="blog">
                        <a href="#blog">Blog</a>
                      </li>
                      <li id="contact">
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
