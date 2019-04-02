import React, { useState, useEffect } from "react"
import Modal from "react-modal"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css, keyframes } from "@emotion/core"
import { checkPropTypes } from "prop-types"

// Modal.setAppElement("#root")

const carouselImageQuery = graphql`
  query {
    glacier: file(relativePath: { eq: "iceland_glacier.jpg" }) {
      ...fixedPhoto
    }
    grass: file(relativePath: { eq: "iceland_grass.jpg" }) {
      ...fixedPhoto
    }
    garden: file(relativePath: { eq: "japan_garden.jpg" }) {
      ...fixedPhoto
    }
    owl: file(relativePath: { eq: "japan_owl.jpg" }) {
      ...fixedPhoto
    }
    yarn: file(relativePath: { eq: "yarn.jpg" }) {
      ...fixedPhoto
    }
    zuly: file(relativePath: { eq: "zuly.jpg" }) {
      ...fixedPhoto
    }
  }
`

const loop = keyframes`
  0%
    {top: -100%; left: 0%; }
  49%
    {top: 100%; left: 0%; }
  50%
    {top: 100%; left: 80%; }
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
    `}
  >
    <Img
      alt={props.alt}
      fixed={props.imgData.childImageSharp.fixed}
      css={css`
        border-radius: 50%;
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
  const data = useStaticQuery(carouselImageQuery)

  const [modalVisible, toggleModal] = useState(false)
  const [selectedImage, selectImage] = useState(null)

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
      <Modal
        isOpen={modalVisible}
        onRequestClose={() => toggleModal(false)}
        contentLabel="Freeze Frame!"
      >
        <button onClick={() => toggleModal(false)}>close!</button>
        <div>i am a modal! </div>
      </Modal>

      <Track>
        <Bubble
          onClick={() => toggleModal(true)}
          imgData={data.glacier}
          alt="Daniel and I climbing glaciers in Iceland! We're always trying to go on new adventures."
        />
        <Bubble
          onClick={() => toggleModal(true)}
          imgData={data.grass}
          alt="Walking through a sea of grass. Nature is lit!"
        />
        <Bubble
          onClick={() => toggleModal(true)}
          imgData={data.garden}
          alt="Beautiful gardens in Kanazawa, Japan! I really love Japanese culture."
        />
        <Bubble
          onClick={() => toggleModal(true)}
          imgData={data.owl}
          alt="Owl cafe in Tokyo, Japan! Cute things are the best!"
        />
        <Bubble
          onClick={() => toggleModal(true)}
          imgData={data.yarn}
          alt="I like to crochet while commuting (to work or skiing), and while watching anime!"
        />
        <Bubble
          onClick={() => toggleModal(true)}
          imgData={data.zuly}
          alt="This is Zuly, my fur baby and the love of my life! ...not counting Daniel."
        />
      </Track>
    </div>
  )
}

export default BubbleCarousel
