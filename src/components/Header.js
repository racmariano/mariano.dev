import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import { rhythm } from "../utils/typography"

const Head = styled.div`
  height: ${props => props.theme.divisors.headerHeight};
  background: ${props => props.theme.divisors.color};
  border-bottom: ${props => props.theme.divisors.border};
`

const ExpandedHeadContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderText = styled.h1`
  color: ${props => props.theme.divisors.text};
  font-size: ${rhythm(1.5)};
  padding: 10px;
`

const HeaderLink = styled(Link)`
  color: ${props => props.theme.divisors.text};
  padding: ${rhythm(1.5)};
  font-size: ${rhythm(1)};
  }
`

const HeaderLinks = withTheme(({ theme }) => (
  <div
    css={css`
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: ${theme.isMobile ? "column" : "row"};
      justify-content: center;
    `}
  >
    <HeaderLink to="/">home</HeaderLink>
    <HeaderLink to="/resume/">resume</HeaderLink>
    <HeaderLink to="/portfolio/">portfolio</HeaderLink>
    <HeaderLink to="/about/">about</HeaderLink>
  </div>
))

const ExpandedHeader = React.memo(() => {
  const coolThings = [
    "the epigenome! 🧬",
    "kittens! 🐱",
    "learning! 📚",
    "puppies! 🐶",
    "science! 🔬",
    "the moon kingdom! 🌙",
  ]

  return (
    <ExpandedHeadContent>
      <HeaderText>
        for{" "}
        <span role="img" aria-label="I like cool things!">
          {coolThings[Math.floor(Math.random() * coolThings.length)]}
        </span>
      </HeaderText>
      <HeaderLinks />
    </ExpandedHeadContent>
  )
})

const HamburgerContainer = styled.div`
  display: flex;
  .bm-burger-button {
    position: relative;
    margin: 30%;
    width: 50px;
    height: 50px;
  }

  .bm-menu {
    padding: 2%;
    height: 100vh;
    border-right: 5px solid white;
    background: ${props => props.theme.divisors.borderColor};
  }

  .bm-burger-bars {
    background: white;
  }

  .bm-burger-bars-hover {
    background: black;
  }
`

const HamburgerHeader = () => (
  <HamburgerContainer>
    <Menu
      width={"40%"}
      customCrossIcon={<FontAwesomeIcon icon={faTimesCircle} color="white" />}
    >
      <HeaderLinks />
    </Menu>
  </HamburgerContainer>
)

const Header = withTheme(({ theme }) => (
  <Head>{theme.isMobile ? <HamburgerHeader /> : <ExpandedHeader />}</Head>
))

export default Header