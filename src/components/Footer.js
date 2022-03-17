import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const ImageLink = styled.a`
  padding: 20px;
  color: ${(props) => props.theme.divisors.text};
  font-size: 48px;
}
`

const FooterImages = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        padding-right: 20px;
      `}
    >
      <ImageLink href="mailto:rachelle.mariano@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </ImageLink>
      <ImageLink href="https://www.linkedin.com/in/racmariano/">
        <FontAwesomeIcon icon={faLinkedin} />
      </ImageLink>
      <ImageLink href="https://github.com/racmariano">
        <FontAwesomeIcon icon={faGithubAlt} />
      </ImageLink>
    </div>
  )
}

const Foot = styled.footer`
  background: ${(props) => props.theme.divisors.color};
  height: ${(props) => props.theme.divisors.footerHeight};
  border-top: ${(props) => props.theme.divisors.border};
`

const Footer = (props) => (
  <Foot>
    <FooterImages />
  </Foot>
)

export default Footer
