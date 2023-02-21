import styled from "styled-components";

export const Form = styled.form`
  padding: 1rem;
  margin: 0 auto;
  width: 50%;
`;

export const Input = styled.div`
  padding: 0.5rem 0;
`;

export const Error = styled.p`
  padding: 0.3rem 0;
  color: red;
`;

export const FormError = styled.p`
  padding: 0;
  border: none;
  border-radius: 0.5rem;
  color: red;
  &.show {
    padding: 0.5rem;
    border: 1.5px solid red;
  }
`;
