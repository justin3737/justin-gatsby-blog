import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Article } from "./blog-post-comp"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

class BlogPostTemplate extends React.Component {
  render() {
    const { location, data } = this.props
    const post = data.mdx
    const siteTitle = data.site.siteMetadata.title
    const disqusConfig = {
      url: `${location}`,
      identifier: post.id,
      title: post.frontmatter.title,
    }
    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Article>
          <h1>{post.frontmatter.title}</h1>
          <p className="post-content-date">{post.frontmatter.date}</p>
          <MDXRenderer>{post.body}</MDXRenderer>
          <CommentCount config={disqusConfig} placeholder={"..."} />
          <Disqus config={disqusConfig} />{" "}
        </Article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
