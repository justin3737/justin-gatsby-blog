import React from "react"
import { AboutWrap } from "./about-comp"
import SocialIcon from "../../components/SocialIcon"
import Avator from "../../components/Avator"
import { AuthorName, AuthorDesc, AuthorIntro } from "./about-comp"

class About extends React.Component {
  render() {
    return (
      <AboutWrap>
        <Avator />
        <AuthorName>Justin</AuthorName>
        <AuthorDesc>前端工程師、業餘攝影愛好者</AuthorDesc>
        <AuthorIntro>工業設計系畢業，喜歡登山/旅遊/攝影，凡是遇上有趣的研究便無法自拔廢寢忘食，目前正在前往全端工程師學習的路上，建立此blog，希望紀錄所見所學，更希望能在專案中發揮所學將設計與程式碼完美結合。</AuthorIntro>
        <SocialIcon />
      </AboutWrap>
    )
  }
}

export default About
