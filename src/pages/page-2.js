import React from "react"
import {graphql, Link} from "gatsby"

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo"
import Image from "../components/lazyImage/image";

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <pre>{JSON.stringify(data)}</pre>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
          <Image/>
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage
