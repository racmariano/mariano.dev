import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"
import AboutMeBlurb from "../content/about.mdx"

const IndexPage = () => (
  <Layout>
    <Metadata title="Home" description="Home page of rmariano.dev" />
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          width: 50%;
          flex-direction: column;
        `}
      >
        <AboutMeBlurb />
      </div>
    </div>
  </Layout>
)

export default IndexPage
