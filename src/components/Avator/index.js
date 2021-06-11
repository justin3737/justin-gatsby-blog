import React from "react"
import { AvatorWrap, AvatorBg, AvatorImg } from "./avator-comp"

class Avator extends React.Component {
  render() {
    return (
      <AvatorWrap>
        <AvatorBg>
          <AvatorImg />
        </AvatorBg>
      </AvatorWrap>
    )
  }
}

export default Avator
