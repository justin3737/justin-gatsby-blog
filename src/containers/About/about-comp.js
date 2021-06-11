import styled from "styled-components"

export const AboutWrap = styled.div`
  padding-top: 84px;
  height: 100%;
  background: url("/public/about_bg.jpg") center center no-repeat;
  background-size: cover;
`

export const AuthorName = styled.h1`
  position: relative;
  display: inline-block;
  width: calc(100% - 92px);
  margin: 1% 48px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`

export const AuthorDesc = styled.div`
  position: relative;
  margin: 0 48px;
  text-align-last:justify;
  color: #FFFFFF;
  font-weight: 500;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
`