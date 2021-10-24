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
      languages: [`en`, `ch`],
      defaultLanguage: `en`,
      // if you are using Helmet, you must include siteUrl, and make sure you add http:https
      siteUrl: `https://carsondb.github.io/animeBoard`,
      // you can pass any i18next options
      // pass following options to allow message content as a key
      i18nextOptions: {
        interpolation: {
          escapeValue: false // not needed for react as it escapes by default
        },
        keySeparator: false,
        nsSeparator: false
      },
      pages: [
        {
          matchPath: '/:lang?/blog/:uid',
          getLanguageFromPath: true,
          excludeLanguages: ['en']
        },
        {
          matchPath: '/preview',
          languages: ['en']
        }
      ]
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
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
