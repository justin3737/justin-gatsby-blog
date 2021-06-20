import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import IndexContainer from "@containers/Index"
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
        <IndexContainer dataArray={data.allMdx.edges}/>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            cover {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
            date
            description
            catagories
            title
          }
        }
      }
    }
  }
`

export default IndexPage
