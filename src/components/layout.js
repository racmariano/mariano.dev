/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import { css } from "@emotion/core"

import theme from "../../config/theme"
import "./layout.css"

import Header from "./Header"
import Body from "./body"
import Footer from "./Footer"

const Layout = ({ children }) => (
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
      render={data => (
        <div
          id="root"
          css={css`
            display: flex;
            flex-direction: column;
            height: 100vh;
          `}
        >
          <Header />
          <Body>
            <main>{children}</main>
          </Body>
          <Footer />
        </div>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
