import styled from "styled-components";

export const Ulinline = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
  li {
    display: inline-block;
    a {
      margin-left: 0;
      padding: 10px;
      border-bottom: 2px solid #eee;
      transition: all 0.5s;
      font-family: sans-serif;
      font-weight: 300;
      cursor: pointer;
      color: #aaa;
      text-decoration: none;
      outline: none;
      &:focus {
        border-bottom: 2px solid #337ab7;
        color: #444;
      }
    }
  }
`;

export const TabContent = styled.div`
  width: 100%;
  padding: 25px;
  font-family: sans-serif;
  color: blue;
`;
