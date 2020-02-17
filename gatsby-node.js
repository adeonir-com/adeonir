const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Resolve absolute path on import
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  })
}

// Create pages dinamically
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            id
            slug
            categories {
              category: slug
            }
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            featured_media {
              image: source_url
            }
            description: excerpt
            content
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allWordpressPost.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: node.slug,
        },
      })
    })

    const postPerPage = 5
    const numPages = Math.ceil(posts.length / postPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/blog' : `/blog/page/${index + 1}`,
        component: path.resolve('./src/templates/blog.js'),
        context: {
          limit: postPerPage,
          skip: index * postPerPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
