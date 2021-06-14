import React from "react"
import PropTypes from "prop-types"
import { titleCase } from "../../utils/helper"
import { ListTitle } from "./catalist-comp"
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
        {noRepectCataArr.map(title => {
          return (<ListTitle>{titleCase(title)}</ListTitle>)
        })}
      </>
    )
  }
}

export default CataList

/*
{
  "slug": "mountainholic-3/",
  "frontmatter": {
    "title": "Mountainholic Part III - 在山上游牧",
    "date": "2021-03-12",
    "catagories": "mountain"
  }
}
*/
