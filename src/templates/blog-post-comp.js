import styled from "styled-components"

export const Article = styled.div`
  margin: 0 auto;
  padding: calc(60px + 1.5rem) 1.5rem 1.5rem 1.5rem;
  max-width: 50em;
  background: #ffffff;

  @media (min-width: 600px) {
    padding: calc(2.5rem + 60px) 3.5rem 2.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    //position: absolute;
    top: 0;
    left: 0;
    box-shadow: inset 0px 0px 0px 400px transparent;
  }
`
