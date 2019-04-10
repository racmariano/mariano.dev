import React from "react"
import Layout from "../components/layout"

import { css } from "@emotion/core"

import technologist from "../images/general/woman_technologist.svg"
import meme from "../images/portfolio_meme.jpg"

const TextPortfolio = props => (
  <div
    css={css`
      width: 50%;
    `}
  >
    <div
      css={css`
        display: flex;
        align-items: flex-end;
      `}
    >
      <img
        src={technologist}
        alt="Portfolio!"
        style={{ width: 64, float: "left" }}
      />
      <h1>Portfolio</h1>
    </div>

    <div
      css={css`
        padding-top: 25px;
        font-style: arial;
        font-size: 20px;
      `}
    >
      <p>
        Klaviyo has been my first job after grad school. It's a ton of fun, and
        I'm grateful for all that I've learned and accomplished! However, it's
        also been extremely consuming to work at such a fast pace. I'm doing my
        best to grow and explore as a developer outside of my job, but it's a
        slow process!
      </p>
      <p>
        <b>Please check back soon for more current work.</b>
      </p>
    </div>
  </div>
)

const PortfolioPage = () => (
  <Layout>
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <TextPortfolio />
      <div>
        <img src={meme} alt="While I love my job, it is consuming." />
      </div>
    </div>
  </Layout>
)

export default PortfolioPage
