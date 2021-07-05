import styled from "styled-components"

export const TagText = styled.span`
  color: #888;
  font-size: 0.9rem;
  line-height: 21.6px;
  margin-right: 0.4rem;

  & a:hover {
    text-decoration: underline;
  }

  &:after {
    content: "、";
  }
`