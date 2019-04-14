import React from "react"
import Collapsible from "react-collapsible"
import Layout from "../components/layout"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

import student from "../images/general/woman_student.svg"

import klaviyo from "../images/resume_page/klaviyo_logo.png"
import harvard from "../images/resume_page/harvard_logo.svg"
import miami from "../images/resume_page/umiami_logo.png"

const LogoImg = styled.img`
  height: 100px;
  padding: 2px;
`

const ResumeAccordion = styled.div`
  .icon::after {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
  .Collapsible__trigger {
    border: 5px solid #00d1cd;
    color: #f30067;
    font-size: 40px;
    display: block;
    padding: 20px;
    margin: 20px;
    width: 50%;
  }
  .Collapsible__trigger::after {
    font-family: "Font Awesome 5 Free";
    font-weight: 400;
    content: "\f433";
    float: right;
  }
`
const ResumePage = () => (
  <Layout>
    <div
      css={css`
        display: flex;
        align-items: flex-end;
      `}
    >
      <img src={student} alt="Resume!" style={{ width: 64, float: "left" }} />
      <h1>Resume</h1>
    </div>
    <div>Download a PDF version of my resume!</div>
    <ResumeAccordion>
      <Collapsible trigger="Software Engineer" open={true}>
        <LogoImg
          src={klaviyo}
          alt="My first job as a software engineer has been at Klaviyo."
        />
        <p>10/2017 - Current</p>
        <p>I fight the power.</p>
      </Collapsible>
      <Collapsible trigger="Education">
        <div>
          <LogoImg
            src={harvard}
            alt="I conducted research and earned a Master of Arts in Biology at Harvard."
          />
          <p>09/2015 - 06/2017</p>
          <p>AXOLOTL INTENSIFIES.</p>
        </div>
        <div>
          <LogoImg
            src={miami}
            alt="I pursued a dual major in Biochemistry and Computer Science at the University of Miami."
          />
          <p>08/2011 - 05/2015</p>
          <p>
            I went to club Richter every night. Club Richter being the library.
          </p>
        </div>
      </Collapsible>
      <Collapsible trigger="Research and Publications">
        <div>
          Virus-Host Interactions
          <p>05/2014 - 05/2015</p>
          <p>Do you know what's cool? USING GRAPHS TO STUDY VIRUSES.</p>
        </div>
        <div>
          Dog Genome
          <p>06/2014 - 09/2014</p>
          <p>Dogs are also cool.</p>
        </div>
      </Collapsible>
    </ResumeAccordion>
  </Layout>
)

export default ResumePage
