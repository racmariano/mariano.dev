module.exports = {
  siteMetadata: {
    title: `Rachelle Mariano`,
    description: `A smol place to share my projects and info. `,
    author: `@racmariano`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rachelle Mariano's website`,
        short_name: `Rachelle personal`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/woman-scientist.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
