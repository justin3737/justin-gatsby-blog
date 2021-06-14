import React, { Component } from "react"
import PropTypes from "prop-types"
import CataList from "../../components/CataList"

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
      <>
        {dataArray.map((item, id) => {
          return <CataList key={id} data={item.node} />
        })}
      </>
    )
  }
}

export default CataContainer
