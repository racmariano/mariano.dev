import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-plugin-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://gatsby.dev/gatsby-plugin-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      gatsbyImageData(width: 64, layout: FIXED)
    }
  }
`

export const fixedPhoto = graphql`
  fragment fixedPhoto on File {
    childImageSharp {
      gatsbyImageData(width: 500, height: 500, layout: FIXED)
    }
  }
`

export const fluidPhoto = graphql`
  fragment fluidPhoto on File {
    childImageSharp {
      gatsbyImageData(placeholder: BLURRED, transformOptions: { fit: INSIDE })
    }
  }
`
