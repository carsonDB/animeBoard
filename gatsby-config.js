const i18next = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/locales`,
      name: `locale`
    }
  },
  {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
      languages: [`en`, `zh`],
      defaultLanguage: `en`,
      // if you are using Helmet, you must include siteUrl, and make sure you add http:https
      siteUrl: `https://carsondb.github.io/animeBoard`,
      // you can pass any i18next options
      // pass following options to allow message content as a key
      redirect: false,
      i18nextOptions: {
        interpolation: {
          escapeValue: false // not needed for react as it escapes by default
        },
        keySeparator: false,
        nsSeparator: false
      },
      // pages: [
      //   {
      //     matchPath: '/:lang?/tutorial/:uid',
      //     getLanguageFromPath: true,
      //   },
      // ]
    }
  }
]

const googleAnalytics = [
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-XTHGK48KLD", // Google Analytics / GA
      ],
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
  },
]

const markdown = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/markdown-pages`,
    },
  },
  `gatsby-transformer-remark`,
]

module.exports = {
  pathPrefix: "/animeBoard",
  siteMetadata: {
    title: "docs",
    description: "Text based video editor.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    ...i18next,
    ...googleAnalytics,
    ...markdown,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    
  ],
};
