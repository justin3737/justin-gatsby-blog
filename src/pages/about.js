import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class AboutPage extends React.Component {
  render() {
    const { location } = this.props
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
      </Layout>
    )
  }
}

export default AboutPage
