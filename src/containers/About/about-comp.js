import styled from "styled-components"

export const AboutWrap = styled.div`
  padding-top: 40px;
  min-height: 100%;
  background: linear-gradient(0deg, rgba(44, 73, 107, 0.2), rgba(44, 73, 107, 0.2)), url("/public/about_bg.jpg") center center no-repeat;
  background-size: cover;
  background-blend-mode: multiply, normal;
  mix-blend-mode: multiply;
`

export const AboutLinearMask = styled.div`
  position: absolute;
  height: 320px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: linear-gradient(
    180deg,
    rgba(44, 74, 102, 0.2) 0%,
    rgba(44, 74, 102, 0) 100%
  );
`

export const AuthorName = styled.h1`
  position: relative;
  display: inline-block;
  width: calc(100% - 92px);
  margin: 5px 48px;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
  color: white;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
`

export const AuthorDesc = styled.div`
  position: relative;
  margin: 0 48px;
  text-align-last: justify;
  color: white;
  font-weight: 500;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
  line-height: 30px;

  @media (min-width: 415px) {
    max-width: 280px;
    margin: 0 auto;
  }
`

export const AuthorIntro = styled.div`
  position: relative;
  line-height: 28px;
  margin: 20px 48px 0;
  padding: 20px;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  letter-spacing: 0.06em;

  @media (min-width: 415px) {
    max-width: 280px;
    margin: 12px auto;
  }
`
