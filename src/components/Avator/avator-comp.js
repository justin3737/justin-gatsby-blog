import styled from "styled-components"

export const AvatorWrap = styled.div`
  height: 208px;
  margin: 60px auto 10px;
  @media (min-height: 813px) and (max-height: 900px) {
    margin: 80px auto 10px;
  }
  @media (min-height: 901px) and (max-height: 1024px) {
    margin: 130px auto 10px;
  }
  @media (min-height: 1024px) {
    margin: 170px auto 10px;
  }
`

export const AvatorBg = styled.div`
  position: absolute;
  width: 208px;
  height: 208px;
  border-radius: 100%;
  left: calc(50% - 208px / 2 - 0px);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
`

export const AvatorImg = styled.div`
  position: absolute;
  margin-top: 4px;
  width: 200px;
  height: 200px;
  left: calc(50% - 200px / 2);
  border-radius: 100%;
  background: url("/public/justin_photo.jpeg");
  background-size: cover;
`
