import React, { useState } from "react"
import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"

import Img from "gatsby-image"
import { withTheme } from "@emotion/react"

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
        <ImageListItem
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
        </ImageListItem>
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
      <ImageList cols={3}>
        {createGrid(props.data, props.imageQuery, props.makeDataDiv)}
      </ImageList>
    </div>
  )
})

export default PhotoGrid
