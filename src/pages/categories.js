import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import Categoris from "@containers/Categoris"
import SEO from "@components/SEO"

class IndexPage extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = "CHASING LIGHTS AND SHADOWS"
    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `mountain`,
            `life`,
            `photography`,
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `js`,
          ]}
        />
        <Categoris dataArray={data.allMdx.edges}/>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          slug
          frontmatter {
            categories
            title
            date
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
