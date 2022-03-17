import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { css, withTheme } from "@emotion/react"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"
import AboutMeBlurb from "../content/about.mdx"

const myPhotoQuery = graphql`
  query {
    me: file(relativePath: { eq: "general/me.jpg" }) {
      ...fluidPhoto
    }
  }
`

const WrapBox = withTheme((props) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      flex-wrap: ${props.theme.isMobile ? "wrap" : "nowrap"};
    `}
  >
    {props.children}
  </div>
))

const IndexPage = (props) => {
  const imageQuery = useStaticQuery(myPhotoQuery)

  return (
    <Layout>
      <Metadata title="Home" description="Home page of rmariano.dev" />
      <WrapBox>
        <div
          css={css`
            display: flex;
            width: 100%;
            flex-direction: column;
            margin: 2vw;
          `}
        >
          <AboutMeBlurb />
        </div>
        <div
          css={css`
            width: 100%;
          `}
        >
          <GatsbyImage
            alt="It's-a-me!"
            image={imageQuery["me"].childImageSharp.gatsbyImageData}
          />
        </div>
      </WrapBox>
    </Layout>
  )
}

export default IndexPage
