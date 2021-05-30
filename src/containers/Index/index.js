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
    return (
      <PostContainer>
        {dataArray.map((item, id) => {
          if (item && item.previous)
            return <PostCard key={id} data={item.previous} />
        })}
      </PostContainer>
    )
  }
}

export default Index
