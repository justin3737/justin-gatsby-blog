import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #___gatsby, #gatsby-focus-wrapper {
  height: 100%;
}

body {
  background: #fff;
  color: #000c2d;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  direction: ltr;
 }

body, input, button {
  font-size: 16px;
  font-family: "Noto Sans", Helvetica,Arial,sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
`

export const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;

  @media screen and (max-width: 820px) {
    padding: 0;
  }
`

export const Footer = styled.footer`
  text-align: center;
  padding-bottom: 24px;
`
