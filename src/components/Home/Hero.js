import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import StyledHero from "../Utility/StyledHero"
import { FaLongArrowAltDown } from "react-icons/fa"
import { IconContext } from "react-icons"

const getHomeData = graphql`
  query {
    home: allContentfulPortfolio {
      nodes {
        homeImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        home {
          name
          profession
          professionTitle
          work {
            link
            text
          }
          details
        }
      }
    }
  }
`
const Hero = () => {
  const { home } = useStaticQuery(getHomeData)
  const {
    name,
    profession,
    details,
    work,
    professionTitle,
  } = home.nodes[0].home
  const { homeImage } = home.nodes[0]
  return (
    <section>
      <StyledHero img={homeImage.fluid} className="header-content-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="intro-text">
                <h1>
                  <span>{name}</span>
                  <br></br>
                  <span>{profession}</span>
                  {professionTitle}
                </h1>
                <p>{details}</p>
                <div className="learnmore">
                  <a href={work.link} className="skill-btn">
                    {work.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header-down-arrow">
            <a href="/#aboutus">
              <IconContext.Provider value={{ color: "#FFD15A", size: "35px" }}>
                <div>
                  <FaLongArrowAltDown />
                </div>
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </StyledHero>
    </section>
  )
}

export default Hero
