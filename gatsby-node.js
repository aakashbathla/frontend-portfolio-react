const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      blogs: allContentfulBlogs(sort: { fields: published, order: DESC }) {
        nodes {
          slug
        }
      }
    }
  `)
  console.log(data)
  console.log(data.blogs)
  console.log(JSON.stringify(data.blogs))
  data.blogs.nodes.forEach(blog => {
    createPage({
      path: `blogs/${blog.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: blog.slug,
      },
    })
  })
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
