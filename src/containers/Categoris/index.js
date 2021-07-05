import React, { Component } from "react"
import PropTypes from "prop-types"
import { CateWrap } from "./cate-comp"
import CateList from "src/components/CateList"

class CateContainer extends Component {
  static propTypes = {
    dataArray: PropTypes.array,
    tagName: PropTypes.string,
  }
  static defaultProps = {
    dataArray: [],
    tagName: "",
  }
  render() {
    const { dataArray, tagName } = this.props
    return (
      <CateWrap>
        <CateList dataArray={dataArray} subject={tagName} />
      </CateWrap>
    )
  }
}

export default CateContainer
