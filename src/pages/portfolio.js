import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython, faReact } from "@fortawesome/free-brands-svg-icons"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Description from "../components/Description"
import Layout from "../components/Layout"

import meme from "../images/portfolio_meme.jpg"

const PortfolioContainer = styled.div`
  width: 50%;
  padding: 20px;
`

const PortfolioProject = props => (
  <div
    css={css`
      margin: 20px;
      padding-bottom: 20px;
      padding-top: 20px;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
        `}
      >
        {props.tech}
        <h1
          css={css`
            font-size: 30px;
            padding-left: 20px;
          `}
        >
          {props.title}
        </h1>
      </div>
      <div>{props.date}</div>
      <div>
        <a href={props.codeLink}>See the code here!</a>
      </div>
    </div>
    {props.hostedLink && <a href={props.hostedLink}>See it live here!</a>}
    <Description>{props.description}</Description>
  </div>
)

const TextPortfolio = props => (
  <PortfolioContainer>
    <h1>👩‍💻 Portfolio</h1>
    <Description>
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
      <PortfolioProject
        tech={<FontAwesomeIcon icon={faReact} />}
        title="This website"
        date="03/2019 - 05/2019"
        codeLink="https://github.com/racmariano/mariano.dev"
        description={
          <p>
            My first front-end project! It uses Gatsby as a framework and
            emotion for styling.
          </p>
        }
      />
      <PortfolioProject
        tech={<FontAwesomeIcon icon={faPython} />}
        title="Skidom"
        date="06/2017 - 10/2017"
        codeLink="https://github.com/racmariano/skidom/tree/master/backend"
        hostedLink=""
        description={
          <p>
            My first Django project! I collaborated on it with my boyfriend. It
            used scrapy to get ski resort conditions and the Google Maps API to
            get driving information. The end result was a table that could be
            sorted on snow or driving time/distance.
          </p>
        }
      />
    </Description>
  </PortfolioContainer>
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
      <PortfolioContainer>
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
          `}
        >
          <img src={meme} alt="While I love my job, it is consuming." />
        </div>
      </PortfolioContainer>
    </div>
  </Layout>
)

export default PortfolioPage
