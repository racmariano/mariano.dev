import React, { Fragment } from "react"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"

const Wrapper = styled.div`
  background: ${props => props.theme.colors.body};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
  padding: 10px;
`

const Body = ({ children }) => (
  <Wrapper>
    <Fragment>{children}</Fragment>
  </Wrapper>
)

export default Body
