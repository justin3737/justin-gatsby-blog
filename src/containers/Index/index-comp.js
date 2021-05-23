import styled from 'styled-components'

export const PostContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1400px;
  padding: 84px 16px 0;

  @media screen and (max-width: 414px) {
    padding: 84px 24px 0;
  }
`