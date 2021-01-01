import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

import ImageModal from "./ImageModal"

const carouselImageQuery = graphql`
  query {
    glacier: file(relativePath: { eq: "about_page/iceland_glacier.jpg" }) {
      ...fixedPhoto
    }
    grass: file(relativePath: { eq: "about_page/iceland_grass.jpg" }) {
      ...fixedPhoto
    }
    garden: file(relativePath: { eq: "about_page/japan_garden.jpg" }) {
      ...fixedPhoto
    }
    lyra: file(relativePath: { eq: "about_page/lyra.png" }) {
      ...fixedPhoto
    }
    owl: file(relativePath: { eq: "about_page/japan_owl.jpg" }) {
      ...fixedPhoto
    }
    ski: file(relativePath: { eq: "about_page/ski.jpg" }) {
      ...fixedPhoto
    }
    yarn: file(relativePath: { eq: "about_page/yarn.jpg" }) {
      ...fixedPhoto
    }
    zuly: file(relativePath: { eq: "about_page/zuly.jpg" }) {
      ...fixedPhoto
    }
  }
`

const Bubble = withTheme((props) => {
  return (
    <div
      onClick={props.onClick}
      css={css`
        position: relative;
        width: 20vw;
        height: 20vw;
        cursor: pointer;
      `}
    >
      <Img
        alt={props.alt}
        fixed={props.imgData.childImageSharp.fixed}
        css={css`
          border-radius: 50%;
          max-height: 100%;
          max-width: 100%;
        `}
      />
    </div>
  )
})

const BubbleGrid = withTheme((props) => {
  const imageQuery = useStaticQuery(carouselImageQuery)
  const textDescriptions = {
    garden:
      "Beautiful gardens in Kanazawa, Japan! I really love Japanese culture. I hope to live there for 6 months to a year at some point!",
    glacier:
      "Daniel (the bae) and I climbing glaciers in Iceland! We're always trying to go on new adventures and see the world.",
    grass:
      "Walking through a sea of grass. Hiking with friends is one of my favorite ways to bask in natural splendors!",
    lyra:
      "I started circus arts around 3 years ago and try to do them a few times a month. When I first started, I wasn't strong enough to pull myself into the hoop, so it's been a really satisfying journey.",
    owl: "Owl cafe in Tokyo, Japan! Cute things and smol animals are the best!",
    ski:
      "SEND IT! Viewing beautiful, wintery landscapes, gliding through trees, and hanging out with friends makes skiing so cool.",
    yarn:
      "I like to crochet while commuting (to work or skiing). I will probably try making you a hat or scarf.",
    zuly:
      "This is Zuly, my cat! She's a handful. She likes sniffing around the apartment building, playing with string, and sitting on my lap.",
  }

  // Hooks!
  const [modalVisible, toggleModal] = useState(false)
  const [selectedImage, selectImage] = useState(imageQuery.glacier)
  const [selectedText, selectText] = useState("Hello, world!")

  const createBubbles = () => {
    var bubbles = []
    for (const [imageKey, imageData] of Object.entries(imageQuery)) {
      bubbles.push(
        <Bubble
          key={imageKey}
          onClick={() => {
            toggleModal(true)
            selectImage(imageData)
            selectText(textDescriptions[imageKey])
          }}
          imgData={imageData}
          alt={textDescriptions[imageKey]}
        />
      )
    }
    return bubbles
  }

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
      `}
    >
      <ImageModal
        selectedImage={selectedImage}
        selectedText={selectedText}
        modalVisible={modalVisible}
        toggleModal={toggleModal}
      />
      {createBubbles()}
    </div>
  )
})

export default BubbleCarousel
