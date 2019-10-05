import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Link} from "gatsby";

const Nodelist = () => {
  let top_ten_nodes;
  top_ten_nodes = useStaticQuery(graphql`
      query QueryNodeListTopTen {
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
  `);
  return (
    <>
      <aside>
        <h3>Node list</h3>
        <ul>
          {top_ten_nodes.allNodeCodeContribution.edges.map(edge => (
            <li key={edge.node.id}>
              <Link to={`/node/${edge.node.nid}`}> {edge.node.title} </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
};

export default Nodelist
