import styled from "styled-components"

export const Article = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 10vw 0;

  h1 {
    color: #555555;
    margin: 0 0 0.4em;
    font-size: 1.9em;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.04em;
  }

  h2 {
    color: #555555;
    font-size: 1.5em;
    line-height: 1.1;
    font-weight: 300;
  }

  .post-content-date {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: .05px;
    font-weight: 400;
    color: #687385;
  }

  p {
    margin: 0 0 1.5em 0;
    font-weight: 400;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 0;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: inset 0px 0px 0px 400px transparent;
  }

  hr {
    position: relative;
    margin: 30px 0;
    border-color: transparent;
    display: block;
    width: 100%;
    padding: 0;
    height: 1px;
    border: 0;
    overflow: visible;
    box-sizing: content-box;
  }

  hr:after {
    display: block;
    font-size: 24px;
    content: ". . .";
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }

  blockquote {
    border: 5px solid #bbbbbb;
    margin: 2.5em 0;
    padding: 1em 1.1em 1em 1.3em;
    position: relative;
    font-style: italic;
  }

  blockquote::before, blockquote::after {
      top: -6px;
      left: 50%;
      width: 94%;
      height: 8px;
      content: "";
      position: absolute;
      background: #ffffff;
      margin-left: -47%;
  }

  blockquote::after {
    top: auto;
    bottom: -6px;
  }

  blockquote p {
    margin: 0;
  }

  @media (max-width: 600px) {
    padding: calc(2.5rem + 60px) 2.5rem 2.5rem;

    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.6em;
    }
  }

  @media (max-width: 375px) {
    padding: calc(2.5rem + 60px) 2rem 2.5rem;
  }
`
