require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  siteMetadata: {
    title: 'Adeonir Kohl',
    position: 'Frontend Developer | UI Designer',
    author: '@adeonir',
    description:
      'Desenvolvedor da Joyjet Digital Space Agency, escrevo sobre front-end, vida pessoal e outras coisas mais.',
    siteUrl: 'https://adeonir.com',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/uploads`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        excludedRoutes: [
          '**/users/**',
          '**/jetpack/**',
          '**/wpcom/**',
          '**/settings*',
          '**/themes*',
        ],
        baseUrl: 'localhost:8080',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://localhost:8080',
          replacementUrl: '',
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-algolia-search',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adeonir Kohl',
        short_name: 'Adeonir Kohl',
        start_url: '/',
        background_color: '#252a41',
        theme_color: '#252a41',
        display: 'minimal-ui',
        icon: 'src/images/adeonir-icon.png',
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
  ],
}
