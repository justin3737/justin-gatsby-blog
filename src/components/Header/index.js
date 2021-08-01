import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Head,
  Logo,
  HamburgerWrap,
  HamburgerItem,
  ListMenu,
  ListItem,
} from "./header-comp"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }
  static PropType = {
    fontColor: PropTypes.string,
  }
  static defaultProps = {
    fontColor: "#000c2d",
  }
  _onclick = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen,
    })
  }
  render() {
    const { title, fontColor } = this.props
    return (
      <Head
        className={this.state.isOpen ? "is-open" : ""}
        fontColor={fontColor}
      >
        <Logo>
          <Link to="/">{title}</Link>
        </Logo>
        <ListMenu>
          <ListItem>
            <a className="list-link" href="/">
              Home
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="/coding">
              Coding
            </a>
          </ListItem>
          <ListItem>
            {/* 分類 (按照分類排序) */}
            <a className="list-link" href="/categories">
              Categories
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="/about">
              About
            </a>
          </ListItem>
        </ListMenu>
        <HamburgerWrap id="menu" onClick={this._onclick} fontColor={fontColor}>
          <HamburgerItem fontColor={fontColor}></HamburgerItem>
        </HamburgerWrap>
      </Head>
    )
  }
}

export default Header
