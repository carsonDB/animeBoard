exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const tutorialTemplate = require.resolve(`./src/templates/tutorial.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___slug] }
        ) {
          edges {
            node {
              frontmatter {
                slug
                lang
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.lang === 'zh' ? '/zh' : ''}${node.frontmatter.slug}`,
        component: tutorialTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          lang: node.frontmatter.lang,
        },
      })
    })
  }