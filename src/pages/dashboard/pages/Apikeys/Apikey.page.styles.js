import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const Input = styled.div`
  padding: 0.5rem 0.3rem;
  border: 1.5px solid ${({ theme }) => theme.colors.primaryColor};
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  p {
    font-size: 1rem;
  }
`;

export const Icon = styled.div`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.primaryColor};
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  i {
    color: #fff;
  }
`;

export const EmptyContainer = styled.div`
  padding: 1rem 0;
  h3 {
    font-size: 2rem;
    color: #fff;
  }
`;

export const BtnContainer = styled.div`
  padding: 3rem 0 1rem 0;
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
