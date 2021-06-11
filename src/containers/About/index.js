import React from "react"
import { AboutWrap } from "./about-comp"
import SocialIcon from "../../components/SocialIcon"
import Avator from "../../components/Avator"

class About extends React.Component {
  render() {
    return (
      <AboutWrap>
        <Avator />
        <SocialIcon />
      </AboutWrap>
    )
  }
}

export default About
