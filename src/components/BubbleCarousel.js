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

const loop = keyframes`
  0%
    {top: -165vw; left: 0vw; }
  49%
    {top: 35vw; left: 0vw; }
  50%
    {top: 35vw; left: 25vw; }
  100%
    {top: -165vw; left: 25vw; }
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

const Track = withTheme(props => (
  <div
    css={css`
      height: 100%;
      overflow: hidden;
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

  const modalStyles = {
    content: {
      display: "flex",
      width: "80vw",
      height: "80vh",
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
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: ${props.theme.isMobile ? "column" : "row"};
            height: 100%;
            width: 100%;
          `}
        >
          <div
            onClick={() => toggleModal(false)}
            css={css`
              font-size: 30px;
              float: left;
            `}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
          <Img
            css={css`
              max-width: 100%;
              max-height: 100%;
              margin: 2vh;
            `}
            fixed={selectedImage.childImageSharp.fixed}
          />
          <div>{selectedText}</div>
        </div>
      </Modal>
      <Track>{createBubbles()}</Track>
    </div>
  )
})

export default BubbleCarousel
