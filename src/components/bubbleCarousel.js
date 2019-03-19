import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"

const footerImageQuery = graphql`
  query {
    glacier: file(relativePath: { eq: "iceland_glacier.png" }) {
      ...fixedImage
    }
    grass: file(relativePath: { eq: "iceland_grass.png" }) {
      ...fixedImage
    }
    garden: file(relativePath: { eq: "japan_garden.png" }) {
      ...fixedImage
    }
    owl: file(relativePath: { eq: "japan_owl.png" }) {
      ...fixedImage
    }
  }
`

const VerticalLine = props => (
  <div
    css={css`
      border-left: 8px solid gray;
      height: 100vh;
      width: 8px;
    `}
  />
)

const BubbleCarousel = props => (
  <div
    css={css`
      width: 50%;
      display: flex;
      justify-content: space-evenly;
    `}
  >
    <VerticalLine />
    <VerticalLine />
  </div>
)

export default BubbleCarousel
