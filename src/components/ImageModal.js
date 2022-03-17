import React from "react"
import Modal from "react-modal"
import Img from "gatsby-image"
import { css, withTheme } from "@emotion/react"

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
          height: 100%;
          width: 100%;
        `}
      >
        <div
          onClick={() => props.toggleModal(false)}
          css={css`
            font-size: 30px;
          `}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: ${props.theme.isMobile ? "column" : "row"};
            align-items: center;
            height: 100%;
            width: 100%;
          `}
        >
          <div
            css={css`
              width: 50vw;
              height: 100%;
              margin: 1vw;
              overflow: hidden;
            `}
          >
            <Img
              css={css`
                height: 100%;
              `}
              imgStyle={{
                objectFit: "contain",
              }}
              fluid={props.selectedImage.childImageSharp.fluid}
            />
          </div>
          {props.selectedData}
        </div>
      </div>
    </Modal>
  )
})

export default ImageModal
