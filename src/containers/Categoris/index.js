import React, { Component } from "react"
import PropTypes from "prop-types"
import { CateCtnWrap } from "./cate-comp"
import ListItem from "src/components/ListItem"

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
    const { dataArray } = this.props
    const oriCateArr = dataArray.map(itam => {
      return itam.node.frontmatter.categories
    })
    const noRepectCateArr = Array.from(new Set(oriCateArr))
    return (
      <CateCtnWrap>
        <React.Fragment>
          {noRepectCateArr.map((title, index) => {
            return (
              <ListItem key={index} dataArray={dataArray} subject={title} filterType={'categories'}/>
            )
          })}
        </React.Fragment>
      </CateCtnWrap>
    )
  }
}

export default CateContainer
