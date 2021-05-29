import React, { Component } from 'react'
import { PostContainer } from './index-comp'
import PostCard from 'src/components/PostCard'

class Index extends Component {
  render() {
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