import React from "react"
import {
  PostCardWrap,
  PostCard,
  PostCardMedia,
  PostCardMediaLink,
  PostCardImage,
  PostCardContent,
  PostCardMeta,
  PostCardDate,
  PostCardTag,
  PostCardTitle,
  PostCardTitleLink,
  PostCardExcerpt,
} from "./post-comp"

class PostCardItem extends React.Component {
  render() {
    return (
      <>
        <PostCardWrap className="col-2">
          <PostCard>
            <PostCardMedia>
              <PostCardMediaLink href="">
                <PostCardImage
                  src="https://images.unsplash.com/photo-1586188892796-d1289a658bb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
                  alt=""
                />
              </PostCardMediaLink>
            </PostCardMedia>
            <PostCardContent>
              <PostCardMeta>
                <PostCardDate
                  datetime="2020-04-06"
                  title="06 April 2020"
                >
                  06.Apr.2020
                </PostCardDate>
                <PostCardTag href="">攝影</PostCardTag>
                <PostCardTag href="">旅遊</PostCardTag>
              </PostCardMeta>
              <PostCardTitle>
                <PostCardTitleLink href="https://brian-ross.net/jk-untitled/">
                  Give Science Time
                </PostCardTitleLink>
              </PostCardTitle>
              <PostCardExcerpt href="https://brian-ross.net/jk-untitled/">
                Use Common Sense Whate We Pretend to Know about the Coronavirus
                Could Kill Us is an excellent article on the pace of science,
                the pitfalls of social media, and the failings of government and
                media during this crisis. &nbsp; The bottome line - be careful.
                &nbsp;Use common sense. &nbsp; My bottom line:
              </PostCardExcerpt>
            </PostCardContent>
          </PostCard>
        </PostCardWrap>
      </>
    )
  }
}

export default PostCardItem
