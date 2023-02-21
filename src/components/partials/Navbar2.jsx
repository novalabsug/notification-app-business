import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  BtnWrapper,
  Logo,
  MainNavbar,
  Navlink,
  SideNav,
  SocialConatiner,
} from "./Navbar2.styles";
import checkLoginFunc from "@/middleware/checkLogin";

const Navbar2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState({ status: false });

  const handleLogout = () => {
    localStorage.setItem("nmail", JSON.stringify({}));

    location.assign("/");
  };

  useEffect(() => {
    if (checkLoginFunc()) {
      setIsLoggedIn({ status: true });
    } else {
      setIsLoggedIn({ status: false });
    }
  }, []);

  return (
    <MainNavbar>
      <Logo>
        <Link href="/" className="flx">
          <h3 className="f-size-lrg bold-txt primary-color t-up">
            n<span className="bold-txt f-size-lrg t-up">mail</span>
          </h3>
        </Link>
      </Logo>

      <Navlink></Navlink>
      <SideNav className="flx">
        <SocialConatiner>
          <li>
            <Link href="https://google.com">
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
          <li>
            <Link href="https://google.com">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link href="https://google.com">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
        </SocialConatiner>
        <BtnWrapper>
          {isLoggedIn.status ? (
            <a onClick={handleLogout} className="btn">
              Logout
            </a>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </BtnWrapper>
      </SideNav>
    </MainNavbar>
  );
};

export default Navbar2;
