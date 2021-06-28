import styled from "styled-components"

export const ListUL = styled.ul`
  margin: 0 2rem 2rem;
  list-style: none;
`

export const ListLI = styled.li`
  display: inline-block;
  border: 2px solid #ccc;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  &:hover {
    border: 2px solid #777;
    cursor: pointer;
  }
  a {
    padding: 0.4rem 0.7rem;
    display: inline-block;
  }

`
