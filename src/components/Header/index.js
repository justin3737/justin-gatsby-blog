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
      isOpen: false,
    }
  }
  _onclick = () => {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen,
    })
  }
  render() {
    const { title } = this.props
    return (
      <Head className={this.state.isOpen ? "is-open" : ""}>
        <Logo>
          {/* 首頁列出相關文章: 登山, 攝影, 生活. */}
          <Link to="/">{title}</Link>
        </Logo>
        <ListMenu>
          <ListItem>
            {/* 列出相關文章: 前端, 後端, */}
            <a className="list-link" href="/">
              Coding
            </a>
          </ListItem>
          <ListItem>
            {/* 分類 (按照分類排序) */}
            <a className="list-link" href="/">
              Catagoris
            </a>
          </ListItem>
          <ListItem>
            {/* 所有文章列表 (按照時間排序) */}
            <a className="list-link" href="/">
              Archives
            </a>
          </ListItem>
          <ListItem>
            {/* 關於我 */}
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
