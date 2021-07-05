import React, { Component } from "react"
import PropTypes from "prop-types"
import { CataWrap } from "./cata-comp"
import CataList from "src/components/CataList"

class CataContainer extends Component {
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
      <CataWrap>
        <CataList dataArray={dataArray} subject={tagName} />
      </CataWrap>
    )
  }
}

export default CataContainer
