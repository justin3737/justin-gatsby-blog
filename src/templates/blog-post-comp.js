import styled from "styled-components"

export const Article = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 12vw 2.5rem 2.5rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: .48px;

  h1 {
    color: #151515;
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

  h3 {
    margin: 2em 0 0.5em 0;
  }

  h5 {
    font-size: 12px;
    color: #777;
    display: inline-block;
    margin-top: -20px;
    position: absolute;
    font-weight: normal;
    line-height: 18px;
    width: calc(100% - 64px);
    text-align: center;
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
    color: #454545;
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
    border: 4px solid #bbbbbb;
    margin: 2.5em 0;
    padding: 1em 1.1em 1em 1.3em;
    position: relative;
    font-style: italic;
  }

  blockquote::before, blockquote::after {
    top: -6px;
    left: 50%;
    width: 96%;
    height: 8px;
    content: "";
    position: absolute;
    background: #ffffff;
    margin-left: -48%;
  }

  blockquote::after {
    top: auto;
    bottom: -6px;
  }

  blockquote p {
    margin: 0;
  }

  @media (min-width: 920px) {
    h5 {
      text-align: left;
    }
  }

  @media (max-width: 600px) {
    padding: calc(2.5rem + 60px) 2.5rem 2.5rem;

    h2 {
      font-size: 1.6em;
    }
  }

  @media (max-width: 414px) {
    padding: calc(2.5rem + 60px) 2rem 2.5rem;

    h5 {
      font-size: 14px;
      margin-top: -18px;
    }
  }
`
