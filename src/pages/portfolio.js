import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import Layout from "../components/Layout"
import PhotoGrid from "../components/PhotoGrid"
import crochetData from "../content/portfolio/crochet.json"

const ProjectRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2vh;
`

const ProjectCell = styled.div`
  width: 20%;
  display: flex;
`

const TechProject = ({
  tech,
  title,
  timerange,
  codeLink,
  hostedLink,
  description,
}) => (
  <ProjectRow>
    <ProjectCell>
      {tech}
      <h3
        css={css`
          padding-left: 2vh;
        `}
      >
        <a href={hostedLink}>{title}</a>
      </h3>
    </ProjectCell>
    <ProjectCell> {timerange}</ProjectCell>
    <ProjectCell>
      <a href={codeLink}>See the code here!</a>
    </ProjectCell>
    <div>{description}</div>
  </ProjectRow>
)

const Portfolio = (props) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <h2>Tech</h2>
    <TechProject
      tech={<FontAwesomeIcon icon={faReact} />}
      title="This website"
      timerange="03/2019 - Present"
      codeLink="https://github.com/racmariano/mariano.dev"
      hostedLink="https://www.mariano.dev"
      description={
        <div>
          This website uses <a href="https://www.gatsbyjs.org/">Gatsby</a> as a
          framework and{" "}
          <a href="https://emotion.sh/docs/introduction">emotion</a> for
          styling.
        </div>
      }
    />
    <h2>Crochet</h2>
    <p>
      I crochet a lot. I will probably end up making you (or your child) a hat.
    </p>
    <PhotoGrid data={crochetData} />
  </div>
)

const PortfolioWrapper = withTheme((props) => (
  <div
    css={css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: ${props.theme.isMobile ? "column" : "row"};
      width: 80%;
    `}
  >
    {props.children}
  </div>
))

const PortfolioPage = () => (
  <Layout>
    <PortfolioWrapper>
      <Portfolio />
    </PortfolioWrapper>
  </Layout>
)

export default PortfolioPage
