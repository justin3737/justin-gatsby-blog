import React from "react"
import PropTypes from "prop-types"
import { ListUL, ListLI } from "./taglist-comp"
import { Link } from "gatsby"

class TagList extends React.Component {
  static staticProps = {
    listArray: PropTypes.array,
  }
  static defaultProps = {
    listArray: [],
  }
  render() {
    const { listArray } = this.props
    return (
      <>
        <ListUL>
          {listArray.map((item, id) => {
            return <ListLI key={id}><Link to={`/tags/${item}`}>#{item}</Link></ListLI>
          })}
        </ListUL>
      </>
    )
  }
}

export default TagList
