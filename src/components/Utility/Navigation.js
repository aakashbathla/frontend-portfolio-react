import React, { useState, useEffect } from "react"
import styles from "../../css/Navigation.module.css"
import { addHash, removeHash } from "./Utility"
import links from "../../constants/links"

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
    <a
      href={typeof window !== "undefined" && window.location.hash}
      className={styles.meanmenuReveal}
      onClick={toggleNav}
    >
      X
    </a>
  ) : (
    <>
      <a
        href={typeof window !== "undefined" && window.location.hash}
        className={styles.meanmenuReveal}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
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
                    {links.map((item, index) => {
                      return (
                        <li key={index} id={item.id}>
                          <a href={item.path}>{item.text}</a>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
              <div
                className={`${styles.mobileMenu} ${styles.meanContainer} d-block d-md-none`}
              >
                <div className={styles.meanBar}>
                  {breadcrumb}
                  <nav
                    className={`${styles.meanNav} ${
                      toggle ? "d-block" : "d-none"
                    }`}
                  >
                    <ul>
                      {links.map((item, index) => {
                        return (
                          <li key={index} id={item.id}>
                            <a href={item.path} onClick={toggleNav}>
                              {item.text}
                            </a>
                          </li>
                        )
                      })}
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
