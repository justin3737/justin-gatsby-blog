import React from "react"
import { AboutWrap } from "./about-comp"
import SocialIcon from "../../components/SocialIcon"
import Avator from "../../components/Avator"
import { AuthorName, AuthorDesc } from "./about-comp"

class About extends React.Component {
  render() {
    return (
      <AboutWrap>
        <Avator />
        <AuthorName>Justin</AuthorName>
        <AuthorDesc>前端工程師、業餘攝影愛好者</AuthorDesc>
        <SocialIcon />
      </AboutWrap>
    )
  }
}

export default About
