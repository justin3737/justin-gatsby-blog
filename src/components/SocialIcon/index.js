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
        <SocialLink href="https://www.facebook.com/JustinWu3737/" target="_blank">
          <FontAwesomeIcon icon={faFacebook}/>
        </SocialLink>
        <SocialLink href="https://github.com/justin3737" target="_blank">
          <FontAwesomeIcon icon={faGithub}/>
        </SocialLink>
        <SocialLink href="https://www.instagram.com/justin3737/" target="_blank">
          <FontAwesomeIcon icon={faInstagram}/>
        </SocialLink>
        <SocialLink href="https://www.flickr.com/photos/justin-image/albums" target="_blank">
          <FontAwesomeIcon icon={faFlickr}/>
        </SocialLink>
      </SocialWrap>
    )
  }
}

export default SocialIcons
