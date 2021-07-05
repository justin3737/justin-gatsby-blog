import styled from "styled-components"

export const CateTitle = styled.div`
  color: #363636;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.125;
  margin: 0 0 0.8em;
  padding: 0;
  word-break: break-word;
  margin-top: 3rem;

  &:first-child {
    margin-top: 0rem;
  }
`

export const CateItemWrap = styled.div`
  border-left: 1px solid #dbdbdb;
`

export const ListItemsWrap = styled.div`
  border-left: 3px solid transparent;
  border-top-style: none;
  color: #4a4a4a;
  font-size: 17.6px;
  line-height: 26.4px;
  margin-bottom: 0;
  margin-left: -1px;
  padding: 0.5rem 1.5rem;

  &:hover {
    border-left-color: black;
    cursor: pointer;
  }
`

export const ListDate = styled.time`
  color: #888;
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 21.6px;
  margin-right: 1rem;
`

export const ListItemTitle = styled.h6`
  color: #363636;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.125;
  margin: 0;
  padding: 0;
  word-break: break-word;
`
export const ListLink = styled.a`
  display: inline-block;
  width: 100%;
`
