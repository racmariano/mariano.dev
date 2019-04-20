import React from "react"
import { css } from "@emotion/core"

import Description from "../components/Description"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <div
      css={css`
        padding: 20px;
      `}
    >
      <h1>📰 News</h1>
      <Description>
        <p>04/20/19: The first version of the site is going live! Whoot!</p>
      </Description>
    </div>
  </Layout>
)

export default IndexPage
