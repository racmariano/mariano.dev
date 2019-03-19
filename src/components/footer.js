import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"

import fixedImage from "./image"

const footerImageQuery = graphql`
  query {
    email: file(relativePath: { eq: "email.png" }) {
      ...fixedImage
    }
    github: file(relativePath: { eq: "github.png" }) {
      ...fixedImage
    }
    linkedin: file(relativePath: { eq: "linkedin.png" }) {
      ...fixedImage
    }
  }
`

const ImageLink = styled.a`
  padding: 1rem;
`

const FooterImages = () => {
  const data = useStaticQuery(footerImageQuery)
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
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
  background: ${props => props.theme.colors.divisors};
  width: 100%;
  height: 100px;
`

const Footer = props => (
  <Foot>
    <FooterImages />
  </Foot>
)

export default Footer
