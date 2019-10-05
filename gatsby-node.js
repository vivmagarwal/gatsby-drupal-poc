/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
    query QueryAllCodeContribNodeList {
      allNodeCodeContribution {
        edges {
          node {
            id
            nid
            title
          }
        }
      }
    }
    `).then((results) => {
      results.data.allNodeCodeContribution.edges.forEach(({node}) => {
        createPage({
          path: `/node/${node.nid}`,
          component: path.resolve('./src/components/nodePageLaout/nodePageLayout.js'),
          context: {
            slug: node.nid,
            nid: node.nid,
            drupalId: node.id
          }
        })
      });
      resolve();
    })
  });

};
