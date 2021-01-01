import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import Layout from "../components/Layout"

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

const CrochetProject = ({
  item,
  thumbnail,
  finishedDate,
  patternLink,
  description,
}) => (
  <ProjectRow>
    <ProjectCell>
      <h3>{item}</h3>
    </ProjectCell>
    <ProjectCell>{finishedDate}</ProjectCell>
    <ProjectCell>
      <a href={patternLink}>Link to pattern</a>
    </ProjectCell>
    <div>{thumbnail}</div>
    <ProjectCell>{description}</ProjectCell>
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
    <CrochetProject
      item="She-Ra Amigurumi"
      finishedDate="09/24/20"
      patternLink="https://www.ravelry.com/patterns/library/eva-doll-2"
      description="This was my first time doing hair and free-handing so many color changes. I LOVE HER."
    />
    <CrochetProject
      item="Vaporeon Hat"
      finishedDate="08/20/20"
      patternLink="https://www.ravelry.com/patterns/library/grateful-dead-dancing-bear-hood"
      description="I made this for a craft exchange. I modified a hooded pattern and free-handed the fins."
    />
    <CrochetProject
      item="Bunny Baby Blanket"
      finishedDate="08/20/20"
      patternLink="https://www.ravelry.com/patterns/library/bunny-lovey-parts--pieces"
      description="I made this for a coworker. I tried doing an invisible decrease and it failed, but it still ended up cute."
    />
    <CrochetProject
      item="Tardis Baby Blanket"
      finishedDate="07/24/20"
      patternLink="https://www.ravelry.com/patterns/library/mini-police-box"
      description="I made this for a coworker. SO MANY COLOR CHANGES. AHHHH."
    />
    <CrochetProject
      item="Eevee Hat"
      finishedDate="05/15/20"
      patternLink="https://www.ravelry.com/patterns/library/toothless-hat"
      description="I modified a beanie pattern. It came out surprisingly cute?!"
    />
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
