import React from "react"
import PropTypes from "prop-types"
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
  static PropType = {
    data: PropTypes.object,
  }
  render() {
    const { data } = this.props
    const { cover, date, description, tags, title } = data.frontmatter
    const coverSrc = cover.childImageSharp.sizes.src
    const link = `/blog${data.fields.slug}`
    return (
      <>
        <PostCardWrap className="col-2">
          <PostCard>
            <PostCardMedia>
              <PostCardMediaLink href={link}>
                <PostCardImage src={coverSrc} alt={title} />
              </PostCardMediaLink>
            </PostCardMedia>
            <PostCardContent>
              <PostCardMeta>
                <PostCardDate>{date}</PostCardDate>
                <PostCardTag href="">{tags}</PostCardTag>
              </PostCardMeta>
              <PostCardTitle>
                <PostCardTitleLink href={link}>{title}</PostCardTitleLink>
              </PostCardTitle>
              <PostCardExcerpt href={link}>{description}</PostCardExcerpt>
            </PostCardContent>
          </PostCard>
        </PostCardWrap>
      </>
    )
  }
}

export default PostCardItem
