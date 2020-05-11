import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaBriefcase } from "react-icons/fa"
const getData = graphql`
  query {
    about: allContentfulPortfolio {
      nodes {
        about {
          title
          subTitle
          experience {
            company
            description
            profile
            range
          }
        }
      }
    }
  }
`

const About = () => {
  const { about } = useStaticQuery(getData)
  const { title, subTitle, experience } = about.nodes[0].about
  const createMarkup = description => {
    return { __html: description }
  }
  return (
    <section id="aboutus">
      <div className="experiences-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-heading-3 mt-100">
                <h4>{title}</h4>
                <h2>{subTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="experience-line">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <ul className="list">
                  {experience.map((exp, index) => {
                    return (
                      <li key={index}>
                        <div
                          className={`experience-content ${
                            index % 2 === 0 ? "ml-ec" : "mr-ec"
                          }`}
                        >
                          <h4>{exp.company}</h4>
                          <span>{exp.profile}</span>
                          <div
                            dangerouslySetInnerHTML={createMarkup(
                              exp.description
                            )}
                          ></div>
                        </div>
                        <div className="experience-time">
                          <h4>{exp.range}</h4>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
