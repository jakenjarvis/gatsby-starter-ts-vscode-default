/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// See: https://www.gatsbyjs.com/docs/add-custom-webpack-config/
// See: https://medium.com/@arthur.rodzkin/how-to-debug-gatsby-js-build-process-and-html-in-vs-code-6d1a31512b5b
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  })
}
