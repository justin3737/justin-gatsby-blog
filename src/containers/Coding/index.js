import React, { Component } from "react"
import PropTypes from "prop-types"
import { CateCtnWrap } from "../Categoris/cate-comp"
import ListItem from "src/components/ListItem"

class CodingContainer extends Component {
  static propTypes = {
    dataArray: PropTypes.array,
  }
  static defaultProps = {
    dataArray: [],
  }
  render() {
    const { dataArray } = this.props
    let filterCoding = dataArray.filter(d => d.node.frontmatter.categories === "coding")
    const oriCateArr = filterCoding.map(itam => {
      return itam.node.frontmatter.categories
    })
    const noRepectCateArr = Array.from(new Set(oriCateArr))
    return (
      <CateCtnWrap>
        {noRepectCateArr.map((title, index) => {
          return (
            <ListItem
              key={index}
              dataArray={dataArray}
              subject={title}
              filterType={"categories"}
            />
          )
        })}
      </CateCtnWrap>
    )
  }
}

export default CodingContainer
