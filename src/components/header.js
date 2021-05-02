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
  render() {
    const { title } = this.props
    return (
      <Head className="header-container">
        <Logo>
          <Link href="/">{title}</Link>
        </Logo>
        <ListMenu>
          <ListItem>
            <a className="list-link" href="">
              Mountain
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="">
              Life
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="">
              Coding
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="">
              Archive
            </a>
          </ListItem>
          <ListItem>
            <a className="list-link" href="">
              About
            </a>
          </ListItem>
        </ListMenu>
        <HamburgerWrap id="menu">
          <HamburgerItem></HamburgerItem>
        </HamburgerWrap>
      </Head>
    )
  }
}

export default Header
