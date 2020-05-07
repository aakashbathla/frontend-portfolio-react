import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSkillsData = graphql`
  query {
    skills: allContentfulPortfolio {
      nodes {
        skills {
          technolgies {
            name
            languages {
              Percentage
              name
            }
          }
          title
          subtitle
        }
      }
    }
  }
`
const styles = {
  width: {
    width: "red",
  },
}

const Skills = () => {
  const { skills } = useStaticQuery(getSkillsData)
  const { title, subtitle, technolgies } = skills.nodes[0].skills
  console.log(technolgies)
  return (
    <section id="expertise">
      <div className="expertise-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-heading-1">
                <h4>{title}</h4>
                <h2>{subtitle}</h2>
              </div>
            </div>
          </div>
          <div className="progress-bar-area">
            <div className="row">
              <div className="col-md-12 progress-pr mb-bot-55-mobile">
                {technolgies.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="col-md-6 col-sm-12 d-inline-block align-top"
                    >
                      <h4 className="progress-top">{value.name}</h4>
                      {value.languages.map((val, ind) => {
                        return (
                          <div key={ind} className="progress-bar-container">
                            <h3 className="progressbar-title">
                              <span className="progressbar-name">
                                {val.name}
                              </span>
                              <span className="progressbar-value">
                                {val.Percentage}
                              </span>
                            </h3>
                            <div className="progress">
                              <div
                                className="progress-bar progress-bar-success"
                                role="progressbar"
                                aria-valuenow="45"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: `${val.Percentage}` }}
                              ></div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
