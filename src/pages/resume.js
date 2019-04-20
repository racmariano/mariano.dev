import React from "react"
import Collapsible from "react-collapsible"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import klaviyo from "../images/resume_page/klaviyo_logo.png"
import harvard from "../images/resume_page/harvard_logo.png"
import miami from "../images/resume_page/umiami_logo.png"

import { rhythm } from "../utils/typography"

const PublicationList = styled.ul`
  list-style: none;
`

const LogoImg = styled.img`
  width: 300px;
`

const ResumeAccordion = styled.div`
  .Collapsible {
    width: 80%;
  }
  .Collapsible__trigger {
    border: 5px solid ${props => props.theme.divisors.borderColor};
    color: ${props => props.theme.divisors.color};
    font-size: 40px;
    padding: 20px;
    margin-bottom: ${rhythm(1)};
    display: block;
  }
`

const Description = styled.div`
  font-size: ${rhythm(1)};
  line-height: ${rhythm(1.5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
`

const ResumeElement = props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      padding: ${rhythm(1)};
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div>
        <LogoImg src={props.imageSource} alt={props.imageAlt} />
      </div>
      <div
        css={css`
          font-size: ${rhythm(1.4)};
          font-weight: bold;
        `}
      >
        {props.activity}
      </div>
      <div
        css={css`
          font-size: ${rhythm(1)};
          font-weight: bold;
        `}
      >
        {props.timerange}
      </div>
    </div>

    <div>{props.description}</div>
  </div>
)

const ResumePage = () => (
  <Layout>
    <div
      css={css`
        margin: 20px;
      `}
    >
      <h1>👩‍🎓 Resume</h1>
      <Description>
        <p>
          <a href="">Download a streamlined PDF version of my resume here!</a>
        </p>
      </Description>
      <ResumeAccordion>
        <Collapsible trigger={<h1>Software Engineer</h1>} open={true}>
          <ResumeElement
            imageSource={klaviyo}
            imageAlt="My first job as a software engineer has been at Klaviyo."
            activity="Software Engineer"
            timerange="10/2017 - Present"
            description={
              <Description>
                <p>
                  Since joining Klaviyo, I've worked on the integrations and
                  data augmentation teams.
                </p>
                <p>
                  The integrations team was responsible for processing data from
                  external platforms. I contributed to diverse features,
                  including:
                </p>
                <PublicationList>
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
                </PublicationList>
                <p>
                  Integrations split in January 2019, and I joined the data
                  augmentation team. We are responsible for higher level
                  functions of integration data, such as serving dynamic coupon
                  codes and location-based product recommendations.
                </p>
                <p>
                  We have been building a Python3 microservice deployed via
                  Kubernetes for storing and manipulating catalog data. It uses
                  gRPC to talk to our monolith and handles over 1 billion
                  requests each week. We built it to create an intuitive API for
                  downstream teams and to leverage location-based
                  functionalities using Postgres and PostGIS.
                </p>
              </Description>
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
              <Description>
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
                  In Jessica Whited's lab, we used{" "}
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
              </Description>
            }
          />
          <ResumeElement
            imageSource={miami}
            imageAlt="I pursued a dual major in Biochemistry and Computer Science at the University of Miami."
            activity="Undergraduate Student"
            timerange="08/2011 - 05/2015"
            description={
              <Description>
                <p>
                  I completed my Biochemistry-Computer Science dual
                  undergraduate degree at the University of Miami. I also
                  minored in chemistry, French, and mathematics.
                </p>
                <p>
                  At UM, I served on the executive board of the Anime Club. We
                  raised money for Miami Children's Hospital by hosting
                  ExtraLife events each fall. Each spring, we hosted Miami
                  Hurricon, a free anime convention that drew thousands of
                  attendees.
                </p>
                <p>
                  I also played on the women's ultimate frisbee team in my
                  senior year. 🏃‍♀️
                </p>
              </Description>
            }
          />
        </Collapsible>
        <Collapsible trigger={<h1>Research and Publications</h1>}>
          <ResumeElement
            activity="Axolotl Limb Regeneration"
            timerange="09/2015 - 05/2017"
            description={
              <Description>
                <p>
                  I conducted research under Dr. Jessica Whited for my Master's
                  degree. This resulted in a publication about:
                </p>
                <PublicationList>
                  <li>
                    <a href="https://www.nature.com/articles/s41467-018-07604-0">
                      Axolotl limb regeneration
                    </a>
                  </li>
                </PublicationList>
                <p>
                  Understanding how axolotl salamanders regenerate their limbs
                  may lead to insights into pain management and (maybe one day
                  in the far future) regeneration for human amputees.
                </p>
                <p>
                  I used shell scripts and R packages (
                  <a href="https://satijalab.org/seurat/">Seurat</a>) to analyze
                  high throughput sequencing data from regenerating and control
                  axolotl limbs.
                </p>
              </Description>
            }
          />
          <ResumeElement
            activity="Virus-Host Interactions"
            timerange="05/2014 - 05/2015"
            description={
              <Description>
                <p>
                  I conducted computational research under Dr. Stefan Wuchty
                  during my senior undergraduate year. This resulted in 3
                  publications about:
                </p>
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
                  Understanding how viruses target bacterial hosts may help us
                  develop new therapies for bacteria-borne diseases.
                </p>
                <p>
                  I used Python scripts to investigate how viruses interact with
                  their hosts using graph models.
                </p>
              </Description>
            }
          />
          <ResumeElement
            activity="Dog Genomics"
            timerange="06/2014 - 09/2014"
            description={
              <Description>
                <p>
                  I participated in the{" "}
                  <a href="https://molbio.princeton.edu/undergraduate/research/surp">
                    Princeton Molecular and Quantitative Biology Summer
                    Undergraduate Research Program
                  </a>
                  and conducted research under Dr. Bridgett vonHoldt. This
                  resulted in a publication about:
                </p>
                <PublicationList>
                  <li>
                    <a href="https://www.sciencedirect.com/science/article/pii/S2452014416300310">
                      Viral DNA elements in the dog genome
                    </a>
                  </li>
                </PublicationList>
                <p>
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
              </Description>
            }
          />
        </Collapsible>
      </ResumeAccordion>
    </div>
  </Layout>
)

export default ResumePage
