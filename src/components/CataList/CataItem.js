import React from "react"
import PropTypes from "prop-types"
import {
  ListItemsWrap,
  ListDate,
  ListItemTitle,
  ListLink
} from "./catalist-comp"
class CataList extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }
  static defaultProps = {
    data: {},
  }
  render(){
    const { slug, frontmatter } = this.props.data
    const { date, title } = frontmatter
    const link = `/blog/${slug}`
    return(
      <ListItemsWrap>
        <ListDate>{date}</ListDate>
        <ListItemTitle><ListLink href={link}>{title}</ListLink></ListItemTitle>
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
    "catagories": "mountain"
  }
}
*/
