import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { rhythm } from "../utils/typography"

const Head = styled.div`
  height: ${props => props.theme.divisors.headerHeight};
  background: ${props => props.theme.divisors.color};
  border-bottom: ${props => props.theme.divisors.border};
`

const HeadContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLink = styled(Link)`
  background-image: None;
  color: ${props => props.theme.divisors.text};
  display: inline-block;
  float: right;
  padding: ${rhythm(2)};
  font-size: 2rem;
  text-shadow: none;
  :hover {
    color: black;
  }
`

const HeaderText = styled.h1`
  color: ${props => props.theme.divisors.text};
  font-size: 3rem;
  padding: ${rhythm(1)};
  height: 100%;
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
      <HeadContent>
        <HeaderText>
          for {coolThings[Math.floor(Math.random() * coolThings.length)]}
        </HeaderText>
        <div>
          <HeaderLink to="/about/">about</HeaderLink>
          <HeaderLink to="/portfolio/">portfolio</HeaderLink>
          <HeaderLink to="/resume/">resume</HeaderLink>
        </div>
      </HeadContent>
    </Head>
  )
}

export default Header
