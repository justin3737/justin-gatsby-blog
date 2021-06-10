import React from "react"
import { SocialWrap, SocialLink } from "./social-comp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebook,
  faGithub,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons"

class SocialIcons extends React.Component {
  render() {
    return (
      <SocialWrap>
        <SocialLink href="#">
          <FontAwesomeIcon icon={faFacebook}/>
        </SocialLink>
        <SocialLink href="#">
          <FontAwesomeIcon icon={faGithub}/>
        </SocialLink>
        <SocialLink href="#">
          <FontAwesomeIcon icon={faInstagram}/>
        </SocialLink>
        <SocialLink href="#">
          <FontAwesomeIcon icon={faFlickr}/>
        </SocialLink>
      </SocialWrap>
    )
  }
}

export default SocialIcons
