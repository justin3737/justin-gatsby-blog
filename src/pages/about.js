import React from "react"
import Header from "../components/Header"
import SEO from "../components/SEO"
import About from "../containers/About"
import { GlobalStyle } from "../components/Layout/layout-comp"

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
