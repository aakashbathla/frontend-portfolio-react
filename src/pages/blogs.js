import React from "react"
import { graphql } from "gatsby"
import Navigation from "../components/Utility/Navigation"
import Footer from "../components/Footer/Footer"
import BlogList from "../components/Blog/BlogList"
export const query = graphql`
  {
    blogs: allContentfulBlogs(sort: { fields: published, order: DESC }) {
      nodes {
        image {
          fixed(width: 400, height: 300) {
            ...GatsbyContentfulFixed
          }
        }
        title
        slug
        genre
        description {
          description
        }
        published
      }
    }
  }
`
const blogs = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Navigation />
      <section>
        <div className="blog-area blogs-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="section-heading-3 mb-55">
                  <h4>Read All</h4>
                  <h2>Blogs</h2>
                </div>
              </div>
            </div>
            <div className="row blog-post-area">
              {data.blogs.nodes.map((blogDetail, index) => {
                return <BlogList key={index} blogDetail={blogDetail} />
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default blogs
