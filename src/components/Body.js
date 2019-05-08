import React, { Fragment } from "react"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  background: ${props => props.theme.colors.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 2%;
  height: 100%;
`

const Body = props => (
  <Wrapper>
    <Fragment>{props.children}</Fragment>
  </Wrapper>
)

export default Body
