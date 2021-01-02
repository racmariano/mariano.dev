import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(width: 64) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const fixedPhoto = graphql`
  fragment fixedPhoto on File {
    childImageSharp {
      fixed(width: 500, height: 500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const fluidPhoto = graphql`
  fragment fluidPhoto on File {
    childImageSharp {
      fluid {
        aspectRatio
        ...GatsbyImageSharpFluid
      }
    }
  }
`
