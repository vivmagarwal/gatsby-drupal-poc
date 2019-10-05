import React, {Component} from 'react';
import Layout from "../layout/layout";
import {graphql} from "gatsby";

class NodePageLayout extends Component {
  render() {

    const {nodeCodeContribution} =  (this.props.data);

    return (
      <Layout>
        node title:<h1>{nodeCodeContribution.title}</h1>
        nid: <h3>{nodeCodeContribution.nid}</h3>
      </Layout>

    );
  }
}

export default NodePageLayout;

export const QUERY_SPECIFIC_NODE = graphql`
query QuerySpecificNode($nid: Int) {
  nodeCodeContribution(nid : {
    eq: $nid
  }) {
    id
    title
    nid
  }
}
`;
