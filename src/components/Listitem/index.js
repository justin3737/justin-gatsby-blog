import React from "react"
import PropTypes from "prop-types"

import List from "./List"
import { ListTitle, ListItemWrap } from "./list-comp"
import { titleCase } from "src/utils/helper"

class ListItem extends React.Component {
  static propTypes = {
    dataArray: PropTypes.array,
    subject: PropTypes.string,
    filterType: PropTypes.string,
  }
  static defaultProps = {
    dataArray: [],
    subject: "", // tag name or category name
    filterType: "tags", //"tags" or "categories"
  }
  render() {
    const { dataArray, subject, filterType } = this.props
    return (
      <React.Fragment>
        <ListTitle>
          {filterType === "tags" ? `#${subject}` : titleCase(subject)}
        </ListTitle>
        <ListItemWrap>
          {dataArray.map((item, id) => {
            if (
              (filterType === "categories" &&
                subject.includes(item.node.frontmatter[filterType])) ||
              (filterType === "tags" &&
                subject.includes(item.node.frontmatter[filterType]) !== -1)
            )
              return <List key={id} data={item.node} />
          })}
        </ListItemWrap>
      </React.Fragment>
    )
  }
}

export default ListItem
