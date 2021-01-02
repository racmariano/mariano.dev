import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// Lovingly copied from https://ibaslogic.com/page-metadata-and-404-error-page/
const Metadata = ({ title, description }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const metaTitle = title || data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  return (
    <Helmet>
      <title>{`${metaTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

export default Metadata
