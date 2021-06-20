import React from "react"
import Header from "src/components/Header"
import SEO from "src/components/SEO"
import About from "src/containers/About"
import { GlobalStyle } from "src/components/Layout/layout-comp"

class AboutPage extends React.Component {
  render() {
    const { location } = this.props
    const siteTitle = "CHASING LIGHTS AND SHADOWS"
    return (
      <>
        <GlobalStyle/>
        <Header title={siteTitle} location={location} fontColor="#fff"/>
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
        <About/>
      </>
    )
  }
}

export default AboutPage
