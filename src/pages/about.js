import React from "react"
import Layout from "../components/layout"

import { css } from "@emotion/core"

import hello from "../images/general/woman_raising_hand.svg"
import BubbleCarousel from "../components/BubbleCarousel"

const TextAbout = props => (
  <div
    css={css`
      width: 50%;
      display: flex;
      flex-direction: column;
      padding-left: 2%;
    `}
  >
    <div
      css={css`
        display: flex;
        align-items: flex-end;
      `}
    >
      <img src={hello} alt="Hello!" style={{ width: 64, float: "left" }} />
      <h1>Hi, I'm Rachelle! Nice to meet you!</h1>
    </div>
    <div
      css={css`
        padding-top: 25px;
        font-style: arial;
        font-size: 20px;
      `}
    >
      <p>I'm a back-end developer who currently lives and works in Boston.</p>
      <p>
        Microservices are cool, Python is a dope language, and there's always so
        much more to learn!
      </p>
      <p>
        Growing up, I wanted to be a scientist like my Dad. In college, I
        pursued a dual major in Biochemistry and Computer Science so that I
        could work with data over their entire lifecycle.
      </p>
      <p>
        When I graduated, I jumped into Harvard's Biological and Biomedical
        Science Ph.D. program, where I conducted research on axolotl limb
        regeneration. I felt extremely blessed to be working with such amazing
        peers on such a cool topic. I also felt extremely conflicted, as I liked
        programming more than research and wanted to pursue a career in
        software.
      </p>
      <p>The rest is history. </p>
      <p>
        In my free time, I practice circus arts (lyra and silks), crochet, ski,
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
        height: 100%;
        justify-content: center;
      `}
    >
      <TextAbout />
      <BubbleCarousel />
    </div>
  </Layout>
)

export default AboutPage
