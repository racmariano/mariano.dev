import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"

const Head = styled.header`
  background: ${props => props.theme.colors.divisors};
  width: 100%;
  height: 100px;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.link};
  display: inline-block;
  float: right;
  margin-right: 2rem;
  padding: ${rhythm(1)};
  font-size: 2rem;
  text-shadow: none;
`

const Header = () => (
  <Head>
    <h1
      css={css`
        padding: ${rhythm(1)};
        display: inline-block;
      `}
    >
      for science!
    </h1>
    <StyledLink to="/about/">about</StyledLink>
    <StyledLink to="/portfolio/">portfolio</StyledLink>
    <StyledLink to="/resume/">resume</StyledLink>
  </Head>
)

export default Header
