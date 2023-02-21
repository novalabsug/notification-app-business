import styled from "styled-components";

export const Header = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  a {
    p {
      margin: 0 0.5rem 0 0;
    }
  }
`;

export const IconContainer = styled.ul`
  display: flex;
  li {
    margin: 0 0.5rem;
    a {
      cursor: pointer;
      i {
        font-size: 1.5rem;
      }
    }
  }
`;

export const MainContent = styled.div`
  padding: 1rem 3rem 3rem 3rem;
`;

export const SideNav = styled.div`
  width: 20%;
`;

export const Navlink = styled.ul`
  padding: 0.5rem 1rem 1rem 1rem;
  li {
    padding: 0.4rem 0.3rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      border: 1.5px solid ${({ theme }) => theme.colors.baseColor2};
    }
    &.active {
      border: 1.5px solid ${({ theme }) => theme.colors.baseColor2};
    }
  }
`;

export const Content = styled.div`
  width: 80%;
  padding: 1rem;
  background: #0c0c0c;
  border-radius: 0.5rem;
`;
