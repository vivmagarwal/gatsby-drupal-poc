import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import Nodelist from "../components/nodelist/nodelist";

const IndexPage = ({data}) => {

  return (
    <Layout>
      <SEO title="Home"/>

      <Nodelist/>

      <p style={{color: `red`}}>This contains some inline styles.</p>
      <p>Now go build something great.</p>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
};

export default IndexPage
