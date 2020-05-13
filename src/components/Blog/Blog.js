import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BlogList from "./BlogList"

const getData = graphql`
  query a {
    blogs: allContentfulPortfolio {
      nodes {
        blog {
          subTitle
          title
        }
      }
    }
    blogList: allContentfulBlogs(
      sort: { fields: published, order: DESC }
      limit: 3
    ) {
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
const Blog = () => {
  const { blogs, blogList } = useStaticQuery(getData)
  const { title, subTitle } = blogs.nodes[0].blog
  console.log(blogList)

  return (
    <section id="blog">
      <div className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-heading-3 mb-55">
                <h4>{title}</h4>
                <h2>{subTitle}</h2>
              </div>
            </div>
          </div>
          <div className="row blog-post-area">
            {blogList.nodes.map((blogDetail, index) => {
              return <BlogList key={index} blogDetail={blogDetail} />
            })}
          </div>
          <div className="learnmore view-all-blogs">
            <Link to="/blogs" className="skill-btn">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Blog
