/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `${process.env.GATSBY_STRAPI_URL}`,
        contentTypes: [
          'album',
          'photo',
          'location'
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: false,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}