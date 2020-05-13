import React from "react"
import Image from "gatsby-image"
const BlogList = props => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6">
      <div className="single-blog-post">
        <div className="blog-thumbnail">
          <Image fixed={props.blogDetail.image.fixed} />
        </div>
        <div className="blog-post-text">
          <h3>{props.blogDetail.title}</h3>
          <span>{props.blogDetail.genre}</span>
          <p>{props.blogDetail.description.description}</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default BlogList
