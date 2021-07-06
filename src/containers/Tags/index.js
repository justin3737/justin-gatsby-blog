import React, { Component } from "react"
import PropTypes from "prop-types"
import { TagCtnWrap } from "./tag-comp"
import ListItem from "src/components/ListItem"

class TagsContainer extends Component {
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
      <TagCtnWrap>
        <ListItem dataArray={dataArray} subject={tagName} />
      </TagCtnWrap>
    )
  }
}

export default TagsContainer
