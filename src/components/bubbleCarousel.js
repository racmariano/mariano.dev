import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css, keyframes } from "@emotion/core"

import fixedPhoto from "./image"

const carouselImageQuery = graphql`
  query {
    glacier: file(relativePath: { eq: "iceland_glacier.jpg" }) {
      ...fixedPhoto
    }
    grass: file(relativePath: { eq: "iceland_grass.jpg" }) {
      ...fixedPhoto
    }
    garden: file(relativePath: { eq: "japan_garden.jpg" }) {
      ...fixedPhoto
    }
    owl: file(relativePath: { eq: "japan_owl.jpg" }) {
      ...fixedPhoto
    }
    yarn: file(relativePath: { eq: "yarn.jpg" }) {
      ...fixedPhoto
    }
    zuly: file(relativePath: { eq: "zuly.jpg" }) {
      ...fixedPhoto
    }
  }
`

const VerticalLine = props => (
  <div
    css={css`
      position: absolute;
      margin-left: 25%;
      border-left: 8px solid gray;
      height: 100%;
      width: 8px;
    `}
  />
)

const Bubble = props => (
  <Img
    fixed={props.fixed}
    css={css`
      grid-row: 1;
      border-radius: 50%;
    `}
  />
)

const scroll = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`

// Animation from https://codepen.io/strongpom/pen/qmooZe
const BubbleColumn = props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      animation: ${scroll} 2s linear infinite;
    `}
  >
    {props.children}
  </div>
)

const Track = props => (
  <div
    css={css`
      position: relative;
      width: 50%;
      height: 100%;
    `}
  >
    <VerticalLine />
    <BubbleColumn>{props.children}</BubbleColumn>
  </div>
)

const BubbleCarousel = () => {
  const data = useStaticQuery(carouselImageQuery)
  return (
    <div
      css={css`
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
      `}
    >
      <Track>
        <Bubble fixed={data.glacier.childImageSharp.fixed} />
        <Bubble fixed={data.grass.childImageSharp.fixed} />
        <Bubble fixed={data.garden.childImageSharp.fixed} />
      </Track>
      <Track>
        <Bubble fixed={data.owl.childImageSharp.fixed} />
        <Bubble fixed={data.yarn.childImageSharp.fixed} />
        <Bubble fixed={data.zuly.childImageSharp.fixed} />
      </Track>
    </div>
  )
}

export default BubbleCarousel
