import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Link, graphql } from "gatsby"
import Navigation from "../components/Utility/Navigation"
import Footer from "../components/Footer/Footer"
const template = ({ data }) => {
  console.log(data)
  const {
    title,
    text: { json },
  } = data.post
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="rich">
            <img
              className="single-blog-image"
              src={node.data.target.fields.file["en-US"].url}
            />
          </div>
        )
      },
    },
  }
  return (
    <div>
      <Navigation />
      <div className="blog-area blogs-page single-blog-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className="single-blog-title">{title}</h1>
              <article>{documentToReactComponents(json, options)}</article>
            </div>
            <div className="learnmore view-all-blogs">
              <Link to="/blogs" className="skill-btn">
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulBlogs(slug: { eq: $slug }) {
      title
      text {
        json
      }
    }
  }
`
export default template
