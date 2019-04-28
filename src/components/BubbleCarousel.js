import React, { useState } from "react"
import Modal from "react-modal"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css, keyframes } from "@emotion/core"
import { withTheme } from "emotion-theming"

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
    {top: -120vw; left: 0vw; }
  49%
    {top: 120vw; left: 0vw; }
  50%
    {top: 120vw; left: 25vw; }
  100%
    {top: -120vw; left: 25vw; }
`

const scroll = keyframes`
0%
  {left: -150%;}
100%
  {left: 150%;}
`

const Bubble = withTheme(props => {
  return (
    <div
      onClick={props.onClick}
      css={css`
        position: relative;
        animation: ${props.theme.isMobile ? scroll : loop} 10s linear infinite;
        width: 20vw;
        height: 20vw;
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

const Track = withTheme(props => (
  <div
    css={css`
      width: 100%;
      display: flex;
      flex-direction: ${props.theme.isMobile ? "row" : "column"};
      justify-content: space-evenly;
      padding: 2%;
      overflow: hidden;
    `}
  >
    {props.children}
  </div>
))

const BubbleCarousel = () => {
  const imageQuery = useStaticQuery(carouselImageQuery)
  const textDescriptions = {
    garden:
      "Beautiful gardens in Kanazawa, Japan! I really love Japanese culture. I hope to live there for 6 months to a year at some point!",
    glacier:
      "Daniel and I climbing glaciers in Iceland! We're always trying to go on new adventures.",
    grass: "Walking through a sea of grass. Nature is lit!",
    owl: "Owl cafe in Tokyo, Japan! Cute things are the best!",
    yarn: "I like to crochet while commuting (to work or skiing).",
    zuly:
      "This is Zuly, my cat! She's a handful. She'll meow at the door when we get home to get let out.",
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
        display: flex;
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
