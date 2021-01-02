import React, { useState } from "react"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

import Img from "gatsby-image"
import { withTheme } from "emotion-theming"

import ImageModal from "./ImageModal"

const PhotoGrid = withTheme((props) => {
  const [modalVisible, toggleModal] = useState(false)
  const [selectedImage, selectImage] = useState(props.initialImage)
  const [selectedData, selectData] = useState(null)

  const createGrid = (data, imageQuery, makeDataDiv) => {
    return data.map((entry) => {
      const imageData = imageQuery[entry.key]
      const dataDiv = makeDataDiv(entry)

      return (
        <GridListTile
          key={entry.key}
          onClick={() => {
            toggleModal(true)
            selectImage(imageData)
            selectData(dataDiv)
          }}
        >
          <Img
            alt={entry.description}
            fluid={imageData.childImageSharp.fluid}
          />
        </GridListTile>
      )
    })
  }

  return (
    <div>
      <ImageModal
        selectedImage={selectedImage}
        selectedData={selectedData}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
      />
      <GridList cols={3}>
        {createGrid(props.data, props.imageQuery, props.makeDataDiv)}
      </GridList>
    </div>
  )
})

export default PhotoGrid
