import React, { useState } from "react"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { withTheme } from "emotion-theming"

import ImageModal from "./ImageModal"

// Woof, we can't do string interpolation (and hence dynamic queries) via Gatsby.
// That means each project will have to have the JSON and this updated, which is not the
// best.
const bubbleGridQuery = graphql`
  query {
    bunny_baby: file(relativePath: { eq: "crochet_portfolio/bunny_baby.jpg" }) {
      ...fixedPhoto
    }
    eevee: file(relativePath: { eq: "crochet_portfolio/eevee.jpg" }) {
      ...fixedPhoto
    }
    shera: file(relativePath: { eq: "crochet_portfolio/shera.jpg" }) {
      ...fixedPhoto
    }
    tardis: file(relativePath: { eq: "crochet_portfolio/tardis.jpg" }) {
      ...fixedPhoto
    }
    vaporeon: file(relativePath: { eq: "crochet_portfolio/vaporeon.jpg" }) {
      ...fixedPhoto
    }
  }
`

const PhotoGrid = withTheme((props) => {
  const imageQuery = useStaticQuery(bubbleGridQuery)
  const [modalVisible, toggleModal] = useState(false)
  const [selectedImage, selectImage] = useState(imageQuery.shera)
  const [selectedText, selectText] = useState("For the honor of Grayskull!")

  const createGrid = (data) => {
    return data.map((entry) => {
      const imageData = imageQuery[entry.key]
      return (
        <GridListTile
          key={entry.key}
          onClick={() => {
            toggleModal(true)
            selectImage(imageData)
            selectText(entry.description)
          }}
        >
          <Img
            alt={entry.description}
            fixed={imageData.childImageSharp.fixed}
          />
        </GridListTile>
      )
    })
  }

  return (
    <div>
      <ImageModal
        selectedImage={selectedImage}
        selectedText={selectedText}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
      />
      <GridList cols={3}>{createGrid(props.data)}</GridList>
    </div>
  )
})

export default PhotoGrid
