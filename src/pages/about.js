import React from "react"
import Layout from "../components/layout"

import { css } from "@emotion/core"

import hello from "../images/woman-raising-hand.svg"
import BubbleCarousel from "../components/bubbleCarousel"

const BubbleAbout = props => <BubbleCarousel />

const TextAbout = props => (
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
      <img src={hello} alt="Hello!" style={{ width: 64, float: "left" }} />
      <h1 css={css``}>Hi, I'm Rachelle! Nice to meet you!</h1>
    </div>
    <div style={{ paddingTop: 25 }}>
      <p>
        I'm a back-end developer. I currently live and work in the Boston area.
      </p>
      <p>
        I think microservices are cool, Python is a dope language, and that
        there is always so much more to learn!
      </p>
      <p>
        In my free time, I ski, practice circus arts (lyra and silks), crochet,
        and walk my cat.
      </p>
    </div>
  </div>
)

const AboutPage = props => (
  <Layout>
    <div
      css={css`
        display: flex;
      `}
    >
      <TextAbout />
      <BubbleAbout />
    </div>
  </Layout>
)

export default AboutPage
