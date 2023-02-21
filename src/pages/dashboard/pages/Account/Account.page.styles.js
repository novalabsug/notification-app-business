import styled from "styled-components";

export const Grid = styled.div`
  padding: 1rem 0;
`;

export const Error = styled.div`
  padding: 0;
  border: none;
  border-radius: 0.5rem;
  color: red;
  &.show {
    padding: 0.5rem;
    border: 1.5px solid red;
  }
`;
