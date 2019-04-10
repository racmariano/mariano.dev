import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

const footerImageQuery = graphql`
  query {
    email: file(relativePath: { eq: "general/email.png" }) {
      ...fixedImage
    }
    github: file(relativePath: { eq: "general/github.png" }) {
      ...fixedImage
    }
    linkedin: file(relativePath: { eq: "general/linkedin.png" }) {
      ...fixedImage
    }
  }
`
const ImageLink = styled.a`
  padding: 1rem;
  background-image: None;
`

const FooterImages = () => {
  const data = useStaticQuery(footerImageQuery)
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 95%;
      `}
    >
      <ImageLink href="mailto:rachelle.mariano@gmail.com">
        <Img fixed={data.email.childImageSharp.fixed} />
      </ImageLink>
      <ImageLink href="https://www.linkedin.com/in/racmariano/">
        <Img fixed={data.linkedin.childImageSharp.fixed} />
      </ImageLink>
      <ImageLink href="https://github.com/racmariano">
        <Img fixed={data.github.childImageSharp.fixed} />
      </ImageLink>
    </div>
  )
}

const Foot = styled.footer`
  background: ${props => props.theme.divisors.color};
  width: 100%;
  height: ${props => props.theme.divisors.footerHeight};
  border-top: ${props => props.theme.divisors.border};
`

const Footer = props => (
  <Foot>
    <FooterImages />
  </Foot>
)

export default Footer
