import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "CHASING LIGHTS AND SHADOWS"
    console.log(this.props.data)
    return (
      <Layout location={this.props.location} title={siteTitle}>
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
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        previous {
          frontmatter {
            date
            description
            tags
            title
            cover {
              absolutePath
            }
          }
        }
      }
    }
  }
`

export default IndexPage
