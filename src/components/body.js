import React, { Fragment } from "react"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"

const Wrapper = styled.div`
  background: ${props => props.theme.colors.body};
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`

const Body = ({ children }) => (
  <Wrapper>
    <Fragment>{children}</Fragment>
  </Wrapper>
)

export default Body
