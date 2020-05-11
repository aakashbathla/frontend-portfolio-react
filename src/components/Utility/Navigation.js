import React, { useState, useEffect } from "react"
import styles from "../../css/Navigation.module.css"
import { addHash, removeHash } from "./Utility"
import links from "../../constants/links"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import SmoothScroll from "smooth-scroll"

const getData = graphql`
  query {
    portfolio: allContentfulPortfolio {
      nodes {
        color {
          primaryColor
          secondaryColor
          fontPrimaryColor
          fontSecondaryColor
          fontTertiaryColor
        }
      }
    }
  }
`

const Navigation = () => {
  const { portfolio } = useStaticQuery(getData)
  const {
    primaryColor,
    secondaryColor,
    fontPrimaryColor,
    fontSecondaryColor,
    fontTertiaryColor,
  } = portfolio.nodes[0].color
  const [toggle, setToggle] = useState(false)
  const [activeClass, setActiveClass] = useState("")
  useEffect(() => {
    addHash()
    window.addEventListener("hashchange", e => {
      removeHash()
      addHash()
    })
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 50) {
        setActiveClass("")
      } else {
        setActiveClass("main-navigation sticky")
      }
    })

    if (typeof window !== "undefined") {
      // All animations will take exactly 500ms
      var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true,
      })
    }
  }, [])

  const toggleNav = () => {
    setToggle(toggle => {
      return !toggle
    })
  }

  const breadcrumb = toggle ? (
    <Link
      to={typeof window !== "undefined" && window.location.hash}
      className={styles.meanmenuReveal}
      onClick={toggleNav}
    >
      X
    </Link>
  ) : (
    <>
      <Link
        to={typeof window !== "undefined" && window.location.hash}
        className={styles.meanmenuReveal}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </>
  )

  return (
    <header id="home">
      <Helmet
        style={[
          {
            cssText: `
                  :root {
                    --primaryColor: ${primaryColor};
                    --secondaryColor: ${secondaryColor};
                    --fontPrimaryColor: ${fontPrimaryColor};
                    --fontTertiaryColor: ${fontTertiaryColor};
                    --fontSecondaryColor: ${fontSecondaryColor}; 
                  }
              `,
          },
        ]}
      />
      <div className={`${styles.mainNavigation} ${activeClass}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-3">
              <div className={`${styles.logoArea} logo-area`}>
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
