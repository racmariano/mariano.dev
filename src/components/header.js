import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"

const Head = styled.header`
  background: ${props => props.theme.divisors.color};
  width: 100%;
  height: ${props => props.theme.divisors.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props => props.theme.divisors.border};
`

const HeaderLink = styled(Link)`
  background-image: None;
  color: ${props => props.theme.divisors.text};
  display: inline-block;
  float: right;
  margin-right: 2rem;
  padding: ${rhythm(1)};
  font-size: 2rem;
  text-shadow: none;
  :hover {
    color: black;
  }
`

const HeaderText = styled.div`
  color: ${props => props.theme.divisors.text};
  font-size: 3rem;
  padding: ${rhythm(1)};
`

const Header = () => {
  const coolThings = [
    "the epigenome! 🧬",
    "kittens! 🐱",
    "learning! 📚",
    "puppies! 🐶",
    "science! 🔬",
    "the moon kingdom! 🌙",
  ]

  return (
    <Head>
      <HeaderText>
        for {coolThings[Math.floor(Math.random() * coolThings.length)]}
      </HeaderText>
      <div>
        <HeaderLink to="/about/">about</HeaderLink>
        <HeaderLink to="/portfolio/">portfolio</HeaderLink>
        <HeaderLink to="/resume/">resume</HeaderLink>
      </div>
    </Head>
  )
}

export default Header
