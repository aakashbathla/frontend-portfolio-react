import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
const StyledHero = ({ img, className, children }) => {
  return (
    <BackgroundImage fluid={img} className={className}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  height: 100vh;
  width: 100%;
  background-position: center;
  background: linear-gradient(rgba(33, 32, 71, 0.7), rgba(0, 0, 0, 0.7));
  background-size: cover;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  opacity: 1 !important;
  background-position: center;
  overflow: hidden;
`
