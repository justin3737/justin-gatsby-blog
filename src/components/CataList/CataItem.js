import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  ListItemsWrap,
  ListDate,
  ListItemTitle,
  ListLink,
  ListTag,
} from "./catalist-comp"
class CataList extends React.Component {
  static propTypes = {
    tagName: PropTypes.string,
  }
  static defaultProps = {
    data: {},
  }
  render() {
    const { slug, frontmatter } = this.props.data
    const { date, title, tags } = frontmatter
    const link = `/blog/${slug}`
    return (
      <ListItemsWrap>
        <ListDate>{date}</ListDate>
        <ListItemTitle>
          <ListLink href={link}>{title}</ListLink>
        </ListItemTitle>
        {tags.map((item, id) => {
          return (
            <ListTag key={id}>
              <Link to={`/tags/${item}`}>#{item}</Link>
            </ListTag>
          )
        })}
      </ListItemsWrap>
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
    "catagories": "mountain",
    "tags": ["photography", "x70", "xt1", "fuji"]
  }
}
*/
