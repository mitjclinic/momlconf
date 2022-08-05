module.exports = {
  pathPrefix: "/momlconf",
  siteMetadata: {
    title: `MoML Conference 2022`,
    description: `MoML is a new annual research conference organized in the name of Octavian-Eugen Ganea who passed away in May 2022.`,
    author: `@mitjclinic`,
    siteUrl: `https://momlconf.github.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        defaults: {
          placeholder: `tracedSVG`,
        },
      },
    },
    `gatsby-plugin-sharp`,
  ],
}
