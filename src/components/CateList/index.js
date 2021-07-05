import React from "react"
import PropTypes from "prop-types"
import CateItem from "./CateItem"
import { titleCase } from "src/utils/helper"
import { CateTitle, CateItemWrap } from "./catelist-comp"
class CateList extends React.Component {
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
    const oriCateArr = dataArray.map(itam => {
      return itam.node.frontmatter.categories
    })
    const noRepectCateArr = Array.from(new Set(oriCateArr))
    return (
      <React.Fragment>
        {noRepectCateArr.map((title, index) => {
          return (
            <React.Fragment key={index}>
              <CateTitle>{(subject)? `#${subject}`: titleCase(title)}</CateTitle>
              <CateItemWrap>
                {dataArray.map((item, id) => {
                  if (title === item.node.frontmatter.categories)
                    return <CateItem key={id} data={item.node} />
                })}
              </CateItemWrap>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}

export default CateList
