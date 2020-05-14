import React from "react"
import Image from "gatsby-image"
const ProjectsList = props => {
  console.log(props)
  return (
    <div className="col-xl-4 col-lg-4 com-md-6 col-sm-6 cat1">
      <div className="single-projects">
        <Image fixed={props.projectsDetail.image.fixed} alt="alt image" />
        <div className="image-content-area">
          <div className="hover-text">
            <h4>{props.projectsDetail.title}</h4>
            <p></p>
            <a href="#">View details</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsList
