import React, { Component } from "react"
import PropTypes from "prop-types"
import { PostContainer } from "./index-comp"
import PostCard from "src/components/PostCard"

class Index extends Component {
  static propTypes = {
    dataArray: PropTypes.array,
  }
  static defaultProps = {
    dataArray: [],
  }
  render() {
    const { dataArray } = this.props
    let filterCoding = dataArray.filter(d => d.node.frontmatter.categories !== "coding")
    return (
      <PostContainer>
        {filterCoding.map((item, id) => {
          return <PostCard key={id} data={item.node} />
        })}
      </PostContainer>
    )
  }
}

export default Index
