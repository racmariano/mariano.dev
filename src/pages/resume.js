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
import klaviyo from "../images/resume_page/klaviyo_logo.png"
import harvard from "../images/resume_page/harvard_logo.png"
import miami from "../images/resume_page/umiami_logo.png"

// TODO: reconcile scrollIntoView (or equivalent) with Collapsible
// or use another component to provide scrolling on section click.

const PublicationList = props => (
  <div>
    <b>Publications: </b>
    <ul
      css={css`
        list-style: none;
      `}
    >
      {props.children}
    </ul>
  </div>
)

const ResumeAccordion = styled.div`
  .Collapsible__trigger {
    border: 5px solid ${props => props.theme.divisors.borderColor};
    color: ${props => props.theme.divisors.color};
    padding: 2vh;
    margin: 1vh;
    display: block;
    cursor: pointer;
  }
`

const ResumeDivisor = styled.div`
  border-bottom: 3px solid ${props => props.theme.divisors.borderColor};
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
        margin: 2vh;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: ${theme.isMobile ? "column" : "row"};
          margin: 2vh;
        `}
      >
        <img src={imageSource} alt={imageAlt} width="300px" />
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

      <div>{description}</div>
    </div>
  )
)

const ResumePage = props => {
  return (
    <Layout headerLyric="Look at where you are, look at where you started">
      <div
        css={css`
          display: flex;
          width: 100%;
          margin: 2vh;
          justify-content: center;
        `}
      >
        <h3>
          <a
            href={withPrefix("/rachelle_mariano_resume_2019.pdf")}
            target="blank"
          >
            <FontAwesomeIcon icon={faFilePdf} /> View a streamlined, PDF version
            of my resume here!{" "}
          </a>
        </h3>
      </div>
      <ResumeAccordion>
        <Collapsible trigger={<h1>Software Engineer</h1>} open={true}>
          <ResumeElement
            imageSource={klaviyo}
            imageAlt="My first job as a software engineer has been at Klaviyo."
            activity="Software Engineer"
            timerange="10/2017 - Present"
            description={
              <div>
                <p>
                  <a href="https://www.klaviyo.com/">Klaviyo</a> is an ecommerce
                  marketing and analytics startup that uses Django. Our web app
                  empowers online businesses by helping them nurture customer
                  relationships via tools such as powerful segmentation and
                  dynamic automated messaging.
                </p>
                <EmphasizedText>
                  Software Developer, Integrations:
                </EmphasizedText>
                <p>
                  I was responsible for creating and improving data ingestion
                  pipelines for several external platforms. I contributed to
                  diverse features, including:
                </p>
                <ul
                  css={css`
                    list-style: none;
                  `}
                >
                  <li>
                    <a href="https://help.klaviyo.com/hc/en-us/articles/115000107112-Integrate-with-Typeform">
                      Typeform Integration
                    </a>
                  </li>
                  <li>
                    <a href="https://www.klaviyo.com/blog/capture-customer-back-stock-flows">
                      Back In Stock
                    </a>
                  </li>
                  <li>
                    <a href="https://www.klaviyo.com/blog/faster-integration-for-bigcommerce-merchants">
                      BigCommerce Webhooks
                    </a>
                  </li>
                  <li>
                    <a href="https://www.klaviyo.com/blog/improve-your-email-targeting-with-custom-object-data-netsuite-integration">
                      Custom Objects
                    </a>
                  </li>
                </ul>
                <EmphasizedText>
                  Software Engineer, Data Augmentation:
                </EmphasizedText>
                <p>
                  In October 2018, I chose to join a small team in charge of
                  developing Klaviyo's first microservice cut from our monolith.
                  We have been building a Python3 microservice deployed via
                  Kubernetes for storing and manipulating all customer catalog
                  data, such as products, their categories, and product-related
                  subscriptions. We have ported our infrastructure into a
                  boilerplate that several teams are now using to build their
                  own microservices.
                </p>
                <p>
                  Our service communicates with our monolith via gRPC and
                  handles over 1 billion requests each week. We built it to
                  create an intuitive interface for downstream teams and to
                  leverage the geographic capabilities of PostGIS for product
                  locations.
                </p>
                <p>
                  In addition, we are responsible for serving single-use coupon
                  codes and location-based product recommendations to downstream
                  email-sending teams, thereby allowing our customers to send
                  more personalized emails.
                </p>
              </div>
            }
          />
        </Collapsible>
        <Collapsible trigger={<h1>Education</h1>}>
          <ResumeElement
            imageSource={harvard}
            imageAlt="I conducted research and earned a Master of Arts in Biology at Harvard."
            activity="Graduate Student"
            timerange="09/2015 - 06/2017"
            description={
              <div>
                <p>
                  <a href="https://www.youtube.com/watch?v=cj0iq-bWnsg">
                    Axolotls
                  </a>{" "}
                  are salamanders that have the amazing ability to fully
                  regenerate their limbs upon injury. With recent technological
                  advances, we can now research how individual cells contribute
                  to regeneration.
                </p>
                <p>
                  In{" "}
                  <a href="https://www.whitedlab.com/">
                    Dr. Jessica Whited's lab
                  </a>
                  , we used{" "}
                  <a href="https://dx.doi.org/10.1016%2Fj.cell.2015.04.044">
                    single cell RNA sequencing
                  </a>{" "}
                  to profile cells from regenerating and intact limbs. I did
                  preliminary analysis of the data from our first two
                  experiments, including transforming the raw gene sequence data
                  into a high-dimensional gene x cell matrix and identifying
                  populations of different cell types using linear algebra
                  techniques.
                </p>
                <p>
                  I also participated in{" "}
                  <a href="https://bsp.hms.harvard.edu/scholastic-partnerships/hms-kids">
                    Harvard Medical School Kindling Interest in Doing Science
                    summer program{" "}
                  </a>
                  and{" "}
                  <a href="https://hprep.wordpress.com/">
                    Health Professions Recruitment & Exposure Program
                  </a>{" "}
                  to teach middle and high school students about science and to
                  prepare them for pursuing STEM tracks in college.
                </p>
              </div>
            }
          />
          <ResumeDivisor />
          <ResumeElement
            imageSource={miami}
            imageAlt="I pursued a dual major in Biochemistry and Computer Science at the University of Miami."
            activity="Undergraduate Student"
            timerange="08/2011 - 05/2015"
            description={
              <div>
                <p>
                  I completed my Biochemistry-Computer Science dual
                  undergraduate degree at the University of Miami. I also
                  minored in chemistry, French, and mathematics.
                </p>
                <p>
                  At UM, I served on the executive board of the Anime Club. Each
                  fall we raised money for Miami Children's Hospital by hosting{" "}
                  <a href="https://www.extra-life.org/">ExtraLife</a>, a 24 hour
                  video game marathon. Each spring we hosted{" "}
                  <a href="https://www.themiamihurricane.com/2013/04/14/hurricons-anime-celebration-transforms-campus/">
                    Miami Hurricon
                  </a>
                  , a free anime convention that drew thousands of attendees.
                </p>
                <p>
                  I also played on the women's ultimate frisbee team in my
                  senior year. 🏃‍♀️
                </p>
              </div>
            }
          />
        </Collapsible>
        <Collapsible trigger={<h1>Research and Publications</h1>}>
          <ResumeElement
            activity="Axolotl Limb Regeneration"
            timerange="09/2015 - 05/2017"
            description={
              <div>
                <PublicationList>
                  <li>
                    <a href="https://www.nature.com/articles/s41467-018-07604-0">
                      Axolotl limb regeneration
                    </a>
                  </li>
                </PublicationList>
                <p>
                  I conducted research under Dr. Jessica Whited for my Master's
                  degree. Understanding how axolotl salamanders regenerate their
                  limbs may lead to insights into pain management and (maybe one
                  day in the far future) regeneration for human amputees.
                </p>
                <p>
                  I used shell scripts and R packages (
                  <a href="https://satijalab.org/seurat/">Seurat</a>) to analyze
                  high throughput sequencing data from regenerating and control
                  axolotl limbs.
                </p>
              </div>
            }
          />
          <ResumeDivisor />
          <ResumeElement
            activity="Virus-Host Interactions"
            timerange="05/2014 - 05/2015"
            description={
              <div>
                <PublicationList>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/pubmed/28319831">
                      A review on on host-virus protein interactions
                    </a>
                  </li>
                  <li>
                    <a href="https://msystems.asm.org/content/1/2/e00030-15">
                      {" "}
                      How human and bacterial viruses interact with their hosts
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4840434/">
                      How viruses targeting Streptococcus pneumoniae interact
                      with their hosts
                    </a>
                  </li>
                </PublicationList>
                <p>
                  I conducted research under Dr. Stefan Wuchty during my senior
                  undergraduate year. Understanding how viruses target bacterial
                  hosts may help us develop new therapies for bacteria-borne
                  diseases.
                </p>
                <p>
                  I used Python scripts to investigate how viruses interact with
                  their hosts using graph models.
                </p>
              </div>
            }
          />
          <ResumeDivisor />
          <ResumeElement
            activity="Dog Genomics"
            timerange="06/2014 - 09/2014"
            description={
              <div>
                <PublicationList>
                  <li>
                    <a href="https://www.sciencedirect.com/science/article/pii/S2452014416300310">
                      Viral DNA elements in the dog genome
                    </a>
                  </li>
                </PublicationList>
                <p>
                  I participated in the{" "}
                  <a href="https://molbio.princeton.edu/undergraduate/research/surp">
                    Princeton Molecular and Quantitative Biology Summer
                    Undergraduate Research Program
                  </a>{" "}
                  and conducted research under Dr. Bridgett vonHoldt.
                  Understanding the genome structure of dogs lets us understand
                  how different breeds have such different traits and disease
                  susceptibility. Viral DNA sequences contribute to genomic
                  differences.
                </p>
                <p>
                  I used shell scripts to identify the coordinates of viral DNA
                  sequences in the dog genome. I then used Python scripts to
                  investigate the proximity of these elements to coding genes,
                  the time since their insertion, and whether or not they were
                  silenced differently in dogs versus wolves.
                </p>
              </div>
            }
          />
        </Collapsible>
      </ResumeAccordion>
    </Layout>
  )
}

export default ResumePage
