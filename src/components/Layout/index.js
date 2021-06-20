import React from "react"
import Header from "src/components/Header"
import { GlobalStyle, Wrapper, Footer } from "./layout-comp"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Header title={title} location={location} />
          <main>{children}</main>
          <Footer>
            © Justin {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Wrapper>
      </>
    )
  }
}

export default Layout
