import React from "react"
import PropTypes from "prop-types"
import CataItem from "./CataItem"
import { titleCase } from "src/utils/helper"
import { CataTitle, CataItemWrap } from "./catalist-comp"
class CataList extends React.Component {
  static propTypes = {
    dataArray: PropTypes.array,
  }
  static defaultProps = {
    dataArray: [],
  }
  render() {
    const { dataArray } = this.props
    const oriCataArr = dataArray.map(itam => {
      return itam.node.frontmatter.catagories
    })
    const noRepectCataArr = Array.from(new Set(oriCataArr))
    return (
      <>
        {noRepectCataArr.map((title, index) => {
          return (
            <>
              <CataTitle key={index}>{titleCase(title)}</CataTitle>
              <CataItemWrap key={index}>
                {dataArray.map((item, id) => {
                  if (title === item.node.frontmatter.catagories)
                    return <CataItem key={id} data={item.node} />
                })}
              </CataItemWrap>
            </>
          )
        })}
      </>
    )
  }
}

export default CataList
