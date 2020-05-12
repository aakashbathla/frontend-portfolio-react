import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createMarkup } from "../Utility/Utility"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import Image from "gatsby-image"
const getData = graphql`
  query {
    footer: allContentfulPortfolio {
      nodes {
        footer {
          copyrightText
          githubText
          githubLink
          linkedinText
          linkedinLink
          twitterText
          twitterLink
          summary
          link {
            detail
            name
            redirect
          }
        }
        footerImage {
          fixed(width: 100) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`
const Footer = () => {
  const { footer } = useStaticQuery(getData)
  console.log(footer)
  const {
    copyrightText,
    githubText,
    githubLink,
    linkedinText,
    linkedinLink,
    twitterText,
    twitterLink,
    summary,
    link,
  } = footer.nodes[0].footer
  const { footerImage } = footer.nodes[0]
  return (
    <footer className="footer group">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex">
            <div className="image-container">
              <Image fixed={footerImage.fixed} />
            </div>
            <div dangerouslySetInnerHTML={createMarkup(summary)}></div>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex d-lg-block justify-content-center justify-content-lg-left pt-3 pt-lg-0">
            <div className="d-flex social-container">
              <div className="p-2 pt0">
                <a href={twitterLink}>
                  <FaTwitter />
                </a>
              </div>
              <div
                className="d-none d-lg-block d-xl-block"
                dangerouslySetInnerHTML={createMarkup(twitterText)}
              ></div>
            </div>
            <div className="d-flex social-container">
              <div className="p-2 pt0">
                <a href={githubLink}>
                  <FaGithub />
                </a>
              </div>
              <div
                className="d-none d-lg-block d-xl-block"
                dangerouslySetInnerHTML={createMarkup(githubText)}
              ></div>
            </div>
            <div className="d-flex social-container">
              <div className="p-2 pt0">
                <a href={linkedinLink}>
                  <FaLinkedin />
                </a>
              </div>
              <div
                className="d-none d-lg-block d-xl-block"
                dangerouslySetInnerHTML={createMarkup(linkedinText)}
              ></div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex d-lg-block justify-content-center justify-content-lg-left pt-3 pt-lg-0 ">
            {link.map((linkDetail, index) => {
              return (
                <div key={index} className="footer-menu px-3 px-lg-0 pb-lg-3">
                  <h5>
                    <a href={linkDetail.redirect}>{linkDetail.name}</a>
                  </h5>
                  <span className="d-none d-lg-block d-xl-block">
                    {linkDetail.detail}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="copyright">
        <div dangerouslySetInnerHTML={createMarkup(copyrightText)}></div>
      </div>
    </footer>
  )
}

export default Footer
