import React from "react"
import { withPrefix } from "gatsby"
import Collapsible from "react-collapsible"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { withTheme } from "emotion-theming"
import { rhythm } from "../utils/typography"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/Layout"
import tpci from "../images/resume_page/tpci_logo.svg"
import klaviyo from "../images/resume_page/klaviyo_logo.svg"
import harvard from "../images/resume_page/harvard_logo.png"
import miami from "../images/resume_page/umiami_logo.png"

// TODO: Use graphql to read in the files and automagically populate each section.
import KlaviyoCV from "../content/cv/klaviyo.mdx"
import PokemonCV from "../content/cv/pokemon.mdx"
import HarvardCV from "../content/edu/harvard.mdx"
import UMCV from "../content/edu/um.mdx"
import WhitedPubs from "../content/pubs/whited.mdx"
import WuchtyPubs from "../content/pubs/wuchty.mdx"
import VonHoldtPubs from "../content/pubs/vonholdt.mdx"

// TODO: reconcile scrollIntoView (or equivalent) with Collapsible
// or use another component to provide scrolling on section click.

const ResumeAccordion = styled.div`
  width: 80%;
  .Collapsible__trigger {
    border-bottom: 3px solid ${(props) => props.theme.divisors.borderColor};
    color: ${(props) => props.theme.divisors.color};
    padding-bottom: 1vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    display: block;
    cursor: pointer;
  }
`

const EmphasizedText = styled.div`
  font-size: ${rhythm(0.8)};
  font-weight: bold;
`

const ResumeElement = withTheme(
  ({ theme, imageSource, imageAlt, timerange, activity, description }) => (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 1vh;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: ${theme.isMobile ? "column" : "row"};
        `}
      >
        <img
          css={css`
            max-width: 200px;
          `}
          src={imageSource}
          alt={imageAlt}
        />
        <div
          css={css`
            font-size: ${rhythm(1.0)};
            font-weight: bold;
          `}
        >
          {activity}
        </div>
        <EmphasizedText>{timerange}</EmphasizedText>
      </div>
      <div
        css={css`
          padding-top: 2vh;
        `}
      >
        {description}
      </div>
    </div>
  )
)

const ResumePage = (props) => {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <h3>
          <a
            href={withPrefix("/rachelle_mariano_resume_2019.pdf")}
            target="blank"
          >
            <FontAwesomeIcon icon={faFilePdf} /> View a streamlined, PDF version
            of my resume here!
          </a>
        </h3>
      </div>
      <ResumeAccordion>
        <Collapsible trigger={<h1>Software Engineer</h1>} open={true}>
          <ResumeElement
            imageSource={tpci}
            imageAlt="I now work at The Pokémon Company International."
            activity="Software Engineer II"
            timerange="09/2019 - present"
            description={<PokemonCV />}
          />
          <ResumeElement
            imageSource={klaviyo}
            imageAlt="My first job as a software engineer was at Klaviyo."
            activity="Software Engineer"
            timerange="10/2017 - 07/2019"
            description={<KlaviyoCV />}
          />
        </Collapsible>
        <Collapsible trigger={<h1>Education</h1>}>
          <ResumeElement
            imageSource={harvard}
            imageAlt="I conducted research and earned a Master of Arts in Biology at Harvard."
            activity="Graduate Student"
            timerange="09/2015 - 06/2017"
            description={<HarvardCV />}
          />
          <ResumeElement
            imageSource={miami}
            imageAlt="I pursued a dual major in Biochemistry and Computer Science at the University of Miami."
            activity="Undergraduate Student"
            timerange="08/2011 - 05/2015"
            description={<UMCV />}
          />
        </Collapsible>
        <Collapsible trigger={<h1>Research and Publications</h1>}>
          <ResumeElement
            activity="Axolotl Limb Regeneration"
            timerange="09/2015 - 05/2017"
            description={<WhitedPubs />}
          />
          <ResumeElement
            activity="Virus-Host Interactions"
            timerange="05/2014 - 05/2015"
            description={<WuchtyPubs />}
          />
          <ResumeElement
            activity="Dog Genomics"
            timerange="06/2014 - 09/2014"
            description={<VonHoldtPubs />}
          />
        </Collapsible>
      </ResumeAccordion>
    </Layout>
  )
}

export default ResumePage
