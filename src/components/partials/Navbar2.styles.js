import styled from "styled-components";

export const MainNavbar = styled.nav`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: space-between;
`;

export const Logo = styled.a`
  padding: 0 1rem;
  width: 35%;
`;

export const Navlink = styled.div`
  padding: 0.5rem 3rem;
  width: 40%;
  ul {
    li {
      margin: 0 0.5rem;
    }
  }
`;

export const SideNav = styled.div`
  padding: 0.5rem 1rem;
  justify-content: end;
  width: 35%;
`;

export const SocialConatiner = styled.ul`
  padding: 0 1rem;
  display: flex;
  li {
    margin: 0 0.5rem;
    a {
      i {
        font-size: 1.5rem;
      }
    }
  }
`;

export const BtnWrapper = styled.div`
  padding: 0 1rem;
`;
