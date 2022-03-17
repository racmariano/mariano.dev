/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useLayoutEffect, useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css, ThemeProvider } from "@emotion/react"
import { useMedia } from "use-media"

import getTheme from "../../config/theme"
import "./layout.css"

import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

const Layout = (props) => {
  let [isMobile, setIsMobile] = useState(null)
  const theme = getTheme(isMobile)
  const isMobileSize = useMedia({ maxWidth: 1550 })

  useLayoutEffect(() => {
    setIsMobile(isMobileSize)
  }, [isMobileSize])

  return (
    <ThemeProvider theme={theme}>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data) => (
          <div
            id="root"
            css={css`
              display: flex;
              flex-direction: column;
              height: 100vh;
            `}
          >
            <Header />
            <Body>{props.children}</Body>
            <Footer />
          </div>
        )}
      />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
