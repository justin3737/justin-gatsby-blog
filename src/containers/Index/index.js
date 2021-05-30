import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PostContainer } from './index-comp'
import PostCard from 'src/components/PostCard'

class Index extends Component {
  static propTypes = {
    dataArray: PropTypes.array
  }
  static defaultProps = {
    dataArray: []
  }
  render() {
    const { dataArray } = this.props
    console.log(dataArray)
    return(
      <PostContainer>
        <PostCard/>
        <PostCard/>
        <PostCard/>
      </PostContainer>
    )
  }
}

export default Index