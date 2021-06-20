import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "src/components/Layout"
import SEO from "@components/SEO"
import Button from "@components/Button"
import SearchPost from "@components/SearchPost"
class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = "CHASING LIGHTS AND SHADOWS"
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <SearchPost
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
