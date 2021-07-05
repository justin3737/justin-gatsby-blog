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
import TagText from "src/components/TagText"
import { Link } from "gatsby"

class PostCardItem extends React.Component {
  static PropType = {
    data: PropTypes.object,
  }
  render() {
    const { data } = this.props
    const { cover, date, description, title, tags, categories } = data.frontmatter
    const coverSrc = cover.childImageSharp.sizes.src
    const link = `/blog${data.fields.slug}`

    return (
      <React.Fragment>
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
                <PostCardTag href="/categories">{categories}</PostCardTag>
              </PostCardMeta>
              <PostCardTitle>
                <PostCardTitleLink href={link}>{title}</PostCardTitleLink>
              </PostCardTitle>
              <PostCardExcerpt href={link}>{description}</PostCardExcerpt>
              {tags.map((item, id) => {
                  return (
                    <TagText key={id}>
                      <Link to={`/tags/${item}`}>#{item}</Link>
                    </TagText>
                  )
                })}
            </PostCardContent>
          </PostCard>
        </PostCardWrap>
      </React.Fragment>
    )
  }
}

export default PostCardItem
