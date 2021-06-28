import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import Catagoris from "@containers/Catagoris"

class IndexPage extends React.Component {
  render() {
    const { location, tags, data } = this.props
    const siteTitle = "CHASING LIGHTS AND SHADOWS"
    const dataArray = data.allMdx.edges
    let tagArrs = []
    dataArray.forEach(item => {
      let tagArr = item.node.frontmatter.tags
      tagArr.forEach(it => {
        if (tags === it) tagArrs.push(item)
      })
    })
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
         <Catagoris dataArray={tagArrs} tagName={tags}/>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          slug
          frontmatter {
            title
            date
            tags
            catagories
          }
        }
      }
    }
  }
`

export default IndexPage
