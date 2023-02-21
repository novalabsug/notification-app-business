import styled from "styled-components";

export const Card = styled.div`
  padding: 2rem 1rem;
  align-items: center;
  align-content: center;
  border-radius: 0.5rem;
  border: 1.5px solid ${({ theme }) => theme.colors.baseColor2};
`;
