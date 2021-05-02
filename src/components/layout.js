import React from "react"
import Header from "./header"
import { GlobalStyle, Wrapper, Footer } from "./layout-comp"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Header title={title} />
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
