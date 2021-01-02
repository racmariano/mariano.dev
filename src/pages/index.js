import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/Layout"
import AboutMeBlurb from "../content/about.mdx"

const IndexPage = () => (
  <Layout>
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
