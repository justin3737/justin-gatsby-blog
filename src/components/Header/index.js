import React from "react"
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
      isOpen: false
    }
  }
  _onclick = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen
    })
  }
  render() {
    const { title } = this.props
    return (
      <Head className={this.state.isOpen? "is-open":""}>
        <Logo>
          <Link to="/">{title}</Link>
        </Logo>
        <ListMenu>
          <ListItem>
            <a className="list-link" href="/">
              Mountain
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="/">
              Coding
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="/">
              Archive
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="/about">
              About
            </a>
          </ListItem>
        </ListMenu>
        <HamburgerWrap id="menu" onClick={this._onclick}>
          <HamburgerItem></HamburgerItem>
        </HamburgerWrap>
      </Head>
    )
  }
}

export default Header
