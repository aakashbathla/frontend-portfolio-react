import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectsList from "./ProjectsList"
const getData = graphql`
  {
    projects: allContentfulPortfolio {
      nodes {
        projects {
          title
          subTitle
        }
      }
    }
    projectsDetail: allContentfulProjects {
      nodes {
        description {
          description
        }
        slug
        publishedDate
        linktosite
        title
        techStack {
          technologies
        }
        genre
        image {
          fixed(width: 400, height: 400) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
const Projects = () => {
  const { projects, projectsDetail } = useStaticQuery(getData)
  const { title, subTitle } = projects.nodes[0].projects

  return (
    <section id="projects">
      <div className="projects-area">
        <div className="container">
          <div className="row d-flex align-items-center mb-85">
            <div className="col-xl-12">
              <div className="section-heading-1">
                <h4>{title}</h4>
                <h2>{subTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="row grid">
                {projectsDetail.nodes.map((val, index) => {
                  return <ProjectsList key={index} projectsDetail={val} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
