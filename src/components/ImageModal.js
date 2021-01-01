import React from "react"
import Modal from "react-modal"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

// TODO: Modal needs to be anchored to root.
// Modal.setAppElement("#root")

const ImageModal = withTheme((props) => {
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

  return (
    <Modal
      style={modalStyles}
      isOpen={props.modalVisible}
      onRequestClose={() => props.toggleModal(false)}
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
          onClick={() => props.toggleModal(false)}
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
          fixed={props.selectedImage.childImageSharp.fixed}
        />
        <div>{props.selectedText}</div>
      </div>
    </Modal>
  )
})

export default ImageModal
