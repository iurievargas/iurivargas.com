require(`dotenv`).config()

module.exports = {
  pathPrefix: "/iurivargas",
  siteMetadata: {
    title: `iurivargas`,
    author: {
      name: `Iuri Egevarth Vargas`,
      summary: `Pós-graduando em gestão de pessoas, graduado em sistemas, analista de sistemas, product owner, programador e criador de conteúdos nas horas vagas.`,
    },
    description: `Um misto de blog com portifólio que tem o propósito de compartilhar conteúdos e um pouco da minha carreira.`,
    siteUrl: `https://iurivargas.com`,
    donate: {
      picpay: `https://app.picpay.com/user/iurievargas`,
      mercadopago: `https://mpago.la/1EyhEoo`
    },
    social: {
      twitter: `iurievargas`,
      instagram: `iurievargas`,
      linkedin: `iurivargas`,
      medium: `iuri.evargas`,
      github: `iurievargas`,
      whatsapp: `+5551999025656`,
      gmail: `iuri.evargas@gmail.com`
    },
    defaultImage: "images/bg.jpeg",
    links: [{
        title: "Sobre",
        url: "/sobre"
      }
    ]
  },
  plugins: [{
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `iurivargas`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
            resolve: `gatsby-remark-images`
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-plugin-algolia`,
            options: {
              appId: process.env.GATSBY_ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_ADMIN_KEY,
              queries: require("./src/utils/algolia-queries")
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
          `gatsby-plugin-styled-components`,
          `gatsby-plugin-fontawesome-css`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ANALYTICS_TRACKING_ID
        ],
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `iurievargas`,
        short_name: `iurievargas`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/avatar-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
  ],
}