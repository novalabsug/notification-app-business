import { Themecolors } from "@/theme/constants";
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
  padding: 1rem 0;
  margin: 1rem 0;
  border-radius: 0.5rem;
  background: ${Themecolors.darktheme};
`;

export const ContactForm = styled.form`
  padding: 1rem;
`;

export const Input = styled.div`
  padding: 0.5rem 0;
  input,
  textarea {
    border: none;
    background: ${Themecolors.darktheme};
  }
`;

export const Box = styled.div`
  padding: 1rem 0;
`;

export const Button = styled.button`
  padding: 0.7rem 2rem;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.baseColor2};
  color: ${({ theme }) => theme.colors.baseColor};
  font-size: 1.2rem;
  text-align: center;
  cursor: pointer;
`;

export const Button2 = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.baseColor2};
  color: ${({ theme }) => theme.colors.baseColor};
  font-size: 1.1rem;
  text-align: center;
  cursor: pointer;
`;
