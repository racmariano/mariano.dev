import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"

import Layout from "../components/Layout"
import Metadata from "../components/Metadata"
import PhotoGrid from "../components/PhotoGrid"
import crochetData from "../content/portfolio/crochet.json"

// Woof, we can't do string interpolation (and hence dynamic queries) via Gatsby.
// That means each project will have to have the JSON and this updated, which is not the
// best.
const crochetGridQuery = graphql`
  query {
    ammonite_roll: file(
      relativePath: { eq: "crochet_portfolio/ammonite_roll.jpg" }
    ) {
      ...fluidPhoto
    }
    bunny_baby: file(relativePath: { eq: "crochet_portfolio/bunny_baby.jpg" }) {
      ...fluidPhoto
    }
    dragon_gloves: file(
      relativePath: { eq: "crochet_portfolio/dragon_gloves.jpg" }
    ) {
      ...fluidPhoto
    }
    eevee: file(relativePath: { eq: "crochet_portfolio/eevee.jpg" }) {
      ...fluidPhoto
    }
    shera: file(relativePath: { eq: "crochet_portfolio/shera.jpg" }) {
      ...fluidPhoto
    }
    tardis: file(relativePath: { eq: "crochet_portfolio/tardis.jpg" }) {
      ...fluidPhoto
    }
    vaporeon: file(relativePath: { eq: "crochet_portfolio/vaporeon.jpg" }) {
      ...fluidPhoto
    }
  }
`

const ProjectRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ProjectCell = styled.div`
  width: 100%;
  margin: 1vw;
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
      <div
        css={css`
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-size: 24px;
        `}
      >
        {tech}
        <h3>
          <a href={hostedLink}>{title}</a>
        </h3>
      </div>
    </ProjectCell>
    <ProjectCell> {timerange}</ProjectCell>
    <ProjectCell>
      <a href={codeLink}>See the code here!</a>
    </ProjectCell>
    <ProjectCell>{description}</ProjectCell>
  </ProjectRow>
)

const Portfolio = () => {
  const imageQuery = useStaticQuery(crochetGridQuery)

  const makeDataDiv = (data) => (
    <div>
      <p>Finished: {data.finishedDate}</p>
      <p>{data.name}</p>
      <p>
        <a href={data.patternLink}>Pattern Link</a>
      </p>
      <p>{data.description}</p>
    </div>
  )

  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <h2>Tech</h2>
      <p>
        I put my heart and soul into my work projects, so I don't code that much
        in my free time. :)
      </p>
      <TechProject
        tech={<FontAwesomeIcon icon={faReact} />}
        title="This website"
        timerange="03/2019 - Present"
        codeLink="https://github.com/racmariano/mariano.dev"
        hostedLink="https://www.mariano.dev"
        description={
          <div>
            This website uses <a href="https://www.gatsbyjs.org/">Gatsby</a> as
            a framework and{" "}
            <a href="https://emotion.sh/docs/introduction">emotion</a> for
            styling.
          </div>
        }
      />
      <h2>Crochet</h2>
      <p>
        I crochet <i>a lot</i> and make gifts for friends and family. Here are a
        few of my favorite projects!
      </p>
      <PhotoGrid
        data={crochetData}
        imageQuery={imageQuery}
        initialImage={imageQuery.shera}
        makeDataDiv={makeDataDiv}
      />
    </div>
  )
}

const PortfolioWrapper = withTheme((props) => (
  <div
    css={css`
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 80%;
    `}
  >
    {props.children}
  </div>
))

const PortfolioPage = () => (
  <Layout>
    <Metadata
      title="Portfolio"
      description="Rachelle Mariano's personal projects"
    />
    <PortfolioWrapper>
      <Portfolio />
    </PortfolioWrapper>
  </Layout>
)

export default PortfolioPage
