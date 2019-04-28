import React from "react"
import { css } from "@emotion/core"

import Description from "../components/Description"
import Layout from "../components/Layout"
import BubbleCarousel from "../components/BubbleCarousel"

const TextAbout = props => (
  <div
    css={css`
      width: 50%;
      display: flex;
      flex-direction: column;
    `}
  >
    <Description>
      <p>I'm a software developer who currently lives and works in Boston.</p>
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
    </Description>
  </div>
)

const AboutPage = props => (
  <Layout emoji="🙋‍" headerLyric="I'm young, scrappy, and hungry">
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
