/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vde8z9r4adms`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "dQm62820wuPe-cXFpNBu491Q3VvywB0F-O9LMtRWJ8o",
      },
    },
  ],
}
