import React from "react"
import PropTypes from "prop-types"
import CataItem from "./CataItem"
import { titleCase } from "src/utils/helper"
import { CataTitle, CataItemWrap } from "./catalist-comp"
class CataList extends React.Component {
  static propTypes = {
    dataArray: PropTypes.array,
    subject: PropTypes.string
  }
  static defaultProps = {
    dataArray: [],
    subject: ''
  }
  render() {
    const { dataArray, subject } = this.props
    const oriCataArr = dataArray.map(itam => {
      return itam.node.frontmatter.catagories
    })
    const noRepectCataArr = Array.from(new Set(oriCataArr))
    return (
      <React.Fragment>
        {noRepectCataArr.map((title, index) => {
          return (
            <React.Fragment key={index}>
              <CataTitle>{(subject)? `#${subject}`: titleCase(title)}</CataTitle>
              <CataItemWrap>
                {dataArray.map((item, id) => {
                  if (title === item.node.frontmatter.catagories)
                    return <CataItem key={id} data={item.node} />
                })}
              </CataItemWrap>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}

export default CataList
