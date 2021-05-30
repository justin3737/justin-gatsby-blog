import styled from "styled-components"

export const PostCardWrap = styled.div`
  display: flex;

  @media (min-width: 40em) {
    &.col-2 {
      width: 50%;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      padding-right: 16px;
      padding-left: 16px;
    }
  }
`

export const PostCard = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 32px;
  background-color: #eef1f0;
  border-radius: 8px;
  -webkit-box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
  box-shadow: 4px 12px 40px 6px rgb(0 0 0 / 9%);
  -webkit-transition: -webkit-box-shadow 250ms ease-in-out;
  transition: -webkit-box-shadow 250ms ease-in-out;
  transition: box-shadow 250ms ease-in-out;
  transition: box-shadow 250ms ease-in-out, -webkit-box-shadow 250ms ease-in-out;
`

export const PostCardMedia = styled.div`
  overflow: hidden;
  background-color: #eef1f0;
`

export const PostCardMediaLink = styled.a`
  display: block;
  position: relative;
  padding-top: 100%;
  -webkit-transition: -webkit-transform .5s ease;
  transition: -webkit-transform .5s ease;
  transition: transform .5s ease;
  transition: transform .5s ease,-webkit-transform .5s ease;
`

export const PostCardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const PostCardContent = styled.div`
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 24px;
  background-color: #fff;

  @media (min-width: 40em) {
    .post-card-content {
      padding: 32px;
    }
  }
`

export const PostCardMeta = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #4f525f;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: .5px;
  margin-bottom: 8px;
`

export const PostCardDate = styled.time`
  padding-right: 8px;
  margin-right: 8px;
  line-height: 1;
  box-shadow: inset -1px 0 0 0 #4f525f;
`

export const PostCardTag = styled.a`
  text-decoration: underline;
  margin-right: 14px;
  position: relative;

  &::after {
    content: '、';
    position: absolute;
  }

  &:last-child::after {
    content: '';
  }
`

export const PostCardTitle = styled.h2`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 0;
`

export const PostCardTitleLink = styled.a`
  border-bottom: 1px solid transparent;
  -webkit-transition: border-bottom 250ms ease-in-out;
  transition: border-bottom 250ms ease-in-out;
`

export const PostCardExcerpt = styled.a`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0;
  margin-top: 8px;
  overflow-y: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`