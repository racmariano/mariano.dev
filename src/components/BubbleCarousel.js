import React, { useState } from "react"
import Modal from "react-modal"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css, keyframes } from "@emotion/core"

// Modal.setAppElement("#root")

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
    owl: file(relativePath: { eq: "about_page/japan_owl.jpg" }) {
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

const loop = keyframes`
  0%
    {top: -100%; left: 0%; }
  49%
    {top: 60%; left: 0%; }
  50%
    {top: 60%; left: 80%; }
  100%
    {top: -100%; left: 80%; }
`

const Bubble = props => (
  <div
    onClick={props.onClick}
    css={css`
      position: relative;
      display: inline-block;
      animation: ${loop} 40s linear infinite;
      height: 200px;
      width: 200px;
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

const Track = props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: space-between;
      width: 50%;
      height: 200%;
    `}
  >
    {props.children}
  </div>
)

const BubbleCarousel = () => {
  const imageQuery = useStaticQuery(carouselImageQuery)
  const textDescriptions = {
    garden:
      "Beautiful gardens in Kanazawa, Japan! I really love Japanese culture. Weeaboo a.f.",
    glacier:
      "Daniel and I climbing glaciers in Iceland! We're always trying to go on new adventures.",
    grass: "Walking through a sea of grass. Nature is lit!",
    owl: "Owl cafe in Tokyo, Japan! Cute things are the best!",
    yarn:
      "I like to crochet while commuting (to work or skiing), and while watching anime!",
    zuly:
      "This is Zuly, my fur baby and the love of my life! ...not counting Daniel.",
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
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        overflow: hidden;
      `}
    >
      <Modal isOpen={modalVisible} onRequestClose={() => toggleModal(false)}>
        <button onClick={() => toggleModal(false)}>close!</button>
        <div
          css={css`
            display: flex;
            justify-content: space-evenly;
            height: 100%;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <Img fixed={selectedImage.childImageSharp.fixed} />
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            {selectedText}
          </div>
        </div>
      </Modal>
      <Track>{createBubbles()}</Track>
    </div>
  )
}

export default BubbleCarousel
