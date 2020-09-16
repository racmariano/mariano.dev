import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

import Layout from "../components/Layout"

const PortfolioProject = ({
  tech,
  title,
  timerange,
  codeLink,
  hostedLink,
  description,
}) => (
  <div
    css={css`
      margin: 2vh;
      padding-bottom: 2vh;
      padding-top: 2vh;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          width: 30%;
        `}
      >
        {tech}
        <h1
          css={css`
            font-size: 30px;
            padding-left: 2vh;
          `}
        >
          <a href={hostedLink}>{title}</a>
        </h1>
      </div>
      <div
        css={css`
          width: 20%;
        `}
      >
        {timerange}
      </div>
      <div>
        <a href={codeLink}>See the code here!</a>
      </div>
    </div>
    <div>{description}</div>
  </div>
)

const TextPortfolio = props => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <p>I mostly spend my time outside work... outside. :( </p>
    <PortfolioProject
      tech={<FontAwesomeIcon icon={faReact} />}
      title="This website"
      timerange="03/2019 - 05/2019"
      codeLink="https://github.com/racmariano/mariano.dev"
      hostedLink="https://www.mariano.dev"
      description={
        <p>
          This website uses{" "}  <a href="https://www.gatsbyjs.org/">Gatsby</a> as a framework and{" "}
          <a href="https://emotion.sh/docs/introduction">emotion</a> for styling... heck, why am I not using styled-components? D:
        </p>
      }
    />
  </div>
)

const PortfolioWrapper = withTheme(props => (
  <div
    css={css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: ${props.theme.isMobile ? "column" : "row"};
    `}
  >
    {props.children}
  </div>
))

const PortfolioPage = () => (
  <Layout>
    <PortfolioWrapper>
      <TextPortfolio />
    </PortfolioWrapper>
  </Layout>
)

export default PortfolioPage
