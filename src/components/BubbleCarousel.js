import React, { useState } from "react"
import Modal from "react-modal"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css, keyframes } from "@emotion/core"
import { withTheme } from "emotion-theming"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

// TODO: Modal needs to be anchored to root.
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
    {top: 60vw; left: 0vw; }
  50%
    {top: 60vw; left: 25vw; }
  100%
    {top: -120vw; left: 25vw; }
`

const scroll = keyframes`
0%
  {left: -125%;}
100%
  {left: 125%;}
`

const Bubble = withTheme(props => {
  const animationTime = props.theme.isMobile ? "20s" : "30s"

  return (
    <div
      onClick={props.onClick}
      css={css`
        position: relative;
        animation: ${props.theme.isMobile ? scroll : loop} ${animationTime}
          linear infinite;
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
      margin: 2vh;
      display: flex;
      flex-direction: ${props.theme.isMobile ? "row" : "column"};
    `}
  >
    {props.children}
  </div>
))

const BubbleCarousel = withTheme(props => {
  const imageQuery = useStaticQuery(carouselImageQuery)
  const textDescriptions = {
    garden:
      "Beautiful gardens in Kanazawa, Japan! I really love Japanese culture. I hope to live there for 6 months to a year at some point!",
    glacier:
      "Daniel (the bae) and I climbing glaciers in Iceland! We're always trying to go on new adventures.",
    grass: "Walking through a sea of grass. Nature is really beautiful.",
    owl: "Owl cafe in Tokyo, Japan! Cute things are the best!",
    yarn: "I like to crochet while commuting (to work or skiing).",
    zuly:
      "This is Zuly, my cat! She's a handful. She likes sniffing around the apartment building, playing with string, and sitting on my lap.",
  }

  // Hooks!
  const [modalVisible, toggleModal] = useState(false)
  const [selectedImage, selectImage] = useState(imageQuery.glacier)
  const [selectedText, selectText] = useState("Hello, world!")

  const modalStyles = {
    content: {
      display: "flex",
      width: "80vw",
      height: props.theme.isMobile ? "80vh" : "auto",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  }

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
      <Modal
        style={modalStyles}
        isOpen={modalVisible}
        onRequestClose={() => toggleModal(false)}
      >
        <div
          onClick={() => toggleModal(false)}
          css={css`
            font-size: 30px;
          `}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: ${props.theme.isMobile ? "column" : "row"};
            height: 100%;
          `}
        >
          <Img
            css={css`
              max-width: 100%;
              max-height: 100%;
              margin: 2vh;
            `}
            fixed={selectedImage.childImageSharp.fixed}
          />
          <div
            css={css`
              width: 50%;
            `}
          >
            {selectedText}
          </div>
        </div>
      </Modal>
      <Track>{createBubbles()}</Track>
    </div>
  )
})

export default BubbleCarousel
