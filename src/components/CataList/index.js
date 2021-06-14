import React from "react"
import PropTypes from "prop-types"

class CataList extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }
  static defaultProps = {
    data: {},
  }
  render() {
    const { data } = this.props
    console.log(data)
    return <>{
      data.frontmatter.tags
    }</>
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
