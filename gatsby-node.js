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

// Add slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    })
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    })
  }
}

// Create pages dinamically
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              background
              category
              description
              title
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
              image
            }
            timeToRead
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/post.js'),
        context: {
          slug: node.fields.slug,
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
