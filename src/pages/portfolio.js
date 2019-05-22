import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { css } from "@emotion/core"
import { withTheme } from "emotion-theming"

import Layout from "../components/Layout"

import meme from "../images/portfolio_meme.jpg"

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
    <p>
      Klaviyo has been my first job after grad school. It's a ton of fun, and
      I'm grateful for all that I've learned and accomplished! However, it's
      also been extremely consuming to work at such a fast pace. I'm doing my
      best to grow and explore as a developer outside of my job, but it's a slow
      process!
    </p>
    <p>
      <b>Please check back soon for more current work.</b>
    </p>
    <PortfolioProject
      tech={<FontAwesomeIcon icon={faReact} />}
      title="This website"
      timerange="03/2019 - 05/2019"
      codeLink="https://github.com/racmariano/mariano.dev"
      hostedLink="https://www.mariano.dev"
      description={
        <p>
          My first front-end project! It uses{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a> as a framework and{" "}
          <a href="https://emotion.sh/docs/introduction">emotion</a> for
          styling.
        </p>
      }
    />
    <PortfolioProject
      tech={<FontAwesomeIcon icon={faPython} />}
      title="Skidom"
      timerange="06/2017 - 10/2017"
      codeLink="https://github.com/racmariano/skidom/tree/master/backend"
      hostedLink="https://skidom.herokuapp.com/"
      description={
        <p>
          My first Django project! I collaborated on it with my boyfriend. It
          used <a href="https://scrapy.org/">scrapy</a> to get ski resort
          conditions and the{" "}
          <a href="https://developers.google.com/maps/documentation/">
            Google Maps API{" "}
          </a>
          to get driving information. The end result was a table that could be
          sorted on snow or driving time/distance. I've come a long way since
          this! Click on <a href="https://skidom.herokuapp.com/">Skidom</a> to
          see a <strong>kinda-functional-but-not-really</strong> version of it,
          currently hosted on <a href="https://www.heroku.com/">Heroku</a>.
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
  <Layout headerLyric="There's a million things I haven't done, but just you wait">
    <PortfolioWrapper>
      <TextPortfolio />
      <div
        css={css`
          display: flex;
          width: 100%;
          justify-content: center;
          margin-bottom: 2vh;
        `}
      >
        <img src={meme} alt="While I love my job, it is consuming." />
      </div>
    </PortfolioWrapper>
  </Layout>
)

export default PortfolioPage
