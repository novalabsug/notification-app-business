import styled from "styled-components";

export const MainContent = styled.div`
  padding: 2rem 5rem;
`;

export const Section1 = styled.section`
  padding: 3rem 1rem;
  margin: 0 10rem;
  border: 1.5px solid ${({ theme }) => theme.colors.baseColor2};
  border-radius: 0.5rem;
  position: relative;
  i {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 2rem;
  }
`;

export const Section2 = styled.section`
  padding: 4rem 5rem;
`;

export const Section3 = styled.section`
  padding: 3rem 5rem;
`;

export const ContactCard = styled.div`
  ul {
    padding: 1rem 0;
    li {
      padding: 1rem;
      border: 1.5px solid ${({ theme }) => theme.colors.baseColor2};
      border-radius: 0.5rem;
      margin: 1rem 0;
    }
  }
`;

export const ContactForm = styled.form`
  padding: 1rem;
`;

export const Input = styled.div`
  padding: 0.5rem 0;
`;
