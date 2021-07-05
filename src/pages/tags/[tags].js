import React from "react"
import { graphql } from "gatsby"

import Layout from "@components/Layout"
import SEO from "@components/SEO"
import TagList from "@components/TagList"
import Categoris from "@containers/Categoris"

class IndexPage extends React.Component {
  render() {
    const { location, tags, data } = this.props
    const siteTitle = "CHASING LIGHTS AND SHADOWS"
    const dataArray = data.allMdx.edges
    let tagArrs = []
    let oriTagArr = []
    dataArray.forEach(item => {
      let tagArr = item.node.frontmatter.tags
      tagArr.forEach(it => {
        oriTagArr.push(it)
        if (tags === it) tagArrs.push(item)
      })
    })
    const noRepectTagArr = Array.from(new Set(oriTagArr))
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
        <Categoris dataArray={tagArrs} tagName={tags}/>
        <TagList listArray={noRepectTagArr}/>
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
            categories
          }
        }
      }
    }
  }
`

export default IndexPage
