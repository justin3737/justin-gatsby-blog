import React, { Component } from "react"
import PropTypes from "prop-types"
import { CataWrap } from "./cata-comp"
import CataList from "src/components/CataList"

class CataContainer extends Component {
  static propTypes = {
    dataArray: PropTypes.array,
  }
  static defaultProps = {
    dataArray: [],
  }
  render() {
    const { dataArray } = this.props
    return (
      <CataWrap>
        <CataList dataArray={dataArray} />
      </CataWrap>
    )
  }
}

export default CataContainer
