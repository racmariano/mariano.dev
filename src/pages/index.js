import React from "react"
import { css } from "@emotion/core"

import Description from "../components/Description"
import Layout from "../components/Layout"

import catFly from "../images/general/cat_fly.gif"
import catType from "../images/general/cat_type.gif"

const IndexEntry = ({ gif, date, newsBit }) => (
  <div
    css={css`
      padding: 1vh;
      display: flex;
      width: 100%;
      justify-content: space-between;
    `}
  >
    <img
      css={css`
        max-width: 200px;
        max-height: 200px;
        height: auto;
      `}
      src={gif}
    />
    <div
      css={css`
        width: 60%;
      `}
    >
      {" "}
      <p>
        <h2>{date}</h2>
      </p>
      <p>{newsBit}</p>
    </div>
  </div>
)

const IndexPage = () => (
  <Layout emoji="📰" headerLyric="Look around, look around">
    <Description>
      <IndexEntry
        gif={catFly}
        date="05/06/19"
        newsBit="I went to PyCon, and it was AWESOME."
      />
      <IndexEntry
        gif={catType}
        date="04/20/19"
        newsBit="The first version of the site is going live! Whoot!"
      />
    </Description>
  </Layout>
)

export default IndexPage
